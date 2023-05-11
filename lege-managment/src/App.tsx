import { useState } from 'react'
// import { Button,} from 'antd'
// import { Outlet} from 'react-router-dom'
import router from "./router"
import { useRoutes,Link } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
    <div className='App'>
      <div>
        <Link to={"/Home"}>Home</Link>
        <Link to={"/About"}>About</Link>
        {/*占位符组件，类似于窗口，用来展示组建的，有点像vue中的router-view*/}
        {outlet}
      </div>
     </div>
      
  )
}

export default App
