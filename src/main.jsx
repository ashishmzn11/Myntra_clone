import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import { RouterProvider } from 'react-router-dom'
const router=creatrowserRouter([{path:"/",
  element:<App/>,
  Children:[{path:"/",element:<App/>},
    {path:"/bag",element:<Bag/>}
  ]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}><App /></RouterProvider> 
  </React.StrictMode>,
)
