import React from 'react'
import ReactDOM from 'react-dom/client'


//样式顺序
//样式初始化一般放在前面
import "reset-css"
//有UI框架写这里
//全局样式
import "./assets/styles/global.scss"
//组件样式  把app写在下面 自己的样式可以覆盖上面的样式
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom' 
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
   
  </React.StrictMode>,
)
