import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home.jsx"
import About from "../pages/About.jsx"
import Contact from "../pages/Contact.jsx"
import Student from "../pages/Student.jsx"

const MyRouter = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about-us" element={<About />}></Route>
            <Route path="/contact-us" element={<Contact />}></Route>
            <Route path="/student" element={<Student />}></Route>
        </Routes>
    )
}

export default MyRouter