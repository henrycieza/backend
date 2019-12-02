
class Customer extends PersonalData{
    constructor(data) {
     super(data);
     
     this.id	= id;
     this.contact_email	= contact_email;
      
    }
    create = (req, res) => {
      // validacion de datos
      if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
      const customer = new Customer({
        id : req.body.id,
        email: req.body.email,
       
      });  
      Customer.create(customer, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "error creando Customer."
          });
        else res.send(data);
      });
    };  
}
  
  export default Customer;
  