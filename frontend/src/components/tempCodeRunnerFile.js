async function getHello(){
    try{
    const response = fetch('http://localhost:8081/',{
        method:'GET',
    });
    
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    console.log(data);
    }
    catch(error){
        console.log("error");
    }
}

getHello();
