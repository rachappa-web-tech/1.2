import React from 'react';
import Grid from '@mui/material/Grid'
import { Avatar, Paper, Typography, TextField, Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Form, Formik,Field } from 'formik';




const Singup=()=>{
    const paperstyle={padding:'30px 20px' ,width:300,height:600,margin:"20px auto" };
    const textfieldstyle ={ padding:'8px'};
    const initialValues ={
      Name:'',
      email:'',
      phonenumber:'',
      password:'',
      repassword:'',
      adhar:'',
    };
    const onsubmit=(values,props)=>{
      console.log(values);
 
    };

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
 <Formik initialValues={initialValues} onSubmit={onsubmit}>
   {(props)=>(
     <Form>
        <Field as={TextField} style={textfieldstyle} label="Name" name='Name' type='name'fullWidth required/>
        <Field as={TextField} style={textfieldstyle} label="Email"name='email' type='email'fullWidth required/>
        <Field as={TextField} style={textfieldstyle} label="Phone Number"name='phonenumber'type='number' fullWidth required/>
        <Field as={TextField}d style={textfieldstyle} label="Password" name='password' type='password' fullWidth required/>
        <Field as={TextField} style={textfieldstyle} label="Confirm Password" name='repassword' type='password' fullWidth required/>
        <Field as={TextField} style={textfieldstyle}  label="Adhara Number" name='adhar' type='number'fullWidth required/>
        <Button  variant="contained" type='submit' color="primary">Sign Up</Button>
     </Form>
   )}
   
   
   </Formik> 
</Grid>
  </Paper>
  </Grid>

      
        </>
    );
}
export default Singup;