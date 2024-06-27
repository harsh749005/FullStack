
import './App.css'
import Inquery from './Inquery'
import Home from './Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {


  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Home/></>
    },
    {
      path:"/inquery",
      element:<><Inquery/></>
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
