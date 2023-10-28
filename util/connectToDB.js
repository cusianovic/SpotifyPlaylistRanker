const { Client } = require("pg");


function DB(lambda){
    const client = new Client("postgresql://user:FhUyHFbJ5tY8vOfLFsGPAg@scaled-climber-3678.g95.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full");

    (async () => {
        await client.connect();
    try {
        const results = await client.query("SELECT NOW()");
        console.log(results);
    } catch (err) {
        console.error("error executing query:", err);
    }
    })();

    return client;
}

module.exports = DB;