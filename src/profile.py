from connect import connect


def get_profile_info(id):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select * from public.\"Profile\" where "Id"='+id.__str__())
    info = cur.fetchone()
    if not info:
        result = {
            'error':'такого пользователя не существует'
        }
    else:
        result = {
            "Id" : info[0],
            "FakeId":info[1],
            "Photo": info[2],
            "SecondName": info[3],
            "FirstName": info[4],
            "FatherName": info[5],
            "Age": info[6],
            "AboutMe": info[7],
            "Status": info[8],
            "Date" : info[9],
            "LastActivity": info[10],
            "StatusProfile": info[11],
            "Gender" : info[12],
            "City": info[13]
        }
    cur.close()
    conn.close()
    return result


def get_fake_info(id):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select * from public.\"Profile\" where "FakeId"='+id.__str__())
    info = cur.fetchone()
    if not info:
        result = {
            'error':'фэйка не существует'
        }
    else:
        result = {
            "Id" : info[0],
            "FakeId":info[1],
            "Photo": info[2],
            "SecondName": info[3],
            "FirstName": info[4],
            "FatherName": info[5],
            "Age": info[6],
            "AboutMe": info[7],
            "Status": info[8],
            "Date" : info[9],
            "LastActivity": info[10],
            "StatusProfile": info[11],
            "Gender" : info[12],
            "City": info[13]
        }
    cur.close()
    conn.close()
    return result


def profile_changes(id_user, photo, secondName, firstName, fatherName, aboutMe, status, gender, city):
    conn = connect()
    cur = conn.cursor()
    cur.execute('UPDATE "Profile" SET '
                '"Photo" = ' + photo.__str__() + ', '
                '"SecondName" = ' + secondName.__str__() + ', '
                '"FirstName" = ' + firstName.__str__() + ', '
                '"FatherName" = ' + fatherName.__str__() + ', '
                '"AboutMe" = ' + aboutMe.__str__() + ', '
                '"Status" = ' + status.__str__() + ', '
                '"Gender" = ' + gender.__str__() + ', '
                '"City" = ' + city.__str__() + ' WHERE "Id" = ' + id_user.__str__())
    conn.commit()
    conn.close()
    return

