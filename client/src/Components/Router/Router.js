import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function Router(props) {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
                <Route path="/" component={props.Home} exact />
                <Route path="/about" component={props.About} exact />
                <Route path="/projects" component={props.Projects} exact />
                <Route path="/contact" component={props.Contact} exact />
            </Switch>
        </AnimatePresence>
    );
}

export default Router;