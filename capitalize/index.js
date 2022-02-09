

function capitalize(str) {

let string = str.trim ();
let stringArr = string.split(" ");
let result = "";


for (let i = 0 ; i < stringArr.length ; i++) {
   
    if (stringArr [i] !== ''){
     let word = stringArr [i].charAt(0).toUpperCase() + stringArr [i].slice(1);
     result += word + " ";
    }
    
}
 
  return console.log (result) ; 
}

// capitalize ("hello         world dude bonus bilal nadjib yacine ");
// capitalize('a short sentence')
// capitalize('a lazy fox')
// capitalize('look, it is working!')



module.exports = capitalize;
