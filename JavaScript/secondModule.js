// export function f1(){  }
// export default function f1()  {   }

function f1()
{
    console.log("from secondModule.js");
}

module.exports = f1;