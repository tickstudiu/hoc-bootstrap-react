import LoginPage from '../pages/Login';
import HomePage from '../pages/Home';
import RegisterPage from '../pages/Register';
import SearchPage from '../pages/Search';

import {PrivateRoute} from './hoc/private';
import {AuthRoute} from './hoc/auth';

const indexRoutes = [
    {
        name: 'login page',
        path: '/',
        component: AuthRoute(LoginPage),
    },
    {
        name: 'login page',
        path: '/login',
        component: AuthRoute(LoginPage),
    },
    {
        name: 'home page',
        path: '/home',
        component: PrivateRoute(HomePage),
    },
    {
        name: 'register page',
        path: '/register',
        component: AuthRoute(RegisterPage),
    },
    {
        name: 'search page',
        path: '/search',
        component: PrivateRoute(SearchPage),
    },
    {
        name: 'search page',
        path: '/search/page/:page',
        component: PrivateRoute(SearchPage),
    },
    {
        name: 'search page',
        path: '/search/:word',
        component: PrivateRoute(SearchPage),
    },
    {
        name: 'search page',
        path: '/search/:word/page/:page',
        component: PrivateRoute(SearchPage),
    },
];


export default indexRoutes;