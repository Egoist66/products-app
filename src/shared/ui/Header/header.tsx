import {Button, Container, Flex, Image} from "@mantine/core";
import {Link} from "react-router";
import {observer} from "mobx-react-lite";
import {useAuth} from "../../hooks/auth/use-auth";

import moon from '../../../assets/icons/moon.svg';
import sun from '../../../assets/icons/sun.svg';
import { useTheme } from "../../hooks/theme/use-theme";


export const Header = observer(() => {
    const {handleLogOut, isAuthenticated} = useAuth();
    const {theme, toggleTheme} = useTheme()

    return isAuthenticated && (
        <header className='header'>
            
            <Container size='xl'>
                <nav>
                    <Flex justify='space-between' wrap={'wrap'}>

                        <Button title={theme === 'dark' ? 'switch to light theme' : 'switch to dark theme'} onClick={toggleTheme}>
                            <Image fit="cover" style={{ filter: 'invert(1)' }} src={theme === 'dark' ? sun : moon} />
                        </Button>

                        <ul>
                            <Flex align='center'
                                gap={20}>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>


                                <li>
                                    <Button onClick={handleLogOut}>
                                        Logout
                                    </Button>
                                </li>

                            </Flex>
                        </ul>
                    </Flex>
                </nav>
            </Container>
        </header>
    )
});
