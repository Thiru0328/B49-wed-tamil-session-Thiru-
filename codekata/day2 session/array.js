function log(...value) {
    console.log(...value);
}
//let ages =[34, 25, 18, 16, 55, 5];

//console.log(ages);
//console.log(ages[0]);
//ages[2] =19;
//console.log(ages[2]);
//console.log(ages);



//let ages =[34, 25, 18, 16, 55, 5];
//log(ages[0]);
/*for (let index=0; index<6; index++){
    log(ages[index]);
}

for (let index=0; index!=6; index++){
    log(ages[index]);
}*/

/*for(let index=0; index<6; index++){
    if (ages[index] >=18) {
        log(ages[index], "eligible to vote");
    } else {
        log(ages[index], "not eligible to vote");
    }
}*/

//let ages =[34, 25, 18, 16, 55, 5];
//log(ages.join(', ')); //array to string

let string = "34 25 18 16 55 6";
log(string.split(' ')); //string to array