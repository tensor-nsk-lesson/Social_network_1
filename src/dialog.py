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
    number = random.randint(1, 100000).__str__()
    cur.execute('insert into "Dialogs" ("IdDialog", "IdUser", "Status", "NameDialog") '
                'values('+number+','+id_user.__str__()
                +', 0 , \'Dialog'+number+'\')'
                'returning "IdDialog"')
    id_dialog = cur.fetchone()
    conn.commit()
    conn.close()
    result = {
        "IdDialog": id_dialog[0]
    }
    return result


def create_dialog_test(id_user, id_friends):
    conn = connect()
    cur = conn.cursor()
    number = random.randint(1, 100000).__str__()
    cur.execute('INSERT INTO "Dialogs" ("IdDialog", "IdUser", "Status", "NameDialog") '
                'VALUES (' + number + ', ' + id_user.__str__() + ', 0, \'Dialog' +
                number + '\') returning "IdDialog"')
    id_dialog = cur.fetchone()
    for i in range(len(id_friends)):
        cur.execute('INSERT INTO "Dialogs" ("IdDialog", "IdUser", "Status", "NameDialog") '
                    'VALUES (' + number + ', ' + id_friends[i].__str__() + ', 0, \'Dialog' +
                    number + '\') returning "IdDialog"')
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


def add_user_in_dialog(id_user, id_dialog):
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


def create_dialog_for_two(id_user, id_alien):
    conn = connect()
    cur = conn.cursor()
    number = random.randint(1, 100000).__str__()
    cur.execute('insert into "Dialogs" ("IdDialog", "IdUser", "Status", "NameDialog") '
                'values(' + number + ',' + id_user.__str__()+
                ', 0 , \'Dialog' + number + '\'), '
                '(' + number + ',' + id_alien.__str__()+
                ', 0 , \'Dialog' + number + '\') '
                                              'returning "IdDialog"')
    id_dialog = cur.fetchone()
    conn.commit()
    conn.close()
    result = {
        "IdDialog": id_dialog[0]
    }
    return result


def push_message_in_dialog(id_dialog, id_user, message, time):
    conn = connect()
    cur = conn.cursor()
    cur.execute('insert into "Messages" ("IdDialog", "IdUser", "Message", "Time", "Status") '
                'values('+id_dialog.__str__()+', '+id_user.__str__()+', \''+message.__str__()+'\', '
                +'to_timestamp(\''+time.__str__()+'\', \'dd-mm-yy hh24:mi:ss\'), 0)')
    conn.commit()
    conn.close()
    return
