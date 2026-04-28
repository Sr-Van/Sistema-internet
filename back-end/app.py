import sqlite3
import os
from fastapi import FastAPI, Depends
from typing import List
import uvicorn
from model.model import Database
from controller.controller import Controller

app = FastAPI()
DATABASE_DIR = 'clients.db'
DATABASE = os.path.join(DATABASE_DIR)

def get_db():
    db = sqlite3.connect(DATABASE)
    try:
        yield db
    finally:
        db.close()

@app.get("/api")
def helloworld(db: sqlite3.Connection = Depends(get_db)):
    db_wrapper = Database(db)
    controller = Controller(db_wrapper)
    
    orders = controller.get_all_orders()
    return "Hello World! Here are the service orders: " + str(orders)

@app.post("/api/clients")
def create_client(nome: str, email: str, CPF: str, numero: int, plano: str, db: sqlite3.Connection = Depends(get_db)):
    db_wrapper = Database(db)
    controller = Controller(db_wrapper)
    client_id = controller.create_client(nome, email, CPF, numero, plano)
    return {"client_id": client_id}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)
    print("working")