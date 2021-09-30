export default  {
    success: function (res:any, data:any,message?:string) {
      // console.log("RESS", res);
      res.status(200).send({
        status: true,
        data: data,
        message:message,
        code: 200,
      });
    },
  
    error: function (res:any, data:any,message?:string) {
      res.status(401).send({
        status: false,
        data: data,
        message:message,
        code: 401,
      });
    },
  };
  