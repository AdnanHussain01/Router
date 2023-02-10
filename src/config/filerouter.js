import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import QuizScreen from "../component/homescreen";
import Login from "../component/login";
import SignUp from "../component/signup";



function AppRouter() {
    return (
        <>
            <BrowserRouter>
                <nav>
                    <li>
                        <Link to="Signup" > Sign Up </Link>
                    </li>
                </nav>
                <Routes>
                    <Route path = "Signup" element = {<SignUp />} />
                    <Route path = "quizscreen" element = {<QuizScreen />} />
                    <Route path = "login" element = {<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default AppRouter;