const settings = require("./settings");
const knex = require('knex')({
  client: 'pg',
  connection: settings,
});
const last_name = process.argv.slice(2);

knex.select().from('famous_people').where({last_name: `${last_name}`}).then((people) => {
    console.log(people);
  })
  .catch((err) => {
    console.log(err);
  })

knex.destroy();