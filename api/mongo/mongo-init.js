db.createUser({
    user: 'the_username',
    pwd: 'the_password',
    roles: [
      {
        role: 'dbOwner',
        db: 'the_database',
      },
    ],
  });

db.createCollection('links')

db.links.insert({ id: 'abcv12', link:'https://google.com'});