import { Schema, models, model } from "mongoose";

const subjectScheme = new Schema(
    {
        name: 
        { 
            type: String, 
            required: true 
        },
        room: 
        { 
            type: String, 
            required: true 
        }, 
        time: {
            type: String, 
            required: true
        }, 
        lecturer: {
            type: String,
            required: true
        }
    }
);

const Subject = models.Subject || model("Subject", subjectScheme)

export default Subject