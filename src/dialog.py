from connect import connect
import random

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
    cur.execute('insert into "Dialogs" ("IdUser", "Status", "NameDialog") '
                'values('+id_user.__str__()
                +', 0 , \'Dialog'+random.randint(1, 100000).__str__()+'\')'
                'returning "IdDialog"')
    id_dialog = cur.fetchone()
    conn.commit()
    conn.close()
    result = {
        "IdDialog": id_dialog[0]
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


def add_in_dialog(id_user, id_dialog):
    conn = connect()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM "Dialogs" WHERE "IdDialog" = '+id_dialog.__str__())
    row = cursor.fetchone()
    cursor.execute('INSERT INTO "Dialogs" ("IdDialog", "IdUser", "Status", "NameDialog", "Photo") VALUES '
                   + ' (' + id_dialog.__str__()+', ' + id_user.__str__() + ', ' + row[2].__str__()
                   + ', \'' + row[3].__str__() + '\', \'' + row[5].__str__() + '\')')
    conn.commit()
    conn.close()
    return
