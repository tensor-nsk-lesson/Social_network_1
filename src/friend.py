from connect import connect


def get_friends_for_user(id_user):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select * from "Friends" where ("IdUser" = '+id_user.__str__()+' or "IdFriend" = '+id_user.__str__()+') and "Status" = 2')
    rows = cur.fetchall()
    result = []
    for row in rows:
        if (row[0].__str__() == id_user.__str__()):
            friend = row[1]
        else:
            friend = row[0]
        data = {
            "IdFriend": friend,
            "Status": row[2],
            "WideStatus": row[3]
        }
        result.append({'friend':data})
    conn.close()
    return result


def add_friends(id_friend, id_user, wide_status):
    conn = connect()
    cursor = conn.cursor()
    cursor.execute('select * from "Friends" where "IdUser" = '+id_user.__str__()+' or "IdFriend" ='+id_user.__str__())
    friend = cursor.fetchone()
    if not friend:
        cursor.execute('INSERT INTO "Friends" ("IdUser", "IdFriend", "Status", "WideStatus") VALUES ('+id_user.__str__()
                   + ', '+id_friend.__str__()+', 0,\''+wide_status.__str__() + '\')')
    else:
        cursor.execute('UPDATE "Friends" set "Status" = 2 where "Status" = 1 and ("IdUser" = '+id_user.__str__()+' or "IdFriend" ='+id_user.__str__()+')')
    conn.commit()
    conn.close()
    return
