import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ToolboxProvider } from './services';
import { Home } from './pages';
import { Footer, Header } from './components';

import 'bootstrap/dist/css/bootstrap.min.css';
import './_sass/_index.scss';

const App = () => {
  return (
    <ToolboxProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </ToolboxProvider>
  )
}

export default App;
