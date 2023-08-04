import * user from "../user";

describe('user handler', () =>{
    it(' should create new user', async () =>{
        const req = {body:{username: 'hello', password: 'hi'}}
        const res = {json({token}){

            console.log(token)
        
        expect(token).toBeTruthy()
        }
       await user.createNewUser(req, res, ()=> {})
}})
})