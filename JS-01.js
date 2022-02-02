('use strict');

console.log ("I'd like to ask you some questions, is that ok?");

var name = window.prompt("Hey, you have a name?")
alert("Hey " + name + ", nice to chat with you!")
//
userAns = prompt("I'd like to ask you some questions, is that ok?");
alert("Ok, let's move along please!");
//

 userAns = prompt("Are there seven days in a week?").toLowerCase();

 while(userAns != "Yes" && userAns != "yes")
{
    alert('Incorrect...');
    userAns = prompt("Are there seven days of the week?");
}
alert("That's right! There are seven days in a week!");
//
userAns = prompt("Is an Ostrich a bird?").toUpperCase();

 while(userAns != "Yes" && userAns != "yes")
{
    alert('Incorrect...');
    userAns = prompt("Is an Ostrich a bird?");
}
alert("Wow, you might be smarter than most people!");
//

userAns = prompt("Can candy cause cavities?").toUpperCase();

 while(userAns != "Yes" && userAns != "yes")
{
    alert('Incorrect...');
    userAns = prompt("Can candy cause cavities?");
}
alert("Wow. Ok, next question!");
//
userAns = prompt("Did Steve Jobs create the Mac computer?").toLowerCase();

while(userAns != "Yes" && userAns != "yes")
{
    alert('Incorrect...');
    userAns = prompt("Did Steve Jobs create the Mac computer?");
}
alert("Wow...Just wow!")
//
 userAns = prompt("Do you speak another language?").toLowerCase();
alert("Ok, that's all I have to ask, " + name + " Thank you!")


console.log(userAns);