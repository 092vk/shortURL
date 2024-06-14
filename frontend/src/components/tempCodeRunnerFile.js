async function  RedirectURL(oriURL){
    try{
    const URL = 'http://localhost:8081/'+oriURL;
    const response = await fetch(URL,{
        method:'GET',
        redirect:'manual',
    });

    if(!response.ok){
        throw new Error('Failed to shorten URL');
    }

    if (response.status >= 300 && response.status < 400) {
        window.location.href = response.headers.get('Location');
    }

    }
    catch(err){
        console.log("error",err);
    }
}   

RedirectURL("1616gY&5");