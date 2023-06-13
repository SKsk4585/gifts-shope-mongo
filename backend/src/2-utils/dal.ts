import mongoos from "mongoose"
import appConfig from "./app-config"

async function connect():Promise<void>{
    try {
        const db = await mongoos.connect(appConfig.connectionString)
        console.log (`we are connected to ${db.connections[0].name}`)
        
    }
    catch (error) {
        console.log (error)
        
    }
}
export default {
    connect
}