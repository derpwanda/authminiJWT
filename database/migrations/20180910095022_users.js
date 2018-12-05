exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users.increments();

    users
      .string('username', 128)
      .notNullable()
      .unique();
    users.string('password', 128).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};

//create endpoint for registration
server.post('/api/register', (req,res) => {
  //grab username and password from body
  const creds = req.body;

  //hash the password
    //generate the hash from the user's password
  const hash = bcrypt.hashSync(creds.password, 14)//rounds is 2^X
    //override the user.password with the hash
  creds.password = hash;
  //save the user to the database
  db('users')
  .insert(creds)
  .then(ids => {
    res.status(201).json(ids);
  })
  .catch(err => res.json({message:"attempt registration again", err}))
})