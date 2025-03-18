import { hash, verify } from "@node-rs/argon2";

export const hashPassword = async (password:string)=>{
    return hash(password);
}

export const decryptPassword = async (hashPassword:string, password:string)=>{
    return verify(hashPassword, password);
}