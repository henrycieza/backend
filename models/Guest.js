class Guest extends PersonalData {
    constructor(dataGuest, dataPersonal_Data) {
      super(dataPersonal_Data);
      const { id, bird_date } = dataGuest;
  
      this.id = id;
      this.bird_date = bird_date;
      
    }
  }
  
  export default Guest;