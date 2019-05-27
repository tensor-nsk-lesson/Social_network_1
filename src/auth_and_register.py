from connect import connect
import secrets
import datetime


def authorization(login, password):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select "Id" from "Authorization" where "Login" = \''+login.__str__()+'\' and "Password" = '+password.__str__())
    user = cur.fetchone()
    if not user:
        data = {
            "Error":"Wrong login or password"
        }
    else:
        data = {
            "Id":user[0]
        }
    conn.close()
    return data


def register_user(first_name, date):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select max("Id") from "Profile" ')
    result = cur.fetchone()
    result = result[0] + 1
    cur.execute('insert into "Profile" ("Id", "FirstName","Date", "StatusProfile")'
                ' values('+result.__str__()+',\''+first_name.__str__()+'\',to_timestamp(\''+date.__str__()+'\', \'dd-mm-yy\'), 1)')
    conn.commit()
    conn.close()
    return


def get_token(id_user):
    conn = connect()
    cur = conn.cursor()
    now = datetime.datetime.now()
    cur.execute('insert into "Token" ("IdUser", "Password", "Time")'
                ' values('+id_user.__str__()+',10,to_timestamp(\''+now.strftime("12:%M:%S")+'\',\'hh:mi:ss\'))')
    conn.commit()
    conn.close()
    return