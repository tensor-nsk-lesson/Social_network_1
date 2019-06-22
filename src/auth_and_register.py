from connect import connect


def authorization(login, password):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select "Id" from "Authorization" where "Login" = \''+login.__str__()+'\' and "Password" = \''+password.__str__()+'\'')
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


def register_user(first_name, date, login, password, time):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select "Login" from "Authorization" where "Login" = \''+login.__str__()+'\'')
    all_login = cur.fetchall();
    if not all_login:
        cur.execute('insert into "Authorization" ("Login","Password")'
                    ' values(\''+login.__str__()+'\', \''+password.__str__()+'\') returning "Id"');
        id = cur.fetchone();
        conn.commit()
        cur.execute('insert into "Profile" ("Id", "FirstName","Date", "LastActivity", "StatusProfile")'
                    ' values('+id[0].__str__()+',\''+first_name.__str__()+'\','
                    'to_timestamp(\''+date.__str__()+'\', \'dd-mm-yy\'), '
                    'to_timestamp(\''+time.__str__()+'\', \'dd-mm-yy hh24:mi:ss\'), 1)')
        conn.commit()
        conn.close()
        return {'success':'success'}
    else:
        return {'error':'Account with it login already exsist'}
