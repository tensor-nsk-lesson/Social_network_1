from flask_socketio import SocketIO, send, emit, join_room, leave_room
import os
from flask import Flask, render_template, jsonify, request, make_response
from dialog import *
from content import *
from group import *
from friend import *
from auth_and_register import *
from wall import *
from like_or_dislike import *
from user import *
from profile import *
import redis
import secrets


r = redis.StrictRedis(host='localhost', port=6379, db=0, decode_responses=True)

project_root = os.path.dirname(__file__)
template_path = os.path.join(project_root, '../client/demo/fox-net/public')
static_path = os.path.join(project_root, '../client/demo/fox-net/src')

app = Flask(__name__, template_folder=template_path, static_folder=static_path)

app.config['SECRET_KEY'] = 'my_secret'

id_Message = 0

socketio = SocketIO(app, async_mod=None)


@app.route('/dialogs/', methods=["GET"])
def get_dialogs():
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error':'true'
        }
    else:
        json = get_dialogs_for_user(id_user)
    return jsonify(json)


@app.route('/dialog/', methods=["GET"])
def create():
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error':'true'
        }
        return jsonify(json)
    else:
        id_dialog = create_dialog(id_user)
        return jsonify(id_dialog)


@app.route('/rename_dialog/<int:id_dialog>', methods=["PUT"])
def rename(id_dialog):
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        new_name = request.json.get('new_name')
        return jsonify(rename_dialog(id_dialog, new_name))


@app.route('/dialog/<int:id_dialog>/message/<int:id_message>', methods=['PUT'])
def change_status_for_message(id_dialog, id_message):
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        new_status = request.json.get('new_status')
        return jsonify(update_status_message_for_user(id_dialog, id_message, new_status, id_user))


@app.route('/dialog/<int:id_dialog>/message/<int:id_message>', methods=['DELETE'])
def delete_message(id_dialog, id_message):
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        return jsonify(delete_message_for_all(id_dialog, id_message, id_user))


@app.route('/test', methods=['GET'])
def testing():
    test = ['hi']
    return jsonify(test)


@app.route("/hello")
def hello():
    return "Hello World!"


@app.route('/dialog/<int:id_dialog>/get_messages', methods=['GET'])
def get_messages(id_dialog):
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        return jsonify(get_messages_for_user(id_dialog))


@app.route('/global_content/<int:status>', methods=['GET'])
def get_contents(status):
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        return jsonify(get_content_by_type(status))


@app.route('/add_local_content', methods=['POST'])
def add_content():
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        id_file = request.json.get('id_file')
        return jsonify(add_content_for_user(id_user, id_file))


@app.route('/get_groups/', methods=['GET'])
def get_groups():
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        return jsonify(get_groups_for_user(id_user))


@app.route('/create_group', methods=['POST'])
def create_group():
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        name = request.json.get('name')
        description = request.json.get('description')
        return jsonify(create_group_by_user(name, description, id_user))


@app.route('/get_group/<int:id_group>', methods=['GET'])
def get_group(id_group):
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        return jsonify(get_info_group(id_group))


@app.route('/users_group/<int:id_group>', methods=['GET'])
def get_users_group(id_group):
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        return jsonify(get_info_users_group(id_group))


@app.route('/add_user_in_group', methods=['POST'])
def add_user():
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        id_group = request.json.get('id_group')
        return jsonify(add_user_in_group(id_user, id_group))


@app.route('/friend', methods=['GET'])
def get_friends():
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
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
        r.set(key.__str__(), result.get('Id').__str__(), 3600)
        cookie = make_response(jsonify({'success':'success'}))
        cookie.set_cookie('session', key.__str__(), max_age=None);
    return cookie


@app.route('/register', methods=['POST'])
def register():
    first_name = request.json.get('first_name')
    date = request.json.get('date')
    login = request.json.get('login')
    password = request.json.get('password')
    time = request.json.get('time')
    return jsonify(register_user(first_name, date, login, password, time))


