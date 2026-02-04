import {createRoot} from 'react-dom/client';
import {App} from './app/App';
import {BrowserRouter} from 'react-router';

import '@mantine/core/styles.css';
import './app/style/main.scss';


createRoot(document.getElementById('root')!).render (

    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
