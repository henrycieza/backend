class Customer extends PersonalData{
    constructor(dataCustomer, dataPersonal_Data) {
      super(dataPersonal_Data);
      const { id, contact_email } = dataCustomer;
  
      this.id	= id;
      this.contact_email	= contact_email;
      
    }
  }
  
  export default Customer;
  