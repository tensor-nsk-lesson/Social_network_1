from connect import connect


def get_user_wall(id_wall):
    conn = connect()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM "Walls" WHERE "IdWall" = '+id_wall.__str__()+'"Status" = 1');
    rows = cursor.fetchall()
    result = []
    for row in rows:
        data = {
            "IdPost": row[0]
        }
        result.append(data)
    conn.close()
    return result