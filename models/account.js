import { Schema, models, model } from "mongoose";

const accountSchema = new Schema(
    {
        name: 
        { 
            type: String, 
            required: true 
        },
        password: 
        { 
            type: String, 
            required: true 
        }, 
        role: {
            type: String, 
            required: true
        }, 
        subjects: {
            type: [String],
        }, 
        id: {
            type: String
        }, 
        gpa: {
            type: Number,
        },
        cohort: {
            type: Number, 
        }, 
        kom: {
            type: String, 
        }, 
        gender: {
            type: String, 
        }
    }
);

const Account = models?.Account || model("Account", accountSchema)

export default Account