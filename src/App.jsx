import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Otp from "./components/Otp"
import CourseCard from "./components/CourseCard"
import Pagination from "./components/Pagination"



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
    , {
      path: "/pagination",
      element : <Pagination />
    }
  ])
  
  return <RouterProvider router={router} />
 
}

export default App
