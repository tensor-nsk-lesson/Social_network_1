import unittest
import requests


class TestApi(unittest.TestCase):

    def test_auth(self):
        data = {
            'login': 'Person1',
            'password': 'aaa'
        }
        resp = requests.post('http://127.0.0.1:80/auth', json=data)
        success = resp.json().get('success')
        session = resp.cookies.get('session')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)
        return resp

    def test_get_dialogs(self):
        resp = self.test_auth()
        resp = requests.get('http://127.0.0.1:80/dialogs/', cookies=resp.cookies)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_create_dialog(self):
        resp = self.test_auth()
        resp = requests.get('http://127.0.0.1:80/dialog/', cookies=resp.cookies)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_rename_dialog(self):
        data = {
            "new_name": "BOOM"
        }
        resp = requests.put('http://127.0.0.1:80/rename_dialog/90690', json=data)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_change_status_message(self):
        resp = self.test_auth()
        data = {
            "new_status": 1
        }
        resp = requests.put('http://127.0.0.1:80/dialog/90960/message/1', json=data, cookies=resp.cookies)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_delete_message(self):
        resp = self.test_auth()
        resp = requests.delete('http://127.0.0.1:80/dialog/90960/message/2', cookies=resp.cookies)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_messages(self):
        resp = requests.get('http://127.0.0.1:80/dialog/90960/get_messages')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_content(self):
        resp = requests.get('http://127.0.0.1:80/global_content/1')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_add_content(self):
        resp = self.test_auth()
        data = {
            "id_file": 5
        }
        resp = requests.post('http://127.0.0.1:80/add_local_content', json=data, cookies=resp.cookies)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_groups_for_user(self):
        resp = self.test_auth()
        resp = requests.get('http://127.0.0.1:80/get_groups/', cookies=resp.cookies)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_create_group(self):
        resp = self.test_auth()
        data = {
            "name":  "ВНЕЗАПНО АНАНАСЫ",
            "description": "СЛАВА КТУЛХУ"
        }
        resp = requests.post('http://127.0.0.1:80/create_group', json=data, cookies=resp.cookies)
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
        resp = self.test_auth()
        resp = requests.get('http://127.0.0.1:80/friend', cookies=resp.cookies)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_register(self):
        data = {
            'first_name': 'DIEMATH',
            'date': '20.05.2005',
            'login':'Person49',
            'password': '2'
        }
        resp = requests.post('http://127.0.0.1:80/register', json=data)
        error = resp.json().get('error')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_wall(self):
        resp = requests.get('http://127.0.0.1:80/walls/1')
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_like_dislike(self):
        resp = self.test_auth()
        resp = requests.put('http://127.0.0.1:80/posts/1/status/false', cookies=resp.cookies)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_privacy_invisibility(self):
        resp = self.test_auth()
        resp = requests.put('http://127.0.0.1:80/privacy/invisibility/true', cookies=resp.cookies)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_add_friend(self):
        resp = self.test_auth()
        data = {
            'wide_status': 'Лол'
        }
        resp = requests.put('http://127.0.0.1:80/friends/12', json=data, cookies=resp.cookies)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_privacy_view_friends(self):
        resp = self.test_auth()
        data = {
            'mass_id': [
                12,
                13
            ]
        }
        resp = requests.put('http://127.0.0.1:80/privacy/view_friends/0', json=data, cookies=resp.cookies)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_privacy_view_groups(self):
        resp = self.test_auth()
        data = {
            'mass_id': [
                12,
                13
            ]
        }
        resp = requests.put('http://127.0.0.1:80/privacy/view_friends/0', json=data, cookies=resp.cookies)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)

    def test_get_profile_user(self):
        resp = self.test_auth()
        resp = requests.get('http://127.0.0.1:80/get_profile/', cookies=resp.cookies)
        self.assertEqual(resp.status_code, 200)
        self.assertIsNotNone(resp.text)