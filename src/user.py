from connect import connect


def change_privacy_invisibility(status, id_user):
    conn = connect()
    cursor = conn.cursor()
    cursor.execute('UPDATE "Privacy" SET "Invisibility" ='+status.__str__()+' WHERE "Id" = '+id_user.__str__())
    conn.commit()
    conn.close()
    return


def put_privacy_view_friends(status, id_user, id_friends):
    conn = connect()
    cursor = conn.cursor()
    if status == id_user:
        for i in range(len(id_friends)):
            cursor.execute('INSERT INTO "SeeingFriends" ("IdUser", "IdFriend") VALUES (' + id_user.__str__() + ', '
                           + id_friends[i].__str__() + ')')
    else:
        cursor.execute('UPDATE "Privacy" SET "ViewFriends" = ' + status.__str__() + ' WHERE "Id" = '
                       + id_user.__str__())
        cursor.execute('delete from "Privacy" WHERE "Id" = ' + id_user.__str__())
    conn.commit()
    conn.close()
    return


def put_privacy_view_groups(status, id_user, id_friends):
    conn = connect()
    cursor = conn.cursor()
    if status == id_user:
        for i in range(len(id_friends)):
            cursor.execute('INSERT INTO "SeeingGroup" ("IdUser", "IdFriend") VALUES (' + id_user.__str__() + ', '
                           + id_friends[i].__str__() + ')')
    else:
        cursor.execute('UPDATE "Privacy" SET "ViewGroups" = ' + status.__str__() + ' WHERE "Id" = '
                       + id_user.__str__())
        cursor.execute('delete from "Privacy" WHERE "Id" = '+ id_user.__str__())
    conn.commit()
    conn.close()
    return

