import{z} from 'zod';
//z.object({key : value})
export const loginSchema = z.object({
  email : z.string().min(1, 'email is required')
  .email('Invalid Email Formate'),
  
})


