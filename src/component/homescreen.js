import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
function QuizScreen(){
        const navigation = useNavigate()
    return(
            <div className="welcome">
            <h1> Welcome </h1>
                <Button onClick={() => navigation('/Signup') } className="rounded shadow mx-5 my-2 fs-4" variant="contained">Back to Sign Up</Button>
                </div>
        )

}
export default QuizScreen;