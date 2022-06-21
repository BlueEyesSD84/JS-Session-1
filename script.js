/*console.log("Hello World"); //everything in JS is sequentional
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


 /*var name='Jimmy';
 var email='jimmy.a.smith@gmail.com';
 var pass='aksdjfksd';
 let age=57;
 var country='USA';
 let salary=6000;

 document.write(`
 My Name is ${name} and my email address is ${email} and my annual salary is $${salary*12}.
 
 `)*/

 /*AMAZON   */

 var firstName='Jimmy';
 var lastName='Smith';
 var yourAddress='Chula Vista, Ca.'
 var yourCart='Empty'
  var yourOrders='TV, Stereo, Laptop'
 var customerService='Click Here'
 var yourLists='Widges, More Widgets'
 var amazonDay='New Car'
 let yourTransactions=500
 var manageContent='Books, Audio Books, Apps, Video, Prime Reading'
 var twitchSettings='Link your Twitch Account'
 var audibleSettings='Membership, Audible Payment Method, Payments and Purchase History'
 var comixologySettings='Your Books, ios, Android, Fire OS'
 var manageDigital='Manage Game Content'
 var yourEssential='Add, Sort,  Order'
 var yourSubscriptions='Amazon Prime, Amazon Photos'
 var yourMessages='Thank you for being a Amazon Customer'
 var archivedOrders='Click here to see your past 10 orders'
 var yourEssentials='You do not have Essentials set up yet'
 var yourMusic='your Music Settings'
 var yourPoints='shop with your award points'

 document.write(`
 <p> Hello ${firstName} ${lastName}!  We have your current address as ${yourAddress}.</p>
 <p> Your cart is Sad as it is <strong>${yourCart}</strong>, make it happy by shopping here!</p>
 <p> This is a list of your past orders ${yourOrders}. </p>
 <p>If you would like to reach <u>Customer Service</u>, please ${customerService}.</p>
 <p> We see that you have this list of items ${yourLists}, would you like to add them to your cart?</p>
 <p> This is our Deal of the Day! ${amazonDay}.</p>
 <p> You are an ALL STAR! you have ordered over ${yourTransactions} items!!! Great Job!! We love you!!!</p>
 <p> If you want to manage your ${audibleSettings} click here.</p>
<p> This is a list o fyour Comixology Devices ${comixologySettings}.</p>
<p> Would you like to see your ${manageDigital} content?</p>
<p> If you need to ${yourEssentials} would you like to ${yourEssential}?</p>
<p> Here is a list of your subscriptions ${yourSubscriptions}.</p>
<p> We would like to ${yourMessages}.</p>
<p> If you would like to see your orders ${archivedOrders}.</p>
<p> You have not setup your Amazon music profile yet, please click here to set  ${yourMusic}.</p>
<p> We have talled your total award points,  would you like to ${yourPoints}?</p>
 `)
