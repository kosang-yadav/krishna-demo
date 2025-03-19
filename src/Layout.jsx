import {Outlet} from 'react-router-dom'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
// import Header from './Header/Header.js'
// import Footer from './Footer/Footer.js'



export default function Layout(){

    return(
    <>
        <Header />
        <Outlet />
        <Footer />  
    </>
    )
}