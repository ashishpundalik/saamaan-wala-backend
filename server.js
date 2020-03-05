const express = require("express");
const { postgraphile } = require("postgraphile");

const app = express();

console.log('app: ', process.env.DATABASE_URL, process.env.SCHEMA);
 
app.use(
    postgraphile(
        process.env.DATABASE_URL,
        process.env.SCHEMA,
        {
            watchPg: true,
            graphiql: true,
            enhanceGraphiql: true
        }
    )
);

app.listen(process.env.PORT || 3000);