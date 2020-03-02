// import { f1 } from './secondModule'      // valid code in react and angular
// import f1 from './secondModule'       // if we set default export then use this line of code

const f1 = require('./secondModule')
f1();
 console.log(f1);