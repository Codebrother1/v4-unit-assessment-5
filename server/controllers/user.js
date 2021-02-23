const bcrypt = require('bcrypt')



module.export = {
  register: async (req, res) => {
    const db = req.app.get('db')
    const { email, password, username, profile_pic } = req.body;
    console.log("body: ", req.body)
  }
}
