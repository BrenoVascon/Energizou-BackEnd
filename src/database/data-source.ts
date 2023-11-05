import "reflect-metadata"
import { DataSource } from "typeorm"

import User from "../app/entities/User";

import { CreateUsersTable1699338159409 } from "./migrations/1699338159409-CreateUsersTable";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "45182031b",
    database: "energizaclients",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreateUsersTable1699338159409],
    subscribers: [],
})

