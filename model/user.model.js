import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true, // user needs to put unique username
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

export default User = model('user', UserSchema);