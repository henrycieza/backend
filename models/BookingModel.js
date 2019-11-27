class Booking {

    constructor(dataBooking) {
      const {arrival_date, departure_date, num_guest, customerId, apartments_id } = dataBooking;
     
      this.code = this.codeGenerator();  
      this.arrival_date = arrival_date;
      this.departure_date = departure_date;
      this.num_guest = num_guest;
      this.customerId = customerId;
      this.apartments_id = apartments_id;
    }
    codeGenerator() {
        var code = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const numGen = 10;
        for ( var i = 0; i < numGen; i++ ) {
        code += characters.charAt(Math.floor(Math.random() * characters.Length));
        }
        return code;
            
    }
  }
  
  export default Booking;
  