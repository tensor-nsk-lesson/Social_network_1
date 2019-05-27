import psycopg2

def connect():
    conn = psycopg2.connect(
        database="social_1",
        user="social_1",
        password="social_1",
        host="90.189.168.29",
        port="5432"
    )
    return conn