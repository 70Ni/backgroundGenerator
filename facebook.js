var database = [
    {    username:"andrei",
         password:5212121
    },
    {    username:"jo",
         password:123
    },
    {    username:"Tom",
         password:456
    }
];
 
var newsFeed = [
    {
    username:"Booby",
    timeline:"So tired of working!"
    },
    {
    username:"sally",
    timeline:"javascript is soo cool"
    }
];

function isUserValid(username,password){
    for (var i=0; i<database.length; i++){

       if  (database[i].username === username &&
            database[i].password === username){
                return true;
            }
        }
        return false;
    }

    function signIn(username,password){
        if (isUserValid(username)){
        console.log(newsFeed);
    }else{
        alert ("sorry wrong username and password");
    }
    }
    
var userNamePrompt = prompt("what is your name?");
var passwordPrompt = prompt("what is your password?");

signIn(userNamePrompt,passwordPrompt);
    