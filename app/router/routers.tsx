import React from 'react';
import {
    BrowserRouter,
  Routes,
  Route,
//   Switch,
  useLocation,
  useMatch,
  NavLink,
  Outlet
} from "react-router-dom";
import ReactDOM from "react-dom";

const Home = () => {
    return (
      <>
        <h2>Home eee</h2>
      </>
    );
  };
  
  const About = () => {
    return (
      <>
        <h2>About</h2>
      </>
    );
  };

  const Layout = () => {
    const style = ({ isActive }) => ({
      fontWeight: isActive ? 'bold' : 'normal',
    });
  
    return (
      <>
        <h1>React Router</h1>
  
        <nav
          style={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}
        >
          <NavLink to="home" style={style}>
            Home www
          </NavLink>
          <NavLink to="about" style={style}>
            About
          </NavLink>
        </nav>
  
        <main style={{ padding: '1rem 0' }}>
          <Outlet />
        </main>
      </>
    );
  };

export default function Routers() {
    return (
        <div className={'routers'}>
            <BrowserRouter>
                <Routes>
                    {/* <Route element={<Layout />}><Route/> */}
                    {/* <Route ><Route /> */}
                        {/* <Route index element={<Home />} /> */}
                        <Route path='home' element={<Home />} />
                        <Route path='about' element={<About />} />
                        {/* <Route path='a' element={<h2>About</h2>} /> */}
                        {/* <Route path='/abc' element={<h2>Home</h2>} /> */}
                    {/* <Route/> */}
                </Routes>
            </BrowserRouter>
        </div>
    )
}
