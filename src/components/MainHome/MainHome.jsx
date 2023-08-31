import FotoHome from '../../assets/home.png'
import FotoHomeP from '../../assets/homeP.png';
import { EdDevCard } from '../../components/Card/EdDevCard';
import { Grid, Typography} from '@mui/material';

export const MainHomeDesktop = () => {
    return (
        
        <section>
            <Grid 
            container
            spacing={2}
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            mt={9}
            >
                <Grid item xs={12}>
                    <item>
                        <Typography variant='h3'component="h1" align='center'>
                            ARCOMRED
                        </Typography>
                    </item>
                </Grid>
                <Grid item xs={12} justifyItems={'center'}>
                    <item>
                        <img src={FotoHome} alt='Arcomred'></img>        
                    </item>
                </Grid>
                <Grid item xs={12}>
                    <item>
                        <Typography variant="h5" component="h2" align='center'>
                            Soluciones Integrales a Domicilio
                        </Typography>        
                    </item>
                </Grid>
                
            </Grid>
            <Grid 
                container
                spacing={2}
                direction={'row'}
                justifyContent={'center'}
                mt={3} >
            <Grid item xs={4}>
                    <item>
                        <EdDevCard></EdDevCard>               
                    </item>
                </Grid>
                <Grid item xs={4}>
                    <item>
                        <EdDevCard></EdDevCard>       
                    </item>
                </Grid>
                <Grid item xs={4}>
                    <item>
                        <EdDevCard></EdDevCard>       
                    </item>
                </Grid>
            </Grid>

        </section>
        
    )
}

export const MainHomeMobile = () => {
    return(
        
        <section>
            <Grid
            container
            spacing={1}
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            mt={3}
            >
                <Grid item xs='12'>
                    <item>
                        <Typography variant='h3'component="h1" align ='center'>
                            ARCOMRED
                        </Typography>
                    </item>
                </Grid>
                <Grid item xs='12'>
                    <item>
                        <img src={FotoHomeP} alt='Arcomred'></img>
                    </item>
                </Grid>
                <Grid item xs='12'>
                    <item>        
                        <Typography variant="h5" component="h2" align='center'>
                            Soluciones Integrales a Domicilio
                        </Typography>
                    </item>
                </Grid>
                <Grid item xs='12'>
                    <item>        
                    <EdDevCard></EdDevCard>        
                    </item>
                </Grid>
                <Grid item xs='12'>
                    <item>        
                    <EdDevCard></EdDevCard>
                    </item>
                </Grid>
                <Grid item xs='12'>
                    <item>        
                    <EdDevCard></EdDevCard>
                    </item>
                </Grid>

            </Grid>

        </section>
        
    )
}