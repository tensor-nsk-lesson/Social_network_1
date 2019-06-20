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
