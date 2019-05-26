import unittest
import requests


class TestApi(unittest.TestCase):

    def test_get_dialogs(self):
        resp = requests.get('http://127.0.0.1:80/dialogs/101')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_create_dialog(self):
        resp = requests.get('http://127.0.0.1:80/dialog/101')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_rename_dialog(self):
        data = {
            "new_name": "BOOM"
        }
        resp = requests.put('http://127.0.0.1:80/rename_dialog/502', json=data)
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
            "id_user":  102,
            "id_file": 5
        }
        resp = requests.post('http://127.0.0.1:80/add_local_content', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_groups_for_user(self):
        resp = requests.get('http://127.0.0.1:80/get_groups/101')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_create_group(self):
        data = {
            "name":  "ВНЕЗАПНО АНАНАСЫ",
            "description": "СЛАВА КТУЛХУ",
            "id_user": 103
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
            'id_user': 101,
            'id_group': 6
        }
        resp = requests.post('http://127.0.0.1:80/add_user_in_group', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_friends(self):
        resp = requests.get('http://127.0.0.1:80/friend/101')
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

## Пока не понял в чем косяк буду разбираться
    def test_register(self):
        data = {
            'first_name': 'DIEMATH',
            'date': '20.05.2005'
        }
        resp = requests.post('http://127.0.0.1:80/register', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_token(self):
        resp = requests.get('http://127.0.0.1:80/token/101')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

## Пока не понял в чем косяк буду разбираться
    def test_get_wall(self):
        resp = requests.get('http://127.0.0.1:80/walls/101')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_like_dislike(self):
        data = {
            'id_user':101
        }
        resp = requests.put('http://127.0.0.1:80/post/5/status/true', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)
