export const error404 = (request, response, next) =>{
  response.status(404).send("<h2>OOPS Something Went Wrong...</h2>");
};