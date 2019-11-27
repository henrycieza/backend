import AbstractDao from './AbstractDao';
import PersonalData from '../models/PersonalData';

class PersonalDataDao extends AbstractDao {
  constructor(connectionFactory) {
    super(connectionFactory);
  }
  
  async saveCustomer(PersonalData) {
    const { first_name, last_name, document_number, country } = PersonalData;
    
    const dataCustomer = await this.command('INSERT INTO personal_data (first_name, last_name, document_number, country) VALUES (?,?,?,?);', [first_name,last_name,document_number,country]);
    
    customer.id = dataCustomer.results.insertId;
  }
}

export default PersonalDataDao;
