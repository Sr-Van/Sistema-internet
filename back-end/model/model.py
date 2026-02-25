import sqlite3

class Model:
  def __init__(self, db_connection):
    self.conn = db_connection
    self.cursor = self.conn.cursor()
    print("Model initialized with database connection.")