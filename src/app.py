from flask import Flask, jsonify, request
from dialog import *
from content import *
from group import *
from friend import *
from auth_and_register import *
from wall import *
from like_or_dislike import *

app = Flask(__name__)


@app.route('/dialogs/<int:id_user>', methods=["GET"])
def get_dialogs(id_user):
    json = get_dialogs_for_user(id_user)
    return jsonify(json)


@app.route('/dialog/<int:id_user>', methods=["GET"])
def create(id_user):
    idDialog = create_dialog(id_user)
    return jsonify(idDialog)


#@app.route('/add_in_dialog', methods=["POST"])
#def addInDialog():


@app.route('/rename_dialog/<int:id_dialog>', methods=["PUT"])
def rename(id_dialog):
    new_name = request.json.get('new_name')
    rename_dialog(id_dialog, new_name)
    return


@app.route('/dialog/<int:id_dialog>/message/<int:id_message>', methods=['PUT'])
def change_status_for_message(id_dialog, id_message):
    new_status = request.json.get('new_status')
    id_user = request.json.get('id_user')
    update_status_message_for_user(id_dialog, id_message, new_status, id_user)
    return


@app.route('/dialog/<int:id_dialog>/message/<int:id_message>', methods=['DELETE'])
def delete_message(id_dialog, id_message):
    id_user = request.json.get('id_user')
    delete_message_for_all(id_dialog, id_message, id_user)
    return


@app.route('/dialog/<int:id_dialog>/get_messages', methods=['GET'])
def get_messages(id_dialog):
    return jsonify(get_messages_for_user(id_dialog))


@app.route('/global_content/<int:status>', methods=['GET'])
def get_contents(status):
    return jsonify(get_content_by_type(status))


@app.route('/add_local_content', methods=['POST'])
def add_content():
    id_user = request.json.get('id_user')
    id_file = request.json.get('id_file')
    add_content_for_user(id_user, id_file)
    return


@app.route('/get_groups/<int:id_user>', methods=['GET'])
def get_groups(id_user):
    return jsonify(get_groups_for_user(id_user))


@app.route('/create_group', methods=['POST'])
def create_group():
    name = request.json.get('name')
    description = request.json.get('description')
    id_user = request.json.get('id_user')
    create_group_by_user(name, description, id_user)
    return


@app.route('/get_group/<int:id_group>', methods=['GET'])
def get_group(id_group):
    return jsonify(get_info_group(id_group))


@app.route('/users_group/<int:id_group>', methods=['GET'])
def get_users_group(id_group):
    return jsonify(get_info_users_group(id_group))


@app.route('/add_user_in_group', methods=['POST'])
def add_user():
    id_user = request.json.get('id_user')
    id_group = request.json.get('id_group')
    return jsonify(add_user_in_group(id_user, id_group))


@app.route('/friend/<int:id_user>', methods=['GET'])
def get_friends(id_user):
    return jsonify(get_friends_for_user(id_user))


@app.route('/auth', methods=['POST'])
def auth():
    login = request.json.get('login')
    password = request.json.get('password')
    return jsonify(authorization(login, password))


@app.route('/register', methods=['POST'])
def register():
    first_name = request.json.get('first_name')
    date = request.json.get('date')
    return jsonify(register(first_name, date))


@app.route('/token/<int:id_user>', methods=['GET'])
def get_friends(id_user):
    return jsonify(get_token(id_user))


@app.route('/walls/<int:id_wall>', methods=['GET'])
def get_wall(id_wall):
    wall = get_user_wall(id_wall)
    return jsonify(wall)


@app.route('/post/<int:id_post>/status/<int:id_status>', methods=['PUT'])
def like_dislike(id_post, id_status):
    id_user = request.json.get('id_user')
    put_like_dislike(id_post, id_status, id_user)
    return

@app.route("/profile/<int:id>", methods=['GET'])
def get_profile(id):
    json = get_profile_info(id)
    return jsonify(json)


app.run(port=80)
