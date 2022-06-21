console.log("Hello World"); //everything in JS is sequentional
//declaration of the variable
var userName;

//assign the value to the variable
userName="Cory";
userName='Nana';//use quotations(either single or double) is a string
//userName=99;
let userAge=99;

console.log(userName);

let userEmail="jsmith@sdgku.edu" //declartion and assign, can use "let" instead of 'var'.
const url="sdzoo.com"//constant cannot change
console.log(userEmail);

//document.write("<p>user Name:  " + userName + "</p><p> User Email:  " + userEmail + "</p><p>User Age" + userAge "</p> + <p>Webpage" + url</p>);

/*document.write(`
    <p>Name: ${userName} </p>
    <p>Age: ${userAge}</p>
    <p>Email: ${userEmail}</p>
    <p>URL: ${url}</p>            
 `);

 let numChildren=2;
 var partName;
 var geoLoc;
 var jobTitle;
 partName='Lynn';
 geoLoc='Chula Vista';
 jobTitle='Full Stack Developer';

 document.write(`
 I will be a ${jobTitle} living in ${geoLoc}, Ca.  Married to ${partName} and we have ${numChildren} children.
 `);
 */


 var name='Jimmy';
 var email='jimmy.a.smith@gmail.com';
 var pass='aksdjfksd';
 let age=57;
 var country='USA';
 let salary=6000;

 document.write(`
 My Name is ${name} and my email address is ${email} and my annual salary is $${salary*12}.
 
 `)