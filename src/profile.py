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


def profile_changes(id_user, fake_id,  photo, second_name, first_name, father_name, about_me, date, status, gender, city):
    conn = connect()
    cur = conn.cursor()
    cur.execute('UPDATE "Profile" SET '
                '"FakeId" = ' + fake_id.__str__() + ', '
                '"Photo" = \'' + photo.__str__() + '\', '
                '"SecondName" = \'' + second_name.__str__() + '\', '
                '"FirstName" = \'' + first_name.__str__() + '\', '
                '"FatherName" = \'' + father_name.__str__() + '\', '
                '"AboutMe" = \'' + about_me.__str__() + '\', '
                '"Date" = to_timestamp(\'' + date.__str__() + '\', \'dd-mm-yy\'),'
                '"Status" = \'' + status.__str__() + '\', '
                '"Gender" = \'' + gender.__str__() + '\', '
                '"City" = \'' + city.__str__() + '\' WHERE "Id" = ' + id_user.__str__())
    conn.commit()
    conn.close()
    return
