
import { createRoot } from 'react-dom/client'
import './index.css'
import { createTheme, MantineProvider } from '@mantine/core';
import App from './App.tsx';
import {setupStore} from './store/store';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router';
import '@mantine/core/styles.css';
const store = setupStore();
const theme = createTheme({
    primaryColor: 'primary',
    primaryShade: 7,
    colors: {
        primary: [
           '#edf2ff',
            '#dbe4ff',
            '#bac8ff',
            '#91a7ff',
            '#748ffc',
            '#5c7cfa',
            '#4c6ef5',
            '#4263eb',
            '#3b5bdb',
            '#364fc7',
        ],
    },
});

createRoot(document.getElementById('root')!).render(
      <BrowserRouter>
      <Provider store = {store}>
      <MantineProvider theme={theme}>
    <App />
      </MantineProvider>
      </Provider>
      </BrowserRouter>
)
