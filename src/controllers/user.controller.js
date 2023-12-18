import {AppDataSource} from "../datasource.js"
import {User} from "../models/user.js"

class UserController {
    static async create (req, res){
        await AppDataSource
            .createQueryBuilder()
            .insert()
            .into(User)
            .values([
                { firstName: req.body.firstName, lastName: req.body.lastName, isActive:true},
            ])
            .execute()
        res.send("usuario creado")
    }
    static async get (req, res){
        const users = await AppDataSource.createQueryBuilder().select("user").from(User, "user").getMany()
        res.json(users)
    }
    static async getById (req, res){
        const user = await AppDataSource
            .createQueryBuilder()
            .select("user")
            .from(User, "user")
            .where("user.id = :id", { id: req.params.id })
            .getOne()
            res.json(user)
    }
    static async update(req, res){
            await AppDataSource.createQueryBuilder()
            .update(User)
            .set({
            firstName: req.body.firstName, lastName: req.body.lastName, isActive:true
    })
    .where("id = :id", { id: req.params.id  })
    .execute()
    res.send("Updated")
    }
    static async delete(req, res){
        const user = await AppDataSource
            .createQueryBuilder()
            .delete()
            .from(User)
            .where("id = :id", { id: req.params.id })
            .execute()
            res.send("Usuario Eliminado")
            
    }
}
export default UserController