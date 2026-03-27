import { nanoid } from "nanoid";
import { addURL, getsmalltoBig } from "../services/url-services.js";
//import { getURL } from "../services/url-services.js";

 export const getBigURL = async( request , response) =>{ 
    const {code} = request.params;
     console.log("code is", code);
     try{
     const doc = await getsmalltoBig(code);

     if(doc && doc._id){
         response.redirect(doc.bigurl);
     }
     else{
response.json({message :'Invalid Small URL'})
     }
     }
     catch(err){
      console.log('Error is', err);
      response.json({message :'Invalid Small URL', err})
     }

    }

export const urlShort = async (request, response) => {
  const bigurl = request.body.bigurl;
  console.log("Big URL", bigurl);

  try {
    const num = nanoid(6);

    const doc = await addURL({
      email: "Harshitamishraims@gmail.com",
      shortid: num,
      bigurl: bigurl
    });

    if (doc && doc._id) {
      response.json({
         shorturl: process.env.BASE_URL + "short/small/" + num });
    } else {
      response.json({ error: "Something went wrong" });
    }

  } catch (err) {
    console.log("Error in Short URL", err);
    response.json({ error: "Something went wrong", err });
  }

};
