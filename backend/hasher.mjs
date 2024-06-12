export default function hasherGenerator(orgUrl){

    
    //1.first divide the whole url into 5+1 parts 
    //2.for each of parts generate a unique symbol , 1,2 for num , 3 for small alpha , 4 for capital alpha and 5 for symbol  and 6 for symbol(remaing )
    //3.combine all the 5+1 symbols 
    //4.check if the symbol is unique if yes then return it 
    //5.if the symbol is not unique then repeat the process untill we get unique symbol '



//1. so we will run loop from start to end and then we will push a string of size = sizeStr/5 into a array 



function hasher(url){
 
    let arr = [];
    let size = Math.floor(url.length/5);
    let temp = "";

    for (let ele of url){
        temp+=ele;
        if(temp.length == size){
            arr.push(temp);
            temp="";
        }
    }

    if(temp.length != 0){
        arr.push(temp);
    }

    return arr;
}

// const input = "https://www.google9709723880.com";
let arr = hasher(orgUrl);

// for (let i of arr){
//     console.log(i);
// }


//now we have to map each of the group of symbols with a unique and random symbol 
let mapi = new Map();
mapi.set(arr[0], String(Math.floor(Math.random() * 10)+10));
mapi.set(arr[1], String(Math.floor(Math.random() * 10)+10));
mapi.set(arr[2], String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97));
mapi.set(arr[3], String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65));
mapi.set(arr[4], String.fromCharCode(Math.floor(Math.random() * (64 - 34 + 1)) + 34));
if(arr[5] != undefined){
    mapi.set(arr[5], String.fromCharCode(Math.floor(Math.random() * (64 - 34 + 1)) + 34));
}

//printing the map
// for(let [key,value] of mapi){
//     console.log(key+" "+value);
// }


let symbol="";
for(let i=0;i<arr.length;i++){
    symbol+=mapi.get(arr[i]);
}



//check in db if it is unique or not and if not then generate the symbol again and if yes then push it into db for further use 

    return symbol;
}


