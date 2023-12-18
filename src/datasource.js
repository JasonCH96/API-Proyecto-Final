import { DataSource } from "typeorm"
import { User } from "./models/user.js" 
import dotenv from "dotenv";
dotenv.config();
export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "userMatriculado",
    password: "casa12345",
    database: "Proyecto_final",
    synchronize: true,
    logging: true,
    entities: [User],
    subscribers: [],
    migrations: [],
    options: { encrypt: false }
})
AppDataSource.initialize().then(async () => {
    console.log("Data Source has been initialized!")
}).catch(error => console.log(error))