from flask import Flask, jsonify, request, render_template
from flask_socketio import SocketIO, send, emit
from dialog import *
from content import *
from group import *
from friend import *
from auth_and_register import *
from wall import *
from like_or_dislike import *
from user import *
import redis
import secrets

r = redis.StrictRedis(host='localhost', port=6379, db=0)

app = Flask(__name__)
app.config['SECRET_KEY'] = 'my_secret'

id_Message = 0

socketio = SocketIO(app, async_mod=None)


@app.route('/dialogs/<int:id_user>', methods=["GET"])
def get_dialogs(id_user):
    json = get_dialogs_for_user(id_user)
    return jsonify(json)


@app.route('/dialog/<int:id_user>', methods=["GET"])
def create(id_user):
    idDialog = create_dialog(id_user)
    return jsonify(idDialog)


@app.route('/rename_dialog/<int:id_dialog>', methods=["PUT"])
def rename(id_dialog):
    new_name = request.json.get('new_name')
    return jsonify(rename_dialog(id_dialog, new_name))


@app.route('/dialog/<int:id_dialog>/message/<int:id_message>', methods=['PUT'])
def change_status_for_message(id_dialog, id_message):
    new_status = request.json.get('new_status')
    id_user = request.json.get('id_user')
    return jsonify(update_status_message_for_user(id_dialog, id_message, new_status, id_user))


@app.route('/dialog/<int:id_dialog>/message/<int:id_message>', methods=['DELETE'])
def delete_message(id_dialog, id_message):
    id_user = request.json.get('id_user')
    return jsonify(delete_message_for_all(id_dialog, id_message, id_user))


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
    return jsonify(add_content_for_user(id_user, id_file))


@app.route('/get_groups/<int:id_user>', methods=['GET'])
def get_groups(id_user):
    return jsonify(get_groups_for_user(id_user))


@app.route('/create_group', methods=['POST'])
def create_group():
    name = request.json.get('name')
    description = request.json.get('description')
    id_user = request.json.get('id_user')
    return jsonify(create_group_by_user(name, description, id_user))


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
    result = authorization(login, password)
    if result.get('Error'):
        return jsonify(result)
    else:
        key = secrets.token_hex(10)
        r.set(key.__str__(), result.get('Id'), 3600)
    return jsonify({'session':key})


@app.route('/register', methods=['POST'])
def register():
    first_name = request.json.get('first_name')
    date = request.json.get('date')
    login = request.json.get('login')
    password = request.json.get('password')
    return jsonify(register_user(first_name, date, login, password))


@app.route('/walls/<int:id_wall>', methods=['GET'])
def get_wall(id_wall):
    wall = get_user_wall(id_wall)
    return jsonify(wall)


@app.route('/posts/<int:id_post>/status/<int:id_status>', methods=['PUT'])
def like_dislike(id_post, id_status):
    id_user = request.json.get('id_user')
    return put_like_dislike(id_post, id_status, id_user)


@app.route('/privacy/invisibility/<string:status>', methods=['PUT'])
def privacy_invisibility(status):
    id_user = request.json.get('id_user')
    return change_privacy_invisibility(status, id_user)


@app.route('/friends/<int:id_friend>', methods=['PUT'])
def add_friend(id_friend):
    id_user = request.json.get('id_user')
    wide_status = request.json.get('wide_status')
    return add_friends(id_friend, id_user, wide_status)


@app.route('/privacy/view_friends/<int:status>', methods=['PUT'])
def privacy_view_friends(status):
    id_user = request.json.get('id_user')
    id_friends = request.json.get('mass_id')
    return put_privacy_view_friends(status, id_user, id_friends)


@app.route('/privacy/view_groups/<int:status>', methods=['PUT'])
def privacy_view_groups(status):
    id_user = request.json.get('id_user')
    id_friends = request.json.get('mass_id')
    return put_privacy_view_groups(status, id_user, id_friends)


@app.route('/add_in_dialog', methods = ['POST'])
def add_in_dialog():
    id_user = request.json.get('id_user')
    id_dialog = request.json.get('id_dialog')
    return add_in_dialog(id_user, id_dialog)


@app.route('/')
def index():
    # conn = connect()
    # cur = conn.cursor()
    # cur.execute('SELECT "Message" FROM "Messages"')
    # conn.close()
    # messages = cur.fechall()
    return render_template('index.html', title='My Chat')


@socketio.on('message')
def handle_message(message):
    # print('message ' + message)
    # conn = connect()
    # cur = conn.cursor()
    # cur.execute('INSERT INTO "Messages" ("IdDialog", "IdUser", "IdMessage", "Message", "Time", "Status") VALUES (201, '
    #             + '101, ' + id_Message.__str__() + ', ' + message.__str__() + ', CURRENT_TIMESTAMP, 0 )')
    # cur.commit()
    # conn.close()
    # id_Message + 1
    send(message, broadcast=True)

socketio.run(app)

##app.run(port=80)