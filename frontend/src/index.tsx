import * as React from "react";
import { render } from "react-dom";
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import CssBaseline from '@material-ui/core/CssBaseline';

function Root(){
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </div>
  );
}

render(<Root />, document.getElementById("root"));