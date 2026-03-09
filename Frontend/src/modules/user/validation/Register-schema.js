import{z} from 'zod';
//z.object({key : value})
export const RegisterSchema = z.object({
  email : z.string().min(1, 'email is required')
  .email('Invalid Email Formate'),
  password : z.string().min(8, 'password must be >= 8').max(25, 'password must be <= 25'),
  name : z.string().min(2, ' name must be >= 2').max(25, 'Name Max Allowed Chars are 25')
  .trim()
})







