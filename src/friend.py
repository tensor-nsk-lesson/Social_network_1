from connect import connect


def get_friends_for_user(id_user):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select * from "Friends" where ("IdUser" = '+id_user.__str__()+' or "IdFriend" = '+id_user.__str__()+') and "Status" = 2')
    rows = cur.fetchall()
    result = []
    for row in rows:
        friend = 0
        if (row[0] == id_user):
            friend = row[1]
        else:
            friend = row[0]
        data = {
            "IdFriend": friend,
            "Status": row[2],
            "WideStatus": row[3]
        }
        result.append(data)
    conn.close()
    return result

