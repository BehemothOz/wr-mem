import { RouterProvider } from './router/Router';
import { Route } from './router/Route';
import { Link } from './router/Link';

import { AppBar } from './components/AppBar/AppBar';

import { routes } from './routes';

const Layout = (props: any) => {
    return (
        <div>
            <AppBar as="header">
                OMG!
            </AppBar>
            {props.children}
        </div>
    )
}

const Home = () => {
    return (
        <Layout>
            <p className="text-blue-500">Homepage</p>
            <Link to={routes.about.path}>Go to about</Link>
        </Layout>
    );
};

const About = () => {
    return (
        <Layout>
            <p className="text-red-500">About</p>
            <Link to={routes.home.path}>Go to home</Link>
        </Layout>
    );
};

const App = () => {
    return (
        <RouterProvider>
            <Route path={routes.home.path} component={<Home />} />
            <Route path={routes.about.path} component={<About />} />
        </RouterProvider>
    );
};

export default App;
