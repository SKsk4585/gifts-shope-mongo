import mongoose from "mongoose";
import { audienceTypeModel } from "./Audience-model";

//1 interface
export interface IGiftstModel extends mongoose.Document{
    audienceId: mongoose.Schema.Types.ObjectId
    name: string
    Description: string
    price: number
    discount: string
}

//2 schema
export const giftsSchema = new mongoose.Schema<IGiftstModel>({
    audienceId:{
        type:mongoose.Schema.Types.ObjectId,
     
    },

    name:{
        type:String,
        required:[true, "name is required"],
        minlength:[2, "name must be at least 2 tharacters"],
        maxlength:[15, "name must be only 15 tharacters"]
    }, 

    Description:{
        type:String,
        required:[true, "Description is required"],
        minlength:[5, "Description must be at least 5 tharacters"],
        maxlength:[100, "Description must be only 100 tharacters"]
    },    
    
    price:{
        type:Number,
        required: [true, "price is required"],
        nim:[0, "price can't be negative"],
        max:[200, "price can't be more than 200$"],     
    },
    discount:{
        type:String,
        required: [true, "discount is required"],
        nim:[0, "discount can't be negative"],
        max:[30, "price can't be more than 30%"],     
    }


},{
    versionKey:false,
    toJSON:{virtuals:true},
    id:false
})

giftsSchema.virtual("Audience", {
    ref: audienceTypeModel,
    localField:"audienceId",
    foreignField: "_id",
    justOne: true

})

//3 model
export const giftsModel = mongoose.model<IGiftstModel>("giftModel", giftsSchema, "gifts")