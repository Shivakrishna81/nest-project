import { DataTypes } from "sequelize";
import { sequelize } from "src/database/database.connection";


export const Book=sequelize.define('Book',{
    id:{
        type:DataTypes.STRING,
        primaryKey:true
    },
    title:DataTypes.STRING,
    author:DataTypes.STRING,
    publishedDate:DataTypes.STRING,
    isbn:DataTypes.STRING
}) 

Book.sync();