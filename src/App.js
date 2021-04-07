import React, { Suspense } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Loader from './component/Loader'
import './App.css';

const Album = React.lazy(() => import('./component/Album.js'));


const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#9e9e9e',
      light: '#bdbdbd',
      dark: '#757575',
      contrastText: '#9e9e9e',
    },
  },
});

function App() {
  return (
    <Suspense fallback={<div><Loader /></div>}>
      <ThemeProvider theme={darkTheme}>
        <Album />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
