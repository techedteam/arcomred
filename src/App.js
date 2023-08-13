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
import NavBar from './components/navBar/NavBar';
import { Container } from '@mui/material';

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
  return (
      <BrowserRouter>
        <NavBar navArrayLinks={navArrayLinks}></NavBar>
        <Container>
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
