import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import 'assets/langs/i18n';

const Language = loadable(() => import('pages/language'));
const NotFound = loadable(() => import('pages/404'));

const Root: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Language} />
                {/* <Route path={['/write/:post', '/write']} component={Write} /> */}
                <Route path="/404" component={NotFound} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default Root;
