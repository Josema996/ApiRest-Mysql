import mysql from "promise-mysql";
import config from "./../config";

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user
});
   
const getConnection= () => {
    return connection;
};

module.exports = {
    getConnection
};