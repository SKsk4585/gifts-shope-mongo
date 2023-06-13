import express, { NextFunction, Request, Response, Router, request } from "express"
import giftsLogic from "../5-logic/gifts-logic"
import { giftsModel } from "../4-models/gifts-model"


const router = express.Router()

//get all gifts

router.get("/gifts", async (request:Request, respons:Response, next:NextFunction) =>{
    try {
        const gifts = await giftsLogic.getAllGifts()
        respons.json(gifts)
        
    } 
    catch (err) {
        next(err)        
    }
})

//get-all-audience
router.get("/audience", async (request:Request, respons:Response, next:NextFunction) =>{
    try {
        const audience = await giftsLogic.getAllAudience()
        respons.json(audience)
        
    } 
    catch (err) {
        next(err)        
    }
})
//add gift
router.post("/gift", async (request:Request, respons:Response, next:NextFunction) =>{
    try {
        const gift = new giftsModel(request.body)
        const newGift = await giftsLogic.addgift(gift)
        respons.json(newGift)
        
    } 
    catch (err) {
        next(err)        
    }
})

//get gifts by audience
router.get("/gifts/:audienceId", async (request:Request, respons:Response, next:NextFunction) =>{
    try {
        const audienceId = request.params.audienceId
        const gifts = await giftsLogic.getGiftsByAudience(audienceId)
        respons.json(gifts)
        
    } 
    catch (err) {
        next(err)        
    }
})

//delete product
router.delete("/gift/:_id", async (request: Request, respons: Response, next: NextFunction) =>{
    try {
        const _id = request.params._id
        await giftsLogic.deleteGift(_id)
        respons.sendStatus(204)        
    } 
    catch (err) {
        next (err)
        
    }
})

export default router