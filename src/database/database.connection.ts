import { Sequelize  } from "sequelize";

export const sequelize=new Sequelize({
  dialect:"sqlite",
  storage:'books.sqlite'
}) 


export const connect=async()=>{
  try{
    await sequelize.authenticate() 
    console.log("Connected to DB Successfully!!")
  }catch(err){
    console.log('Error while connecting DB')
  }
}