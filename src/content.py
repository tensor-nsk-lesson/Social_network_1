from connect import  connect


def get_content_by_type(status):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select * from "GlobalContent" where "Status" = '+status.__str__())
    rows = cur.fetchall()
    result = []
    for row in rows:
        data = {
            "IdFile": row[0],
            "File": row[1],
            "Status": row[2]
        }
        result.append(data)
    conn.close()
    return result


def add_content_for_user(id_user, id_file):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select * from "GlobalContent" where "IdFile" = '+id_file.__str__())
    result = cur.fetchone()
    cur.execute('insert into "LocalContent" ("IdContent", "IdFile") values('+id_user.__str__()+','+result[0].__str__()+')')
    conn.commit()
    conn.close()
    return

