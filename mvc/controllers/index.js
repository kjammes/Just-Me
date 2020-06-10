
const data = require("../../data");

const postData = data.postData;

getHomePage = function(req,res){
  res.render("index",{ title:"Just Me" , posts:postData });
}

const getBlogPost = function({params})

module.exports = {
  getHomePage
}
