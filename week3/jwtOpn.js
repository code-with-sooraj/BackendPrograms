const jwt = require('jsonwebtoken')
const zod = require('zod')
const jwtpassword = "secret"
const emailSchema = zod.string().email()
const passwordSchema = zod.string().min(6)


console.log("<---------Signature--------->")
function signToken(username,password){
    if(!passwordSchema.safeParse(password).success || !emailSchema.safeParse(username).success){
        throw new Error("Invalid username or password")
        }
    const signature = jwt.sign({username,password},jwtpassword)
    return signature
}

const token= signToken("harkirat@gmail.com", "12365479")
console.log(token)


console.log("<---------Verify--------->")
function verifyToken(token,jwtpassword){
    try{
        const decoded = jwt.verify(token,jwtpassword)
        return decoded
        }catch(err){
            throw new Error("Invalid token")
            }

}

const decodedToken = verifyToken(token,jwtpassword)
console.log(decodedToken)

console.log("<---------Decode--------->")
function decodeTokens(token){
    try{
        const decoded = jwt.decode(token)
        return decoded
        }catch(err){
            throw new Error("Invalid token")
            }
}

const decode = decodeTokens(token)
console.log(decode)