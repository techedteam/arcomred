import './App.css';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ResponsiveAp from './MenuAppBar'


function App() {
  return (
    <div className="App">
      <Container>
        <header>
          <ResponsiveAp></ResponsiveAp> 
        </header>
      </Container>
      <main>
        <section>
          <h1>
            ARCOMRED 
          </h1>
          <h3>
            Soluciones Integrales a Domicilio
          </h3>
          <Button variant="outlined">Sigueme</Button>


        </section>
      </main>
    </div>
  );
}

export default App;
