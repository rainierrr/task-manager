import * as React from "react"
import { render } from "react-dom"
import App from './App'
import { ThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import theme from './theme'
import store from './store'
import CssBaseline from '@material-ui/core/CssBaseline'

function Root(){
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Provider store={store}>
            <App />
          </Provider>,
      </ThemeProvider>
    </div>
  );
}

render(<Root />, document.getElementById("root"));