import FotoHome from '../assets/home.png';
import { EdDevCard } from '../components/Card/EdDevCard';
import { Box, Typography } from '@mui/material';

export default function Index() {
    return (
        <main>
            <section>
                <Box sx={{alignContent:'center'}}>
                    <Typography variant='h3'component="h1" align='center'>
                        ARCOMRED
                    </Typography>
                    
                    <img src={FotoHome} alt='Arcomred'></img>
                    <Typography variant="h5" component="h2" align='center'>
                        Soluciones Integrales a Domicilio
                    </Typography>
                        
                    

                </Box>

            <Box sx={{display:'inline-flex', gap:2}}>
                <EdDevCard></EdDevCard><EdDevCard></EdDevCard><EdDevCard></EdDevCard>
            </Box>
            

            </section>
      </main>
    );
}