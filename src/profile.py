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
    col_names = [column[0] for column in cur.description]
    result = {}
    length = len(col_names)
    for i in range(length):
        result[col_names[i]] = info[i]
    cur.close()
    conn.close()
    return result
