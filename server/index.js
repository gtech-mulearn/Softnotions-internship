import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';


mongoose.connect('mongodb+srv://Vishnu:BasicCurd@cluster0.ilkqjy7.mongodb.net/CURD')
  .then(() => console.log('Connected!'));

const PersonalDataSchema = new mongoose.Schema({
    name : String,
    age : Number,
});
const item = mongoose.model("PersonalData",PersonalDataSchema);


const app = express();
app.use(cors());
app.use(express.json());

function basicNameValidation(name) {
    const nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/; 
    return name && name.trim() !== "" && nameRegex.test(name);
  }

app.post('/post', (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    
    if (!basicNameValidation(name) ){
        res.send("Invalid Name.");
    } 
    else if(parseInt(age) < 0 || parseInt(age) > 120){
        res.send('Invalid Age.');
    }
    else{
        const Item = new item({
            name : name,
            age : age,
        });
        Item.save();

        console.log(`Name: ${name}, Age: ${age}`);
        res.send("Data Uploaded Successfully.");
    }
});


app.listen(3001, () => {
  console.log('Server is running on port 3001');
});