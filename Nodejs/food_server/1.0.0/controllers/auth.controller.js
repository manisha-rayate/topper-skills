const jwt = require('jsonwebtoken');

function validateToken(req, res)
{
  const token = req.headers.authorization;

  if(!token)
  {
    res.status(403).send({
      message: "You must login to access user list",
      error: "Forbidden"
    })
  }
  else{
    jwt.verify(token, 'abcd', (err, payload) => {
      if(err || !payload)
        res.status(401).send({
          message: "Session expired, Please login again",
          error: err
        });
      else
      {
        const token = jwt.sign({ role: payload.role }, 'abcd', { expiresIn: '1h' });
        res.set("X-token", token);
        res
          .status(200)
          .send({ message: "Valid Token", data: "" });
      }
    })
  }
} // End of validateToken()

module.exports = validateToken;