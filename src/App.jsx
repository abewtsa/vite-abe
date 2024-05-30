import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Layout from "./pages/Layout.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Cheatsheet from "./pages/Cheatsheet.jsx";
import "./css/app.css";

// import Navbar from "./components/Header/SimpleHeader/navbar.jsx";

function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.gstatic.com/" />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "95vh",
          overflow: "hidden",
          zIndex: "0",
        }}
      >
        <BrowserRouter>
          {/* <Navbar /> */}

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<About />} />
              <Route path="cheatsheet" element={<Cheatsheet />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

      <footer>Built with React + Vite</footer>
    </>
  );
}

export default App;

{
  /*

VITA 0.1 Documentations

README
------------------------------------
Built with Vite and React, how to use
1. Install stack with npm, list below
2. Create or modify page jsx and add Components or Pages, add Props to access Components
3. Styling handled in App.css with SASS
4. React router for single page simulation, virtual DOM loading of pages
5. Use MUI for complete Boilerplate version - or overwrite with own custom styling
6. Future design system variant from Boilerplate version


STACK
------------------------------------
1. React
2. Vite
3. MUI
4. SASS
5. React Router

TO DO & CHANGELOG
------------------------------------
v.01
Add MUI
Add SASS
Complete menu
[v] add page routing
[v] responsive mobile menu header
[v] change mobile logo to burger or icon
[v] Blog component
Add content manually
Content editing with mdx like Gatsby

v.02
Tags
Dark mode switcher
https://betterprogramming.pub/a-complete-guide-to-implementing-dark-mode-in-react-47af893b22eb
Look into Hooks
Look into emotion
Look into fixing jsx vs tsx syntax conflicts
Create batch npm installation
Add documentaion mdx
Upload to Github

v.03
Create Design System version using MUI

*/
}
