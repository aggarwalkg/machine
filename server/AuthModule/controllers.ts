import ResponseFormattor from "../service/ResponseFormatter";
import {  Request, Response } from "express";
var data = require('./data.json');
class Controller {
  async login(req: Request, res: Response) {
    console.log("INSODE LOGINM")
    let { email, password } = req.body;
const result:any = data.data.filter((item:any)=>{
    if(item.email==email && item.password==password){
      return item
    }

})
    return ResponseFormattor.success(res, {data:result},"Login Successful.");
  }
  async studentList
  (req: Request, res: Response) {
    console.log("INSODE studentlist",req.body)
    let { name} = req.body;
const result:any = data.data.filter((item:any)=>{
    if(item.teacherAssign==name){
      return item
    }

})
console.log("res",result,result.length)
    return ResponseFormattor.success(res, {data:result},"Login Successful.");
  }
}
export default new Controller();
