import './App.css';

import {Route, Routes, BrowserRouter} from 'react-router-dom';

import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import HomeIcon from '@mui/icons-material/Home';


import Home from './pages/index';
import Servicios from './pages/servicios';
import Nosotros from './pages/nosotros';
import Contacto from './pages/contacto';
import { NavBarMobile, NavBarDesktop } from './components/navBar/NavBar';
import { Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const navArrayLinks=[
  {
      title:"Inicio", path:"/", icon:<HomeIcon/>
  },
  {
      title:"Nosotros", path:"/nosotros", icon:<Diversity3Icon/>
  },
  {
      title:"Servicios", path:"/servicios", icon:<ElectricalServicesIcon/>
  },
  {
      title:"Contacto", path:"/contacto", icon:<ContactPageIcon/>
  },
]






function App() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));


  return (
      <BrowserRouter>
        {!matches && <NavBarDesktop navArrayLinks={navArrayLinks}></NavBarDesktop>}
        {matches && <NavBarMobile navArrayLinks={navArrayLinks}></NavBarMobile>}
        
        <Container maxWidth="sm">
          <Routes>
            
            <Route path='/' element={<Home />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/servicios' element={<Servicios />} />
            <Route path='/contacto' element={<Contacto />} />
            
          </Routes>
        </Container>
      </BrowserRouter>
  );
}

export default App;
