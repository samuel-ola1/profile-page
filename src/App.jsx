import {BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App


{/* <main>
        <Header />
        <LinksSection />
        <div className="social__logos">
            <div><img src={slackIcon} alt="slack icon" /></div>
            <div><img src={githubIcon} alt="github icon" /></div>
        </div>
        <Footer />
    </main> */}