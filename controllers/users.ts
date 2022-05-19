import { Request, Response } from 'express'
import {createUserPrisma} from '../services/users'

export async function userCreate(req: Request, res: Response) {
    try{
        // console.log(req.body)
        // On récupere le body (data: {user : name : machin, email: machin}) du post qu'on met en paramètre de notre fonction
        await createUserPrisma(req.body)
        res.status(200).send({
            'message' : 'User created ! 😁'
        })
    }
    catch(error:any) {
        res.status(400).send({
            'message' : error.message
        })
    }
}