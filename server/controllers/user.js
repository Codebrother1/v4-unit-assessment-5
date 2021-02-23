const bcrypt = require('bcrypt')



module.export = {
  register: async (req, res) => {
    const db = req.app.get('db')
    const { email, password, username, profile_pic } = req.body;
    console.log("body: ", req.body)
  }
},  
login: async(req, res) => {
  const db = req.app.get('db');
  const { email, password } = req.body;
  const [isUser] = await db.find_user_usename(username);
  if (!isUser) {
      return res.status(401).send("Incorrect login information");
  }
  const authenticated = bcrypt.compareSync(password, isUser.password);
  if ( authenticated ) {
      req.session.user = {
          userId: isUser.user_id,
          email: isUser.email,
          username: isUser.username
      }
      res.status(200).send(req.session.user)
  } else {
      res.status(401).send("Incorrect login information")
  }
},
 logout: (req, res) => {
  req.session.destroy();
  res.sendStatus(200);
},
 getUser: (req, res) => {
  if (req.session.user){
      res.status(200).send(req.session.user);
  } else {
      res.status(404).send('Please Log In')
  },
