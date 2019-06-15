from connect import connect


def get_profile_info(id):
    conn = connect()
    cur = conn.cursor()
    cur.execute('select "Photo", '
                '"SecondName", '
                '"FirstName", "'
                'FatherName", '
                '"Age", '
                '"AboutMe", '
                '"Status", '
                '"StatusProfile", '
                '"City" from public.\"Profile\" where "Id"='+id.__str__())
    info = cur.fetchone()
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
