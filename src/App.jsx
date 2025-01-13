import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Sidebar from "./components/Sidebar"
import WicardManagement from "./components/WicardManagement"
import WicardIndividual from "./components/WicardIndividual"
import ProfilePage from "./components/ProfilePage"

function App() {
  const divstyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    margin: '0 auto',
  }

  return (
    <>
        <Router>
            <div>
              <nav>
                <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
                  <li>
                      <Link to="/contact">Contact</Link>
                  </li>
                </ul>
                </nav>

                <Routes>
                    <Route path="/" element={
                      <div style={divstyle}>
                      <Sidebar />
                      <WicardManagement />
                    </div>
                      } />
                    <Route path="/about" element={
                      <div style={divstyle}>
                      <Sidebar />
                      <WicardIndividual />
                    </div>
                      } />
                    <Route path="/contact" element={
                      <div style={divstyle}>
                      <Sidebar />
                      <ProfilePage />
                    </div>} />
                </Routes>
            </div>
        </Router>

    </>
  )
}

export default App
