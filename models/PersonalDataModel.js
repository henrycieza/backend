class PersonalData {
    constructor(dataPersonal_Data) {
      const { first_name, last_name, document_number, country } = dataPersonal_Data;
      this.first_name	= first_name;
      this.last_name	= last_name;
      this.document_number = document_number;
      this.country = country;
    }
  }
  
  export default PersonalData;