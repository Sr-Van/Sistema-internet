import sqlite3
from model.model import Database

if __name__ == "__main__":
    db_connection = sqlite3.connect('clients.db')
    database = Database(db_connection)
    database.create_clients_table()
    database.create_technicians_table()
    database.create_service_orders_table()
    print("working")