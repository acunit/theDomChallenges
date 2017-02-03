// keypress for submitting information

function enter(x) {
  if(x.keyCode == 13) {
    main();
  }
}

//username length checker
function usernameLength(user) {
    if(user.length<6){ //checks if the username is longer than 6 chars
      return{ //if > 6, return JSON object with vars...
        valid:false, //value
        reason: "Your username does not have enough characters." //reason
      }
    } else{ //if the username length is greater than 6
      return { //return JSON object with var...
        valid: true //valid
      }
    }
}

//password length checker

function passwordLength(pwd) {
    if(pwd.length<6){ //checks if the password is longer than 6 chars
      return{
        valid:false,
        reason: "Your password does not have enough characters."
      }
    } else{
      return {
        valid: true
      }
    }
}

//same username and password checker
function sameChecker(user, pwd) {
    if(user===pwd){
      return{
        valid:false,
        reason: "Your username and password are the same."
      }
    } else{
      return {
        valid: true
      }
    }
}

//username symbol checker

function usernameSymbol(user) {
    if(user.includes("!")||user.includes("$")||user.includes("#")){
      return{
        valid:false,
        reason: "Your username contains a banned symbol."
      }
    } else{
      return {
        valid: true
      }
    }
}

//password symbol checker
function passwordSymbol(pwd) {
    if(!pwd.includes("!")&&!pwd.includes("$")&&!pwd.includes("#")){
      return{
        valid:false,
        reason: "Your password needs a special symbol: !, $, or #."
      }
    } else{
      return {
        valid: true
      }
    }
}

//password "password" checker
function passwordSame(pwd) {
    if(pwd==="password"){
      return{
        valid:false,
        reason: 'Your password cannot be "password"!'
      }
    } else{
      return {
        valid: true
      }
    }
}

// declaring our variable
// var u = document.getElementById("user").value;
// var p = document.getElementById("pass").value;

function main() {
  //We want to get the username and password from the user
  //Then run it through each of our functions
  //If there are any invalid things, notify the user
  //If not, only notify them at the end that everything went ok

  // var u = prompt("please enter username.") //prompt the user for a username
  // var p = prompt("please enter password.") //prompt the user for a password


  var u = document.getElementById("user").value;
  var p = document.getElementById("pass").value;

  // alert(u + " " + p);

  //each of these runs a checker function and returns the JSON into its own var
  var uLength = usernameLength(u);
  var uSymbol = usernameSymbol(u);
  var pLength = passwordLength(p);
  var pSymbol = passwordSymbol(p);
  var pSame = passwordSame(p);
  var sChecker = sameChecker(u, p);

  var allGood = true; //represents if all the checkers return valid === true

  if(uLength.valid===false){ //if usernameL
    document.getElementById("response").innerHTML = uLength.reason;
    allGood=false;
  }
  if(uSymbol.valid===false){
    alert(uSymbol.reason)
    allGood=false;
  }
  if(pLength.valid===false){
    alert(pLength.reason)
    allGood=false;
  }
  if(pSymbol.valid===false){
    alert(pSymbol.reason)
    allGood=false;
  }
  if(pSame.valid===false){
    alert(pSame.reason)
    allGood=false;
  }
  if(sChecker.valid===false){
    alert(sChecker.reason)
    allGood=false;
  }
  if(allGood===true){
    alert("Your username and password look great!")
  }
}

main();
