import { Box,
   Button,
   Flex,
   Heading, 
   Text, 
   TextField } from "@radix-ui/themes";
import { useRegister } from "../hooks/register-hook";
const Register =()=>{
  const {doSubmit , handleSubmit, register,  errors} = useRegister();
  return(
    <Box width="400px" mx = "auto" mt = "6" height="64px">
      <Heading align="center">Register</Heading>
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
          {errors.password && <Text color = 'red'>{errors.password.message}</Text>}
        </Box>
        <Box>
          <Text as = "level" size = "3" width = "medium">Name</Text>
          <TextField.Root {...register('name')} type = "text" placeholder = "Type Name Here"/>
          {errors.name && <Text color = 'red'>{errors.name.message}</Text>}
        </Box>
        <Flex gap = "3">
          <Button type ="submit" size="3" style={{margin : 3}}>Register</Button>
           <Button  variant = "soft" type = "button" size="3" style={{margin : 3}}>Reset</Button>
        </Flex>
      </form>
    </Box>
  );
};



// function Register (){
//   return(
//     <div>
//       <h1>Registration Form</h1>
//     </div>
//   )
// }
export default Register;



// import { Box, Button, Flex, Heading, Text, TextField } from "@radix-ui/themes";
// import { useRegister } from "../hooks/register-hook";

// const Register = () => {
//   const { doSubmit, handleSubmit, register, errors } = useRegister();

//   return (
//     <Box style={{ width: "400px", margin: "2rem auto", minHeight: "64px" }}>
//       <Heading align="center">Register</Heading>
//       <form onSubmit={handleSubmit(doSubmit)}>
//         {/* Email */}
//         <Box mb="3">
//           <Text as="label" size="3">
//             Email
//           </Text>
//           <TextField.Root
//             {...register("email")}
//             type="email"
//             placeholder="Type Email Here"
//           />
//           {errors.email && (
//             <Text color="red">{errors.email.message}</Text>
//           )}
//         </Box>

//         {/* Password */}
//         <Box mb="3">
//           <Text as="label" size="3">
//             Password
//           </Text>
//           <TextField.Root
//             {...register("password")}
//             type="password"
//             placeholder="Type Password Here"
//           />
//           {errors.password && (
//             <Text color="red">{errors.password.message}</Text>
//           )}
//         </Box>

//         {/* Name */}
//         <Box mb="3">
//           <Text as="label" size="3">
//             Name
//           </Text>
//           <TextField.Root
//             {...register("name")}
//             type="text"
//             placeholder="Type Name Here"
//           />
//           {errors.name && <Text color="red">{errors.name.message}</Text>}
//         </Box>

//         <Flex gap="3">
//           <Button type="submit" size="3">
//             Register
//           </Button>
//           <Button variant="soft" type="button" size="3">
//             Reset
//           </Button>
//         </Flex>
//       </form>
//     </Box>
//   );
// };

// export default Register;
