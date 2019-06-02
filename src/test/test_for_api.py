import unittest
import requests


class TestApi(unittest.TestCase):

    def test_auth(self):
        data = {
            'login': 'Login',
            'password': 4
        }
        resp = requests.post('http://127.0.0.1:5000/auth', json=data)
        global id_session
        id_session = resp.json().get('session')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_dialogs(self):
        global id_session
        resp = requests.get('http://127.0.0.1:5000/dialogs/'+id_session)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_create_dialog(self):
        resp = requests.get('http://127.0.0.1:5000/dialog/'+id_session)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_rename_dialog(self):
        data = {
            "new_name": "BOOM"
        }
        resp = requests.put('http://127.0.0.1:5000/rename_dialog/90690', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_change_status_message(self):
        data = {
            "new_status": 1,
            "id_session":  id_session
        }
        resp = requests.put('http://127.0.0.1:5000/dialog/90960/message/1', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_delete_message(self):
        data = {
            "id_session":  id_session
        }
        resp = requests.delete('http://127.0.0.1:5000/dialog/90960/message/2', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_messages(self):
        resp = requests.get('http://127.0.0.1:5000/dialog/90960/get_messages')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_content(self):
        resp = requests.get('http://127.0.0.1:5000/global_content/1')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_add_content(self):
        data = {
            "id_session":  id_session,
            "id_file": 5
        }
        resp = requests.post('http://127.0.0.1:5000/add_local_content', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_groups_for_user(self):
        resp = requests.get('http://127.0.0.1:5000/get_groups/'+id_session)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_create_group(self):
        data = {
            "name":  "ВНЕЗАПНО АНАНАСЫ",
            "description": "СЛАВА КТУЛХУ",
            "id_session": id_session
        }
        resp = requests.post('http://127.0.0.1:5000/create_group', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_group(self):
        resp = requests.get('http://127.0.0.1:5000/get_group/1')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_users_group(self):
        resp = requests.get('http://127.0.0.1:5000/users_group/1')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_add_user(self):
        data = {
            'id_user': 8,
            'id_group': 3
        }
        resp = requests.post('http://127.0.0.1:5000/add_user_in_group', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_friends(self):
        resp = requests.get('http://127.0.0.1:5000/friend/'+id_session)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_register(self):
        data = {
            'first_name': 'DIEMATH',
            'date': '20.05.2005',
            'login':'Person2',
            'password':'2'
        }
        resp = requests.post('http://127.0.0.1:5000/register', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_wall(self):
        resp = requests.get('http://127.0.0.1:5000/walls/1')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_like_dislike(self):
        data = {
            'id_session': id_session
        }
        resp = requests.put('http://127.0.0.1:5000/posts/1/status/false', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_privacy_invisibility(self):
        data = {
            'id_session': id_session
        }
        resp = requests.put('http://127.0.0.1:5000/privacy/invisibility/true', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_add_friend(self):
        data = {
            'id_session': id_session,
            'wide_status': 'Лол'
        }
        resp = requests.put('http://127.0.0.1:5000/friends/12', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_privacy_view_friends(self):
        data = {
            'id_session': id_session,
            'mass_id': [
                12,
                13
            ]
        }
        resp = requests.put('http://127.0.0.1:5000/privacy/view_friends/0', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_privacy_view_groups(self):
        data = {
            'id_session': id_session,
            'mass_id': [
                12,
                13
            ]
        }
        resp = requests.put('http://127.0.0.1:5000/privacy/view_friends/0', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

