from connect import connect


def put_like_dislike(id_post, id_status, id_user):
    conn = connect()
    cursor = conn.cursor()
    cursor.execute('SELECT "Status" FROM "LikesAndDislikes" WHERE "IdPost" = '+id_post.__str__())
    row = cursor.fetchone()
    if not row:
        cursor.execute('INSERT INTO "LikesAndDislikes" ("IdPost", "IdUser", "Status") VALUES ('+id_post.__str__()+', '+
                       id_user.__str__()+', '+id_status.__str__()+')')
        conn.commit()
    else:
        cursor.execute('UPDATE "LikesAndDislikes" SET "Status" = '+id_status.__str__()+' WHERE "IdPost" = '+
                       id_post.__str__())
        conn.commit()
    conn.close()
    return