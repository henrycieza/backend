import AbstractDao from './AbstractDao';
class BookingDao extends AbstractDao {
  constructor(connectionFactory) {
    super(connectionFactory);
  }
  
  async saveBooking(Booking) {
    const { code, customerId } = Booking;
    
    const dataBooking = await this.command(`INSERT INTO booking (code, arrival_date, departure_date, num_guest, customer_personal_data_id, apartments_id) 
                                     VALUES (?, STR_TO_DATE( ? ,'%d-%m-%Y'), STR_TO_DATE( ? ,'%d-%m-%Y'),?,?,?);`, [code,arrival_date,departure_date,num_guest,customerID, apartments_id]);
    
    booking.id = dataBooking.results.insertId;
  }
}

export default BookingDao;