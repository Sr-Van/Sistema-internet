import sqlite3

class Database:
  def __init__(self, db_connection):
    self.conn = db_connection
    self.cursor = self.conn.cursor()
    print("Database initialized with connection.")

  def create_clients_table(self):
    self.cursor.execute('''
      CREATE TABLE IF NOT EXISTS clients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        plano TEXT NOT NULL
      )
    ''')
    self.conn.commit()
    print("Table 'clients' created or already exists.")

  def create_technicians_table(self):
    self.cursor.execute('''
      CREATE TABLE IF NOT EXISTS technicians (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL
      )
    ''')
    self.conn.commit()
    print("Table 'technicians' created or already exists.")

  def create_service_orders_table(self):
    self.cursor.execute('''
      CREATE TABLE IF NOT EXISTS service_orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        cliente_id INTEGER NOT NULL,
        tecnico_id INTEGER NOT NULL,
        data_abertura TEXT NOT NULL,
        descricao TEXT NOT NULL,
        status TEXT NOT NULL,
        FOREIGN KEY (cliente_id) REFERENCES clients(id),
        FOREIGN KEY (tecnico_id) REFERENCES technicians(id)
      )
    ''')
    self.conn.commit()
    print("Table 'service_orders' created or already exists.")