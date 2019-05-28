import unittest
import requests


class TestApi(unittest.TestCase):

    def test_get_dialogs(self):
        resp = requests.get('http://127.0.0.1:80/dialogs/7')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_create_dialog(self):
        resp = requests.get('http://127.0.0.1:80/dialog/7')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_rename_dialog(self):
        data = {
            "new_name": "BOOM"
        }
        resp = requests.put('http://127.0.0.1:80/rename_dialog/1', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_change_status_message(self):
        data = {
            "new_status": 1,
            "id_user":  102
        }
        resp = requests.put('http://127.0.0.1:80/dialog/502/message/4', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_delete_message(self):
        data = {
            "id_user":  102
        }
        resp = requests.delete('http://127.0.0.1:80/dialog/501/message/5', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_messages(self):
        resp = requests.get('http://127.0.0.1:80/dialog/502/get_messages')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_content(self):
        resp = requests.get('http://127.0.0.1:80/global_content/1')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_add_content(self):
        data = {
            "id_user":  7,
            "id_file": 5
        }
        resp = requests.post('http://127.0.0.1:80/add_local_content', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_groups_for_user(self):
        resp = requests.get('http://127.0.0.1:80/get_groups/7')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_create_group(self):
        data = {
            "name":  "ВНЕЗАПНО АНАНАСЫ",
            "description": "СЛАВА КТУЛХУ",
            "id_user": 7
        }
        resp = requests.post('http://127.0.0.1:80/create_group', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_group(self):
        resp = requests.get('http://127.0.0.1:80/get_group/1')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_users_group(self):
        resp = requests.get('http://127.0.0.1:80/users_group/1')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_add_user(self):
        data = {
            'id_user': 8,
            'id_group': 3
        }
        resp = requests.post('http://127.0.0.1:80/add_user_in_group', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_friends(self):
        resp = requests.get('http://127.0.0.1:80/friend/7')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_auth(self):
        data = {
            'login': 'Person1',
            'password': 1
        }
        resp = requests.post('http://127.0.0.1:80/auth', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_register(self):
        data = {
            'first_name': 'DIEMATH',
            'date': '20.05.2005',
            'login':'Person2',
            'password':'2'
        }
        resp = requests.post('http://127.0.0.1:80/register', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_wall(self):
        resp = requests.get('http://127.0.0.1:80/walls/7')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_like_dislike(self):
        data = {
            'id_user':7
        }
        resp = requests.put('http://127.0.0.1:80/post/1/status/false', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_privacy_invisibility(self):
        data = {
            'id_user': 7
        }
        resp = requests.put('http://127.0.0.1:80/privacy/invisibility/true', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_add_friend(self):
        data = {
            'id_user': 7,
            'wide_status': 'Лол'
        }
        resp = requests.put('http://127.0.0.1:80/friends/13', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_privacy_view_friends(self):
        data = {
            'id_user': 7,
            'mass_id': [
                {12},
                {13}
            ]
        }
        resp = requests.put('http://127.0.0.1:80/privacy/view_friends/0', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_privacy_view_groups(self):
        data = {
            'id_user': 7,
            'mass_id': [
                {12},
                {13}
            ]
        }
        resp = requests.put('http://127.0.0.1:80/privacy/view_friends/0', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

