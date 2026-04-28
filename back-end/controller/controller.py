class Controller:
    def __init__(self, db):
        self.db = db
    
    def get_all_orders(self):
        print("Controller: Fetching all service orders.")
        return self.db.get_all_orders()
    
    def create_client(self, nome, email, CPF, numero, plano):
        print(f"Controller: Creating client with name={nome}, email={email}, CPF={CPF}, numero={numero}, plano={plano}.")
        client_id = self.db.add_client(nome, email, CPF, numero, plano)
        print(f"Controller: Client created with ID={client_id}.")
        return client_id