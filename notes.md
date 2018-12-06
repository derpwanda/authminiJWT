
install yarn
install express cors bcrypt
install dev nodemon
install yarn add jsonwebtoken

add const jwt = require('jsonwebtoken') to require list
add token generator function - generateToken()
  -pass object generateToken(OBJECT)
    -use const to create payload
    -use const to create secret //weird collection of characters
    -use const to create options //eg., token expiration, 
  -return jwt.sign(payload, secret, options)
add generator function to ...
  -return token object (if you need to. way to see if it was created)

#create a protected endpoint (aka middleware)
created a protected function
  create a const to references the token
  if the token is valid move ahead
    -use library function .verify()
    -pass token AND jwt secret 
  else return error/bounce

#to hold token secret in env
yarn add dotenv
create .env file in root of project
  name variable and set equal to secret string (quotation marks dont matter)
in index.js add:
  -require('dotenv).config(); //to very top of index; yarn add dotenv
  -in generateToken function, set secret variable to `process.end.VARIABLE_NAME`
now you can reference secret by `process.end.VARIABLE_NAME` when need (ie, protected rounts)

#put token inside of cookie
-add req.session.jwt (jwt is based on name of jasonwebtoken used see line 5) and set it to the generated token variable inside route/midware
-because you have set the token to req.session, in protected (if you are using it) you now need to change the token from req.headers.authorization to req.session.jwt

#checkRole
1:48:15

#ADD REACT APP
npx create-react-app <folder>
