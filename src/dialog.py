from connect import connect


def get_dialogs_for_user(id_user):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select "IdDialog", "NameDialog" from "Dialogs" where "IdUser" = '+id_user.__str__()+' ')
    rows = cur.fetchall()
    result = []
    for row in rows:
        data = {
            "IdDialog": row[0],
            "NameDialog": row[1]
        }
        result.append(data)
    conn.close()
    return result


def create_dialog(id_user):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select max("IdDialog") from "Dialogs"')
    max = cur.fetchone()
    max = max[0] + 1
    cur.execute('insert into "Dialogs" ("IdDialog", "IdUser", "Status", "NameDialog") '
                'values('+max.__str__()+','
                +id_user.__str__()
                +', 0 , \'Dialog'+max.__str__()+'\')')
    conn.commit()
    conn.close()
    result = {
        "IdDialog": max
    }
    return result


def rename_dialog(id_dialog, new_name):
    conn = connect()
    cur = conn.cursor()
    cur.execute('update "Dialogs" set "NameDialog"=\''+new_name.__str__()+'\' where "IdDialog" = '+id_dialog.__str__())
    conn.commit()
    conn.close()
    return


def update_status_message_for_user(id_dialog, id_message, new_status, id_user):
    conn = connect()
    cur = conn.cursor()
    cur.execute(
        'update "Messages" set "Status"=\'' + new_status.__str__() + '\' where "IdDialog" = ' + id_dialog.__str__()+
        ' and "IdMessage" = ' +id_message.__str__()+ ' and "IdUser" = ' + id_user.__str__()
    )
    conn.commit()
    conn.close()
    return


def delete_message_for_all(id_dialog, id_message, id_user):
    conn = connect()
    cur = conn.cursor()
    cur.execute(
        'delete from "Messages"  where "IdDialog" = ' + id_dialog.__str__() +
        ' and "IdMessage" = ' + id_message.__str__() + ' and "IdUser" = ' + id_user.__str__()
    )
    conn.commit()
    conn.close()
    return


def get_messages_for_user(id_dialog):
    conn = connect()
    cur = conn.cursor()
    cur.execute(
        'select * from "Messages" where "IdDialog" = '+id_dialog.__str__()+' order by "Time"'
    )
    rows = cur.fetchall()
    result = []
    for row in rows:
        data = {
            "IdDialog": row[0],
            "IdUser": row[1],
            "IdMessage": row[2],
            "Message":row[3],
            "Time": row[4],
            "Status": row[5]
        }
        result.append(data)
    conn.commit()
    conn.close()
    return result
