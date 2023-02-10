import { Box, Button, InputAdornment, TextField, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigation = useNavigate()
    return(
        <>
        <Box sx={{
            height:'450px',
            marginLeft:'25%',
            width:'50%',
            borderRadius:"15px",
            border:'1px solid black',
            }}>
            <Typography sx={{
                textAlign:"center",
                fontWeight:"bold",
                fontFamily:"Franklin Gothic Medium"
            }} variant="h2"> Login </Typography>
                  <TextField className="Username"
        id="input-with-icon-textfield"
        label="User Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
     <TextField className="Username"
        id="input-with-icon-textfield"
        label="Email"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
     <TextField className="Username"
        id="input-with-icon-textfield"
        label="Password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Box>
      <Button
      sx={{
        marginTop:'8%',
        width:'60%',
        fontSize:"19px",
        fontWeight:'bold',
        marginLeft: "20%",
      }}
      variant="contained" onClick={() => navigation('/QuizScreen') } size="large" >Log In</Button>
      </Box>
        </Box>
        </>
    )
}
export default Login;