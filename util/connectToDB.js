const { Client } = require("pg");


async function DB(){
    client = new Client("postgresql://user:REVEAL_PASSWORD@scaled-climber-3678.g95.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full");

    (async () => {
        await client.connect();
    try {
        const results = await client.query("SELECT NOW()");
        console.log(results);
    } catch (err) {
        console.error("error executing query:", err);
    } finally {
        client.end();
    }
    })();

    return client;
}

module.exports = DB;