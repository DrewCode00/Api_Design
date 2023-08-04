import prisma from "../db";
import {createJWT, hashPassword, comparePasswords} from "../modules/auth";


export const createNewUser = async (req, res, next) => {
    const hash = await hashPassword(req.body.password);

try{
    const user = await prisma.user.create({
        data: {
            username: req.body.username
            password: await hashPassword (req.body.passowrd)
        },
    });
    const token =createJWT(user)
    res.json({token: token})
} catch(e){
e.type ='input'
next(e)
}


} 
export const signin =async (req, res) => {
    const user =await prisma.user.findUnique({
        where: {
            username: req.body.username
        }
    })
}