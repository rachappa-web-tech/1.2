import React from 'react';
import Grid from '@mui/material/Grid'
import { Avatar, Paper, Typography, TextField, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




const Singup=()=>{
    const paperstyle={padding:'30px 20px' ,width:300,height:600,margin:"20px auto" };
    const textfieldstyle ={ padding:'8px'};
    return(
        <>
        <Grid>
            <Paper elevation={10} style={paperstyle}>
                <Grid align='center'>
                    <Avatar>
                      <AccountCircleIcon/>
                    </Avatar>
                    <h2 >Sign Up</h2>
                    <Typography variant="captionn" color="initial">Please fill this form to create an account</Typography>
                </Grid>
                <Grid align='center'>
                <form>

                    <TextField style={textfieldstyle}
                      label="Name"  
                      fullWidth
                      required
                    />
                    <TextField style={textfieldstyle}
                      label="Email"  
                      fullWidth
                      required
                    />
                      <TextField style={textfieldstyle}
                
                      label="Phone Number"  
                      fullWidth
                      required
                    />
                  <TextField style={textfieldstyle}
                    
                      label="Password"  
                      fullWidth
                      required
                    />
                     <TextField style={textfieldstyle}
                   
                      label="Confirm Password"  
                      fullWidth
                      required
                    />
                <TextField style={textfieldstyle}
                      label="Adhara Number"  
                      fullWidth
                      required
                    />
                    <Button  variant="contained" type='submit' color="primary">Sign Up
                      
                    </Button>
                </form>
                </Grid>

            </Paper>
        
          
        </Grid>

      
        </>
    );
}
export default Singup;