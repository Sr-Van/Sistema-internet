import sqlite3
from fastapi import FastAPI, Depends
from typing import List
import uvicorn
from model.model import Database
from controller.controller import Controller

app = FastAPI()
DATABASE = 'clients.db'

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

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)
    print("working")