// Method overloading

// class Addition
// {
//     add(a, b)
//     {
//         console.log("first");
//         return a + b;
//     }
//     add(a, b, c)
//     {
//         console.log("Last");
//         return a + b + c;
//     }
// }
// let a = new Addition();
// a.add(10, 20);              // calls last method
// a.add(10.20, 20.30);        // calls last method
// a.add(10, 20, 30, 40);      // calls last method
//----------------------------------------------------------------------------------------------------

// Method Overriding

// class Person 
// {
//     constructor()
//     {
//         this.name = "abc";
//         this.email = "abc@gmail.com";
//     }
//     profile()
//     {
//         console.log(`Name: ${this.name}, Email: ${this.email}`);
//     }
// }

// class Employee extends Person
// {
//     constructor()
//     {
//         super();
//         this.empId = 10;
//         this.company = "ABC";
//     }
//     profile()
//     // abc()
//     {
//         console.log(`Name: ${this.name}, Email: ${this.email}, EMPID: ${this.empId}, 
//         Company: ${this.company}`);
//     }
// }

// let em = new Employee();
// em.profile();
// // em.abc();
//---------------------------------------------------------------------------------------------------

// Inheritance :-

class Person
{
    // name;
    // email;
    // mobile;
    // city;

    constructor(n, e, m, c)
    {
        this.name = n;
        this.email = e;
        this.mobile = m;
        this.city = c;
    }
    login()
    {

    }
}
class Employee extends Person
{
    // empId;
    // company;

    constructor(empId, company, n, e, m, c)
    {
        super(n, e, m, c);        // call to super class constructor
        // super() must be witten before any 'this' statements.
        // super must be first statement after curly braces.
        // super class constructor completes execution before sub class constructor.
        // calling super class constructor is important bacause sub class object has properties of super
        // class and those properties must be initialized. 
        this.empId = empId;
        this.company = company;
    }
}

let em = new Employee(1, "TCS", "abc", "abc@gamil.com", "111111111", "Pune");
console.log(em);
