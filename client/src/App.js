import React from 'react';
import Nav from './Components/Nav/Nav';
import navStore from './State/nav.reducer';
import './App.scss';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
import Transition from './Components/Transition/Transition';

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
      <div className="wrapper">
        <div onClick={() => navStore.dispatch({ type: 'toggle' })} className={this.state.open ? 'menu open' : 'menu'}>
          <i className={`fas ${this.state.open ? 'fa-times' : 'fa-bars'}`}></i>
        </div>

        <main>
          <div className="content">
            <RouterSwitch></RouterSwitch>
          </div>
        </main>
      </div>
    );
  }
}

function RouterSwitch() {
  return (
    <Transition>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/projects" component={Projects} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </Transition>
  );
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
