import mysql from 'mysql';
import configurationdb from './configurationdb';

class MySqlConnectionFactory {
  constructor(configuration) {
    this.configuration = { ...{
      host: 'localhost',
      port: 13306,
      user: 'mysql',
      password : 'mysql',
      database: 'default'
    }, ...configuration };
  }

  create() {
    const mySqlConnection = mysql.createConnection(this.configuration);
    
    return mySqlConnection;
  }
}


export default new MySqlConnectionFactory({ configurationdb });