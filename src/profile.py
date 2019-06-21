from connect import connect


def get_profile_info(id):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select "FakeId",'
                '"Photo", '
                '"SecondName", '
                '"FirstName", "'
                'FatherName", '
                '"Age", '
                '"AboutMe", '
                '"Status", '
                '"StatusProfile", '
                '"City" from public.\"Profile\" where "Id"='+id.__str__())
    info = cur.fetchone()
    if not info:
        result = {
            'error':'такого пользователя не существует'
        }
    else:
        result = {
            "FakeId":info[0],
            "Photo": info[1],
            "SecondName":info[2],
            "FirstName": info[3],
            "FatherName": info[4],
            "Age": info[5],
            "AboutMe": info[6],
            "Status": info[7],
            "StatusProfile": info[8],
            "City": info[9]
        }
    cur.close()
    conn.close()
    return result


def get_fake_info(id):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select '
                '"Photo", '
                '"SecondName", '
                '"FirstName", "'
                'FatherName", '
                '"Age", '
                '"AboutMe", '
                '"Status", '
                '"StatusProfile", '
                '"City" from public.\"Profile\" where "FakeId"='+id.__str__())
    info = cur.fetchone()
    if not info:
        result = {
            'error':'фэйка не существует'
        }
    else:
        result = {
            "Photo": info[0],
            "SecondName":info[1],
            "FirstName": info[2],
            "FatherName": info[3],
            "Age": info[4],
            "AboutMe": info[5],
            "Status": info[6],
            "StatusProfile": info[7],
            "City": info[8]
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


#def profile_settings(id_user):
#    conn = connect()
#    cur = conn.cursor()
#    cur.execute('SELECT * FROM "Profile" WHERE ("Id" = ' + id_user.__str__() + ')')
#    row = cur.fetchone()
#    result = {
#        "Id": row[0],
#        "Photo": row[2],
#        "SecondName": row[3],
#        "FirstName": row[4],
#        "FatherName": row[5],
#        "Age": row[6],
#        "AboutMe": row[7],
#        "Status": row[8],
#        "Date": row[9],
#        "StatusProfile": row[11],
#        "Gender": row[12],
#        "City": row[13]
#    }
#    conn.close()
#    return result*/

