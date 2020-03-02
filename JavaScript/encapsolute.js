// class Student
// {
//     // rollno;
//     // name;

//     //setter
//     setRollNo(roll)
//     {
//         if(roll > 0 && roll <= 200)
//         {
//             this.rollno = roll;
//         }
//     }

//     //getter
//     getRollNo()
//     {
//         return this.rollno;
//     }

//     setName(name)
//     {
//         if(name.length > 3 && name.length <= 20)
//         {
//             this.name = name;
//         }
//     }
//     getName()
//     {
//         return this.name;
//     }
// }
//     let s = new Student();
//     s.setRollNo(1);
//     console.log(s.getRollNo());
//     s.setName("Manisha");
//     console.log(s.getName());
//-------------------------------------------------------------------------------------------

class Student
{
    // _rollNo;
    // _name;
    // _mobile;
    // _std;

    // setter
    set rollNo(roll)
    {
        if(roll > 0 && roll <= 200)
            this._rollNo = roll;
    }
    // getter
    get rollNo()
    {
        return this._rollNo;
    }

    set name(name)
    {
        if(name.length > 3 && name.length <= 20)
            this._name = name;
    }
    get name()
    {
        return this._name;
    }
}
 let s = new Student();
//  s.rollNo = -0;
//  s.name = "a";
//  s.setRollNo(0);
//  s.setRollNo(10);
//  s.setRollNo(1000);

 s.rollNo = 100;
 s.name = "Manisha";
 console.log(s.rollNo);
 console.log(s.name);
 console.log(s);