// // import React, {useState} from 'react';

// async function  RedirectURL(oriURL){
//     try{
//     const URL = 'http://localhost:8081/'+oriURL;
//     const response = await fetch(URL,{
//         method:'GET',
//         redirect:'manual',
//     });

//     if(!response.ok){
//         throw new Error('Failed to shorten URL');
//     }

//     if (response.status >= 300 && response.status < 400) {
//         window.location.href = response.headers.get('Location');
//     }

//     }
//     catch(err){
//         console.log("error",err);
//     }
// }   

// RedirectURL("1612dN71");



// async function getHello(){
//     try{
//     const response = await fetch('http://localhost:8081/',{
//         method:'GET',
//     });
    
//     if (!response.ok) {
//         throw new Error('Network response was not ok ' + response.statusText);
//     }

//     const data = await response.json();
//     console.log(data);
//     }
//     catch(error){
//         console.log("error",error);
//     }
// }

// getHello();


// async function generateTinyURL(url){
//     try{
//         const bodyData={
//             url:url
//         }
//         const response = await fetch('http://localhost:8081/url',{
//             method:'POST',
//             headers:{ 'content-type':'application/json',},
//             body:JSON.stringify(bodyData)
//         })

//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(err){
//         console.log("error ", err);
//     }
// }

// generateTinyURL("https://mail.google.com/mail/u/0/#inbox");



async function getAnalytics(url){
    try{
        const address = `http://localhost:8081/url/analytics/${url}`;
        const response = await fetch(address,{
            method:'GET',
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
    
        const data = await response.json();
        console.log(data);
        }
        catch(error){
            console.log("error",error);
        }
}

getAnalytics("1612dN71");

