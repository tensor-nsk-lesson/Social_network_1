from connect import connect


def get_user_wall(id_wall, status):
    conn = connect()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM "Walls" WHERE "IdWall" = '+id_wall.__str__()+' and "Status" = '+status.__str__())
    rows = cursor.fetchall()
    result = []
    for row in rows:
        data = {
            "IdPost": row[1]
        }
        result.append(data)
    conn.close()
    return result

