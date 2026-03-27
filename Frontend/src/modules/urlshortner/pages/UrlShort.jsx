 import { Box, Heading , Button, Text, TextField} from "@radix-ui/themes"
//import { useRegister } from "../../user/hooks/register-hook"
import { useRef, useState } from "react";
import apiClient from "../../../shared/services/api-client";
//import { useState } from "react";
 
export const UrlShort = () => {
  const url = useRef();
 const [ShortURL, setShortURL] = useState();
  const TakeURL = async() =>{
   const URL = url.current.value;
   try{
     const response = await apiClient.post('/short/short-url', { bigurl: URL });
  console.log("response", response)
   if (response && response.data.shorturl){
    setShortURL(response.data.shorturl);
    console.log("Small URL is ", response.data.shorturl)
   }
   else{
    console.log("Some problem in Short URL");
   }
  }
  catch(err){
 console.log("Some problem in Short URL", err);
  }
   console.log("get the url", URL)
  };
  return (
    <Box width="400px" mx="auto" mt="6">
      <Heading align="center">URL Shortener</Heading>

      
        <Box>
          <Text as="label" size="3" weight="medium">Big URL</Text>
          <TextField.Root 
          ref={url}
            type="text"
            placeholder="Type URL here"
          />
        </Box>

      
        <Button onClick={TakeURL} variant = "classic" type = "button" size="3" style={{margin : 3}}>Short URL</Button>
      <a href= {ShortURL}>{ShortURL}</a>
    </Box>
  );
};
