import dotenv from "dotenv";
dotenv.config({ path: "../backend/.env" });

export const PORT = 7000;
export const uri = `mongodb+srv://afreenpoly:${process.env.DB_PASSWORD}@studetails.ebwix9o.mongodb.net/?retryWrites=true&w=majority`;
