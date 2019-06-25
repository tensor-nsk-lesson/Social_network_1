import psycopg2


def connect():
    conn = psycopg2.connect(
        database="postgres",
        user="postgres",
        password="user",
        host="localhost",
        port="5432"
    )
    return conn
