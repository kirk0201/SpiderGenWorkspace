/** Controller Sample
exports.signUp = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    var inObj = JSON.parse(req.body.data);
    var data = inObj.body.InBlock1[0];
    var query_name = inObj.header.query_name;
  
    console.log("inObj", inObj);
    //   console.log("data", data);
    //   console.log("query_name", query_name);
  
    var resData = null;
  
    if (query_name == "signUp") {
    }
};
*/
