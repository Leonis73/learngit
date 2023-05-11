// 组件化的写法
import App from '../App'
import Home from '../views/home'
import About from '../views/about'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'

// const baseRouter = () =>(
//     <BrowserRouter>
//     <Routes>
//         <Route path="/" element={<App/>}>
//             <Route path='/home' element={<Home/>}></Route>
//             <Route path='/about' element={<About/>}></Route>
//         </Route>
//     </Routes>
//     </BrowserRouter>
// )
const baseRouter = () =>(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App/>}>
            {/*配置用户访问重定向到home*/}
            <Route path='/' element={<Navigate to="/home"/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
        </Route>
    </Routes>
    </BrowserRouter>
)
// 新的写法

export default baseRouter