import express from "express"
import catchAll from "./3-middlewere/catchAll"
import routeNotFound from "./3-middlewere/RouteNotFound"
import appConfig from "./2-utils/app-config"
import dal from "./2-utils/dal"
import giftsController from "./6-controllers/gifts-controller"






dal.connect()
const server = express()
server.use(express.json())
server.use("/api", giftsController)
server.use("*",routeNotFound)
server.use(catchAll)
server.listen(appConfig.port,(()=>console.log(`listen on port${appConfig.port}`)))
