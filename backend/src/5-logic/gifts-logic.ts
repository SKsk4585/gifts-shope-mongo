import { IAudienceModel, audienceTypeModel } from "../4-models/Audience-model";
import { ResouceNotFoundErrorModel, ValidateErrorModel } from "../4-models/errorModel";
import { IGiftstModel, giftsModel } from "../4-models/gifts-model";



function getAllGifts():Promise<IGiftstModel[]>{
    return giftsModel.find().exec()
}

function getAllAudience():Promise<IAudienceModel[]>{
    return audienceTypeModel.find().exec()
}

function addgift(gift:IGiftstModel): Promise<IGiftstModel>{
    const errors = gift.validateSync()
    if (errors) throw new ValidateErrorModel (errors.message)
    return gift.save()
}

function getGiftsByAudience(audienceId:string): Promise<IGiftstModel[]>{
    return giftsModel.find({ audienceId }).populate("Audience").exec();
}

async function deleteGift(_id: string): Promise<void> {
    const deleteGift = await giftsModel.findByIdAndDelete(_id)
    if (!deleteGift) throw new ResouceNotFoundErrorModel(_id)
}

export default {
    getAllGifts,
    getAllAudience,
    addgift,
    getGiftsByAudience,
    deleteGift
}