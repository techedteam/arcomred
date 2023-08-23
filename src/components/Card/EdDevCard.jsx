import {Box, Card, CardContent, CardActions, Typography, Button, CardMedia} from '@mui/material';


export const EdDevCard = () => {
    return(
        <Box width='300px'>
            <Card>
                <CardMedia component='img' image='https://source.unsplash.com/random' height={140}>
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant='h5'>Red</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Mas..</Button>
                </CardActions>
            </Card>
        </Box>
    )
}