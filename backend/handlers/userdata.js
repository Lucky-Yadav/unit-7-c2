const jwt = require("jsonwebtoken");
const SECRET = "luckyyadav123";

const UserData = require("../database/userSchema");

async function register(req, res) {
  const { email, password } = req.body;

  let existingUser = await UserData.findOne({
    email: email,
  });

  if (existingUser) {
    return res.status(401).send("User Already Registered");
  }

    let user = {
    //   name: name,
    email: email,
    password: password,
  };

  try {
    let userCred = await UserData.create(user);
    return res.send("Registration Successfull");
  } catch (error) {
    res.status(400).send("Email and Password mandatory ");
  }
}

async function login(req, res) {
  let { email, password } = req.body;

  let existinguser = await UserData.findOne({
    email: email,
  });
    

  if (existinguser) {
    if (existinguser.password == password) {
      let encryptionToken = jwt.sign(
        {
          id: existinguser._id,
          email: existinguser.email,
          password: existinguser.password,
        },
        SECRET
      );

      return res.send(encryptionToken);
    } else {
      res.send("Wrong Password");
    }
  } else {
    res.status(404).send({
      error: "User Not Exists",
    });
  }
}

module.exports = {
  login,
  register,
};
