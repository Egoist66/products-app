import {Button, Container, Flex} from "@mantine/core";
import {Link} from "react-router";
import {observer} from "mobx-react-lite";
import {useAuth} from "../../lib/auth/use-auth";

export const Header = observer(() => {
    const {handleLogOut, isAuthenticated} = useAuth();

    return isAuthenticated && (
        <header className='header'>
            <Container size='xl'>
                <nav>
                    <Flex justify='end'>
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
