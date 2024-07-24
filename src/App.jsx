import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Otp from "./components/Otp"
import CourseCard from "./components/CourseCard"



const App = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element : <Otp />,
    },
    {
      path: "/courses",
      element: <CourseCard />
    }
  ])
  
  return <RouterProvider router={router} />
 
}

export default App
