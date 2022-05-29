import React from 'react';
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Paper, TextField, FormControlLabel, Checkbox,Link, Button, Typography } from '@mui/material';
import {Formik,Form,Field} from 'formik';

const Login=()=>{
    const paperstyle={padding:20,height:'70vh',width:280,margin:"20px auto"};
    const avatarstyle={backgroundColor:'green'};
    const textfiledstyle={padding:8};
    const initialValues ={
      email:'',
      password:'',
      remember:false
    };
    const onsubmit=(values,props)=>{
      console.log(values);
 
    };
    return(
        <>
       <Grid>
           <Paper elevation={10} style={paperstyle}>
            <Grid align='center'>
                <Avatar style={avatarstyle}>
                   <LockOutlinedIcon/>

                 </Avatar>

                <h2>Sign in</h2>
                <Formik initialValues={initialValues} onSubmit={onsubmit}>
                  {(props)=>(
                    <Form>
                     
                      < Field as={TextField} style={textfiledstyle} id="" name='email' type={'email'} label="Email" placeholder='Email' required  variant="outlined"/>
                      < Field as={TextField} style={textfiledstyle} id="" name='password' type={'password'} label="Password" placeholder='Password' required  variant="outlined"/>
                      < Field as={FormControlLabel} label="Remember me" name='remember' control={<Checkbox color="primary"/>}/>
                      <Button  color="primary" variant="contained" fullWidth type='Submit'> Sign </Button>
                     </Form>
                      )}
                 </Formik>
              
                <Grid>
                <Typography style={textfiledstyle} variant="body2" color="initial">Forgot Password ?</Typography>

                
                <Typography style={textfiledstyle} variant="body2" color="initial">Do you have account ?<Link href='#'>Sign Up?</Link></Typography>

                </Grid>
               
            </Grid>
              
                
           </Paper>
         

         
       </Grid>


        </>
    );
}
export default Login;