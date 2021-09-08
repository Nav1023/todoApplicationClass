const jwt = require('jsonwebtoken');
config = require('config');

module.exports = (req, res, next) => {

  //decode our token from headers and verify it.

  const token = req.header('Authorization');
   
  if(!token){
    return res.status(401).send({ message: 'Authorisation failed' });
  }
  
  // decode the token and verify
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).send({ message: 'token is not valid' });
  }

}
