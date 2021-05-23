import React from 'react';
import Nav from './Components/Nav/Nav';
import navStore from './State/nav.reducer';
import './App.scss';

import Home from './Pages/Home/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Projects';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

class Outlet extends React.Component {
  constructor(props) {
    super();
    this.state = { open: false };
  }

  componentDidMount() {
    navStore.subscribe(() => {
      this.setState({ open: navStore.getState().open })
    });
  }

  render() {
    return (
      <div className="container">
        <div onClick={() => navStore.dispatch({ type: 'toggle' })} className={`${this.state.open ? 'bars open' : 'bars'}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <main>
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/about" exact>
                <About />
              </Route>
              <Route path="/projects" exact>
                <Projects />
              </Route>
              <Route path="/contact" exact>
                <Contact />
              </Route>
            </Switch>
          </div>
        </main>
      </div >
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <Nav></Nav>
        <Outlet></Outlet>
      </BrowserRouter>
    );
  }
}

export default App;
