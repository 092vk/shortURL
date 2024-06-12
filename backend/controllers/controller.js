import mapi from '../models/mapi.js';
import hasher from '../hasher.mjs';

async function handleGenerateNewShortUrl(req,res){
    const body = req.body;
    if(!body.url) return res.status(400).json({error : 'url is required , bad request'});


    //check for uniqueness of the generated hash code 
    let shortId;
    let unique = false;
    while(!unique){
        shortId = hasher(body.url);

        //check the shortId for uniqueness and according to it update the flag 
        const users = await mapi.find({shortId : shortId});

        if(users.length == 0){
            unique = true;
        }
    };
    

    await mapi.create({
        shortId:shortId,
        origiId:body.url,
        visitHistory:[],
    });

    return res.json({id:shortId});
}

async function handleAnalytics(req,res){
    const findme = req.params.shortId;
    const result = await mapi.findOne({findme});
    return res.json({
        totalClicks : result.visitHistory.length,
        analytics: result.visitHistory,
    });
}


export {handleGenerateNewShortUrl,handleAnalytics};