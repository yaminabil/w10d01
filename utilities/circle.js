

const area = (radius)  => {
return radius * radius * Math.PI ; 
}


const circumference = (radius) => {
    return radius *2 *Math.PI;
}



console.log (area (4));
console.log (circumference (4));

module.exports = {
    area ,
    circumference
} ;
