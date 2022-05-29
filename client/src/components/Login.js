import React from 'react';
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Paper, TextField, FormControlLabel, Checkbox,Link, Button, Typography } from '@mui/material';

const Login=()=>{
    const paperstyle={padding:20,height:'70vh',width:280,margin:"20px auto"};
    const avatarstyle={backgroundColor:'green'};
    const textfiledstyle={padding:8};
    return(
        <>
       <Grid>
           <Paper elevation={10} style={paperstyle}>
            <Grid align='center'>
                <Avatar style={avatarstyle}>
                   <LockOutlinedIcon/>

                 </Avatar>

                <h2>Sign in</h2>
                <TextField style={textfiledstyle}
                  id=""
                  type={'uemail'}
                  label="Email"
                  placeholder='Enter UserEmail'
                  variant="outlined"     
                               required
                 

                  
                />
                   <TextField style={textfiledstyle}
                  id=""
                  type={'password'}
                  label="Password"
                  placeholder='Password'
                  required
                  variant="outlined"
                  

                  
                />


                <FormControlLabel
                  label="Remember me"
                  control={
                    <Checkbox
                     name='checkdB'
                      color="primary"
                    />
                  }
                />
                <Grid>
                    <Button variant="text" color="primary" variant="contained" fullWidth type='Submit'>
                    Sign 
                  
                    </Button>

                </Grid>
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