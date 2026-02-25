class Controller:
    def __init__(self, db):
        self.db = db
    
    def get_all_orders(self):
        print("Controller: Fetching all service orders.")
        return self.db.get_all_orders()