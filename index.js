 

const ig = require('./instagram');

const tags = ["lagos", "abuja", "nigeria", "hustlersquare", "naijabrandchick", "lekki", "fashion", "portharcourt", "naija", "ibadan", "bellanaijaweddings", "africa", "ja", "instablog", "lagosnigeria", "kaduna", "asoebi", "bellanaija", "warri", "tundeednut", "kano", "asoebibella", "enugu", "madeinnigeria", "nigerianwedding", "ikeja", "nigerian", "style", "naijafashion", "bhfyp"];

(async () => {

  await ig.initilize()
  
  await ig.login("username", "password")

  console.log("debugger")

  await ig.likes(tags)
  debugger


})();

// console.log(process.argv[2])