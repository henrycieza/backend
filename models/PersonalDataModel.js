class PersonalData {
    constructor(data) {
      const { first_name, last_name, document_number, country } = data;
      this.first_name	= first_name;
      this.last_name	= last_name;
      this.document_number = document_number;
      this.country = country;
    }

    create = (req, res) => {
      // validacion de datos
      if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }

      const PersonalData = new PersonalData({
        
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        document_number : req.body.document_number,
        country : req.body.country
       
      });  
      PersonalData.create(PersonalData, (err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "error creando PersonalData."
          });
        else res.send(data);
      });
    };  
    
}
  
  export default PersonalData;