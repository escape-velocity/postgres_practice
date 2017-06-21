

const settings = require("./settings");
const knex = require('knex')({
  client: 'pg',
  connection: settings,
});


const arg = process.argv.slice(2);

knex('famous_people').insert({first_name:`${arg[0]}`,last_name:`${arg[1]}`,birthdate:`${arg[2]}`})
  .then(() => {
        console.log('famous person added');
   })

knex.destroy();