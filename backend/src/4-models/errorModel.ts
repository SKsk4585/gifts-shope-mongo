export class ErrorModel{
    public constructor(public status:number, public msg:string){}
}
export class RouteNotFoundErrorModel extends ErrorModel{
    public constructor(route:string){
        super(404,`the ${route} is not exists`)
    } 
}
export class ResouceNotFoundErrorModel extends ErrorModel{
    public constructor(id:string){
        super(404,`the ${id} is not exists`)
    } 
}
export class ValidateErrorModel extends ErrorModel{
    public constructor(msg:string){
        super(400, msg)
    } 
}