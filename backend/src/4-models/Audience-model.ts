import mongoose from "mongoose"

//1. interface
export interface IAudienceModel extends mongoose.Document{
    audienceType:string
}

//2. schema
export const AudienceSchema = new mongoose.Schema<IAudienceModel>({
    audienceType: {
        type:String,
        required:[true, "audienceType is required"],
        minlength:[2, "audienceType must be at least 2 tharacters"],
        maxlength:[20, "audienceType must be only 20 tharacters"]
    }

})

//3. model
export const audienceTypeModel = mongoose.model<IAudienceModel>("AudienceModel",AudienceSchema,"Audience")