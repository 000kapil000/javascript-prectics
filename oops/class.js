class user{
    #password;
constructor(name,userName,password){
    this.name=name;
   this.userName=userName;
   this.#password=password;
}

login(userName,password){
    if (userName===this.userName && password===this.#password) {
        console.log(`login successfull`);
    }else{
        console.log(`login unsuccesfull`);
    }
}

setPassword(newPassword){
    this.#password=newPassword;

}
};

const neha= new user('neha shrma','neha_shrma','password');
const amit=new user('amit pathak','ammi_jaan','Pathak000');

// neha.login('neha_shrma','password');    successfull login
amit.login('ammit_jaan','Pathak000');


console.log(neha.name);
console.log(neha.password);
// console.log(neha.#password);


neha.setPassword('123456');

neha.login('neha_shrma','password');//this givs unsuccessfull 
neha.login('neha_shrma','123456');// this givs succcessfull 



/*
Here I have created a class named User, which has some properties and methods. Then I am creating instances of the class using new User() and passing the values of required properties.

Did you see one constructor method which we never called in our code??

Actually, The method has been called 🙄

When we create an object from a class using the new keyword javascript internally calls the constructor method which initialised the public and private properties of a class. The object here can access all the public properties and methods of a class.

What is public and private properties??

By default, all the properties declared in the class are public means you can call and modify them from outside the class. You can declare public properties in or out of the constructor. Here name and userName are public properties.

What about private?

Again look at the code. Did you notice the password is written outside of the constructor method prefixed with #?
Hash(#) indicates that this property is private to the class and only methods that are declared inside the class can access it. Private properties should be declared before they were used.

When I tried to print the password, I got undefined as I don't have any member named as 'password', then I tried it with '#password' that gave me a syntax error because the '#password' is private.

To print/modify the private properties, we need getter/setter methods. Here I have created one method that set the new password.

The following concepts are the four pillars of OOP langueage.
*/