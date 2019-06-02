from test_for_api import *

id_session = ''

test = TestApi()
test.test_auth()
test.test_get_dialogs()
test.test_create_dialog()
test.test_rename_dialog()
test.test_change_status_message()
test.test_delete_message()
test.test_get_messages()
test.test_get_content()
test.test_add_content()
test.test_get_groups_for_user()
test.test_create_group()
test.test_get_group()
test.test_get_users_group()
test.test_add_user()
test.test_get_friends()
#test.test_register() - требуются уникальные данные, иначе ругается на дубликат
test.test_get_wall()
test.test_like_dislike()
test.test_privacy_invisibility()
test.test_add_friend()
test.test_privacy_view_friends()
test.test_privacy_view_groups()

