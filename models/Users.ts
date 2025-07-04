import  mongoose, { Schema, model, models, } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
    username: string;
    email: string;
    password: string;
    _id?: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
    }

    const userSchema = new Schema<IUser>(
        {
          email: {
            type: String,
            required: true,
            unique: true,
          },
          username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
          },
          password: {
            type: String,
            required: true,
            minlength: 8,
            select: false,
          },
        },
        { timestamps: true } 
        
      );
      
userSchema.pre("save", async function (next) {
    if (this.isModified("password"){
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

const User = models?.User || model<IUser>("User", userSchema);
export default User;