import { Route, Routes } from "react-router-dom";
import Register from "../../modules/user/pages/Register";
import { Home } from "../../modules/user/pages/home";
import Login from "../../modules/user/pages/Login";

export const AppRoutes = ()=>{
    return (<Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>)
}