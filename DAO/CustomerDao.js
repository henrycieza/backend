import AbstractDao from './AbstractDao';

class CustomerDao extends AbstractDao {
  constructor(connectionFactory) {
    super(connectionFactory);
  }
  
  async saveCustomer(Customer) {
    const { customer_id, contact_email } = Customer;
    
    //const dataCustomer = await this.command('INSERT INTO customer (personal_data_id, contact_email) VALUES ( ? , ?);', [customer_id, contact_email]);
    const dataCustomer = await this.command('INSERT INTO customer (personal_data_id, contact_email) VALUES ( ? , ?);', [Customer.customer_id, Customer.contact_email]);
    
    customer.id = dataCustomer.results.insertId;
  }
}

export default CustomerDao;
