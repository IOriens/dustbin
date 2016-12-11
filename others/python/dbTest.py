import pymysql.cursors

connection = pymysql.connect(host='localhost',
                                user='oriens',
                                password='123456',
                                db='recommend',
                                charset='utf8mb4',
                                cursorclass=pymysql.cursors.DictCursor)
try:
    with connection.cursor() as cursor:
        sql="create table user_anime(user int, anime int)"
        cursor.execute(sql)

    connection.commit()
finally:
    connection.close()

