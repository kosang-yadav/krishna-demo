import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import About from './Components/About/About.jsx'
import User from './Components/User/User.jsx'
import Github, { getInfoInLoader } from './Components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout />,
//     children: [
//       {
//         path : "",
//         element : <Home />
//       },
//       {
//         path : "Contact",
//         element : <Contact />
//       },
//       {
//         path : "About",
//         element : <About />
//       },
//       {
//         path : "User/:userId",
//         element : <User />
//       },
//       {
//         loader : getInfoInLoader,
//         path :"Github",
//         element : <Github />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
    createRoutesFromChildren(
      <Route path="/" element={<Layout />} >
        <Route path="" element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="About" element={<About />} />
        <Route path="User/:userId" element={<User />} />
        <Route path="Github" element={<Github />} loader={getInfoInLoader} />
      </Route>
    )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
