import BaseDataBase from "./data/BaseDataBase"

class CreateTable extends BaseDataBase{
   async createTables(){
      try {
         await BaseDataBase.connection.raw(`
            CREATE TABLE labook_users(
               id VARCHAR(255) PRIMARY KEY,
               name VARCHAR(255) NOT NULL,
               email VARCHAR(255) UNIQUE NOT NULL,
               password VARCHAR(255) NOT NULL
            )
         `)
   
         await BaseDataBase.connection.raw(`
            CREATE TABLE labook_posts(
               id VARCHAR(255) PRIMARY KEY,
               photo VARCHAR(255) NOT NULL,
               description VARCHAR(255) NOT NULL,
               type ENUM("normal","event") DEFAULT "normal",
               created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
               author_id VARCHAR(255),
               FOREIGN KEY (author_id) REFERENCES labook_users (id)
            )
         `)

         await BaseDataBase.connection.raw(`
            CREATE TABLE labook_friendship(
               id_user VARCHAR(255) NOT NULL,
               id_friend VARCHAR(255) NOT NULL,
               FOREIGN KEY (id_user) REFERENCES labook_users(id),
               FOREIGN KEY (id_friend) REFERENCES labook_users(id)
            );
         `)
   
         console.log("MySql setup completed!")
      } catch (error) {
         console.log(error)
      }
   }
}

const dataBase:CreateTable = new CreateTable()
dataBase.createTables()