import psycopg2


def connect():
    conn = psycopg2.connect(
        database="social_1",
        user="postgres",
        password="1234",
        host="localhost",
        port="5432"
    )
    return conn