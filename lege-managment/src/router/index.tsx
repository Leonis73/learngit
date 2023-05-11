//对象式的写法 
import Home from "../views/home"
import About from "../views/about"
//重定向组件
import { Navigate } from "react-router-dom"
const routes = [
    {
        path:"/",
        Element:<Navigate to="/home"></Navigate>
    },
    {
        path:"/home",
        Element:<Home/>
    },
    {
        path:"/about",
        Element:<About/>
    }
]

export default routes