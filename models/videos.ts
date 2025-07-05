import  mongoose, { Schema, model, models, } from "mongoose";


export const videoDimensions = {
    whide: 1080,
    height: 720 } as const;

export interface IVideo {
    title: string;
    description: string;
    videoUrl: string;
    thumbnailUrl: string;
    duration: number;
    contolar: boolean;
    category: string;
    uploadedBy: mongoose.Types.ObjectId;
    _id?: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
    transformation?: {
        width: number;
        height: number;
        quality: number;
    };
}    


const videoSchema = new Schema<IVideo>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true,
        },
        videoUrl: {
            type: String,
            required: true,
            unique: true,
        },
        thumbnailUrl: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: true,
        },
        contolar: {
            type: Boolean,
            default: false,
        },
        category: {
            type: String,
            required: true,
        },
        uploadedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User', 
            required: true,
          },
        transformation: {
            width: { type: Number, default: videoDimensions.whide },
            height: { type: Number, default: videoDimensions.height },
            quality: { type: Number, min: 1, max: 100, default: 75 }, 
        }
    },{ timestamps: true }
)

const Video = models?.Video || model<IVideo>("Video", videoSchema);

export default Video