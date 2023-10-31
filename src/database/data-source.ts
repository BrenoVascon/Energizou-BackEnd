import "reflect-metadata"
import { DataSource } from "typeorm"

  import { CreateUsersTable1698725747899 } from './migrations/1698725747899-CreateUsersTable'
import User from "../app/entities/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "45182031b",
    database: "energiza",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreateUsersTable1698725747899],
    subscribers: [],
})

