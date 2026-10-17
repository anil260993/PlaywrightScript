class person{
    Firstname:string;
    Lastname:string;
    age:number;
    rollnumber:number;

    constructor(Firstname:string,Lastname:string,age:number,rollnumber:number){
        this.Firstname=Firstname;
        this.Lastname=Lastname;
        this.age=age;
        this.rollnumber=rollnumber;
    }

    Fullname():string{
        return this.Firstname+" "+this.Lastname;
    }   
    Customers():string{
        return this.Firstname+" "+this.Lastname+" "+this.age+" "+this.rollnumber;
    }

    
}
let person1=new person("John","Doe",25,101);
console.log(person1.Fullname());
console.log(person1.Customers());   