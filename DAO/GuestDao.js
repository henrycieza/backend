import AbstractDao from './AbstractDao';

class GuestDao extends AbstractDao {
  constructor(connectionFactory) {
    super(connectionFactory);
  }
  
  async saveCustomer(Guest) {
    const { guest_id, bird_date } = Guest;
    
    const dataCustomer = await this.command("INSERT INTO guest (personal_data_id, bird_date) VALUES ( personal_data_id, STR_TO_DATE( ? ,'%d-%m-%Y'));", [guest_id, bird_date]);
    
    customer.id = dataCustomer.results.insertId;
  }
}

export default GuestDao;
