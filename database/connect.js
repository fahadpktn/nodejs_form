const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://127.0.0.1:27017'
const database = 'database'
let db = null
const client = new MongoClient(url)


module.exports.connect = () => {
    client.connect((error, data) => {
        if (error) {

            console.log('Error');
            console.log(error);
        }
        else {
            console.log('Database connected')
            db = data.db(database)
            console.log(db)
        }

    })
}
module.exports.get = () => {
    return db
}