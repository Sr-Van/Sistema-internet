import sqlite3
from flask import Flask, request, jsonify,g
from model.model import Database
from controller.controller import Controller

app = Flask(__name__)
DATABASE = 'clients.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

@app.route('/api', methods=['GET'])
def helloworld():
    db_wrapper = Database(get_db())
    controller = Controller(db_wrapper)
    orders = controller.get_all_orders()
    return jsonify(orders)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
    print("working")