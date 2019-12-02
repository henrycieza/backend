class Booking {

    constructor(data) {
      const {arrival_date, departure_date, num_guest, customerId, apartments_id } = data;
     
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
    create = (req, res) => {
      // validacion de datos
      if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
      const Booking = new Booking({
        //this.code : codeGenerator(),  
        arrival_date : req.body.arrival_date,
        departure_date : req.body.departure_date,
        num_guest : req.body.num_guest,
        customerId :  this.customerId,
        apartments_id : req.body.apartments_id
       
      });  
      Booking.create(Booking, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "error creando Booking."
          });
        else res.send(data);
      });
    };  
    
  }
  
  export default Booking;
  