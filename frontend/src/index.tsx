import * as React from "react"
import { render } from "react-dom"
import App from './App'
import { ThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import theme from './theme'
import store from './store'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import LineForm from './LineForm/index'


function Root(){
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route exact path='/' component={App} />
                <Route exact path='/line' component={LineForm} />
              </Switch>
            </BrowserRouter>
          </Provider>,
      </ThemeProvider>
    </div>
  );
}

render(<Root />, document.getElementById("root"));