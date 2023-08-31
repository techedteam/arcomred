import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { MainHomeMobile, MainHomeDesktop } from '../components/MainHome/MainHome';


export default function Index() {
    const theme = useTheme();
    const matches =useMediaQuery(theme.breakpoints.down("md"));

    return (

        <main>
            {!matches && <MainHomeDesktop></MainHomeDesktop>}
            {matches && <MainHomeMobile></MainHomeMobile>}
        </main>
    );
}