@app.route('/walls/', methods=['POST'])
def get_wall():
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        status = request.json.get('status')
        if status == 'TRUE':
            id_wall = r.get(request.cookies.get('session'))
        else:
            id_wall = request.json.get('id_group')
        return jsonify(get_user_wall(id_wall, status))


@app.route('/posts/<int:id_post>/status/<string:id_status>', methods=['PUT'])
def like_dislike(id_post, id_status):
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        return jsonify(put_like_dislike(id_post, id_status, id_user))


@app.route('/privacy/invisibility/<string:status>', methods=['PUT'])
def privacy_invisibility(status):
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        return jsonify(change_privacy_invisibility(status, id_user))


@app.route('/friends/<int:id_friend>', methods=['PUT'])
def add_friend(id_friend):
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        wide_status = request.json.get('wide_status')
        return jsonify(add_friends(id_friend, id_user, wide_status))


@app.route('/privacy/view_friends/<int:status>', methods=['PUT'])
def privacy_view_friends(status):
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        id_friends = request.json.get('mass_id')
        return jsonify(put_privacy_view_friends(status, id_user, id_friends))


@app.route('/privacy/view_groups/<int:status>', methods=['PUT'])
def privacy_view_groups(status):
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        id_friends = request.json.get('mass_id')
        return jsonify(put_privacy_view_groups(status, id_user, id_friends))


@app.route('/add_in_dialog', methods = ['POST'])
def add_in_dialog():
    owner = r.get(request.cookies.get('session'))
    if not owner:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        id_user = request.json.get('id_user')
        id_dialog = request.json.get('id_dialog')
        return jsonify(add_in_dialog(id_user, id_dialog))


@app.route('/get_profile/', methods = ['GET'])
def get_profile_user():
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        return jsonify(get_profile_info(id_user))


@app.route('/get_profile/<int:id_user>', methods = ['GET'])
def get_profile_another_user(id_user):
    owner = r.get(request.cookies.get('session'))
    if not owner:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        return jsonify(get_profile_info(id_user))


@app.route('/get_fake_profile/<int:id_fake>', methods = ['GET'])
def get_fake_profile(id_user):
    owner = r.get(request.cookies.get('session'))
    if not owner:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        return jsonify(get_fake_info(id_user))


@app.route('/logout', methods = ['GET'])
def logout():
    id_user = r.get(request.cookies.get('session'))
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        r.delete(request.cookies.get('session'))
        return jsonify({'success':'success'})


@app.route('/')
def index():
    # conn = connect()
    # cur = conn.cursor()
    # cur.execute('SELECT "Message" FROM "Messages"')
    # conn.close()
    # messages = cur.fechall()
    return render_template('index.html', title='My Chat')


@app.route('/profile_change/<int:id_user>', methods = ['PUT'])
def profile_change():
    id_user = r.get(request.cookies.get('session'))
    photo = request.json.get('photo')
    secondName = request.json.get('secondName')
    firstName = request.json.get('firstName')
    fatherName = request.json.get('fatherName')
    aboutMe = request.json.get('aboutMe')
    status = request.json.get('status')
    gender = request.json.get('gender')
    city = request.json.get('city')
    if not id_user:
        json = {
            'Error': 'true'
        }
        return jsonify(json)
    else:
        return jsonify(profile_changes(id_user, photo, secondName, firstName, fatherName, aboutMe, status, gender, city))


@socketio.on('join')
def join_dialog(data):
    username = data['username']
    room = data['room']
    join_room(room)
    send(username + ' вошел в комнату.', room=room)


@socketio.on('leave')
def on_leave(data):
    username = data['username']
    room = data['room']
    leave_room(room)
    send(username + ' покинул комнату.', room=room)


@socketio.on('message')
def on_leave(data):
    room = data['room']
    message = data['message']
    leave_room(room)
    emit(message.__str__(), room=room)


socketio.run(app, host='localhost', port=80)


app.run(port=80)
