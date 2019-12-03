class Guest extends PersonalData {
    constructor(data) {
      super(data);
      const { id, bird_date } = data;
  
      this.id = id;
      this.bird_date = bird_date;
      
    }
    create = (req, res) => {
      // validacion de datos
      if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
      const Guest = new Guest({
        
        id : req.body.id,
        bird_date : req.body.bird_date
       
      });  
      Guest.create(Guest, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "error creando Guest."
          });
        else res.send(data);
      });
    };  
}
  
  export default Guest;