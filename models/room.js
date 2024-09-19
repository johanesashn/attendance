import { Schema, models, model } from "mongoose";

const roomScheme = new Schema(
    {
        name: 
        { 
            type: String, 
            required: true 
        },
        location: 
        { 
            type: String, 
            required: true 
        }, 
    }
);

const Room = models.Room || model("Room", roomScheme)

export default Room