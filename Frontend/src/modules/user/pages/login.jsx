import { Box, Button, Flex, Heading, Text, TextField } from "@radix-ui/themes";
//import { useRegister } from "../hooks/register-hook";
import { useLogin } from "../hooks/login-hooks";


const Login =()=>{
  const {doSubmit , handleSubmit, register,  errors} = useLogin();
  return(
    <Box width="400px" mx = "auto" mt = "6" height="64px">
      <Heading align="center">Login</Heading>
      <form onSubmit={handleSubmit(doSubmit)}>
        <Box>
          <Text as = "level" size = "3" width = "medium">Email</Text>
          <TextField.Root 
          {...register('email')} 
          type ="email"
           placeholder = "Type Email Here"/>
           {errors.email && <Text color = 'red'>{errors.email.message}</Text>}
        </Box>
         <Box>
          <Text as = "level" size = "3" width = "medium">Password</Text>
          <TextField.Root {...register('password')} type = "password" placeholder = "Type Password Here"/>
          {errors.password && <text color = 'red'>{errors.password.message}</text>}
        </Box>
        
        <Flex gap = "3">
          <Button type ="submit" size="3" style={{margin : 3}}>Login</Button>
           <Button  variant = "soft" type = "button" size="3" style={{margin : 3}}>Reset</Button>
        </Flex>
      </form>
    </Box>
  );
};
export default Login;