from connect import connect


def get_groups_for_user(id_user):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select "IdGroup" from "UsersGroup" where "IdUser" = '+id_user.__str__())
    rows = cur.fetchall()
    result = []
    for row in rows:
        cur.execute('select "Name" from "Groups" where "IdGroup" = ' + row[0].__str__())
        name_group = cur.fetchone()
        data = {
            "IdGroup":row[0],
            "Name":name_group
        }
        result.append(data)
    conn.close()
    return result


def create_group_by_user(name, description, id_user):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select max("IdGroup") from "Groups"')
    max = cur.fetchone()
    max = max[0] + 1
    cur.execute('insert into "Groups" ("IdGroup", "Name", "Description") values('+max.__str__()+',\''+name.__str__()+'\',\''+description.__str__()+'\')')
    cur.execute('insert into "UsersGroup" ("IdGroup", "IdUser") values('+max.__str__()+','+id_user.__str__()+')')
    conn.commit()
    conn.close()
    return


def get_info_group(id_group):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select * from "Groups" where "IdGroup" = '+id_group.__str__())
    row = cur.fetchone()
    result = {
        "IdGroup":row[0],
        "Name":row[1],
        "Description":row[2]
    }
    conn.close()
    return result

def get_info_users_group(id_group):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select * from "UsersGroup" where "IdGroup" = '+id_group.__str__())
    rows = cur.fetchall()
    result = []
    for row in rows:
        cur.execute('select "Id", "Photo", "SecondName", "FirstName", "StatusProfile" from "Profile" where "Id" = ' + row[1].__str__())
        user = cur.fetchone()
        data = {
            "Id":user[0],
            "Photo": user[1],
            "SecondName": user[2],
            "FirstName": user[3],
            "StatusProfile": user[4]
        }
        result.append(data)
    conn.close()
    return result


def add_user_in_group(id_user, id_group):
    conn = connect()
    cur = conn.cursor()
    cur.execute('insert into "UsersGroup" ("IdGroup", "IdUser") values('+id_group.__str__()+','+id_user.__str__()+')')
    conn.commit()
    conn.close()
    return

