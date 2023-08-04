import fs from "fs";

const fs =require('fs/promises')
const path =require('path')
const read =async() => {
    const path =require('path')
    const result = fs.readFileSync(path.join(__dirname, 'package.json'), 'utf-8');
    return result
}


//blocking
const me = 'scott'

console.log(me)



