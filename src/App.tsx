import { RouterProvider } from './router/Router';
import { Route } from './router/Route';
import { Link } from './router/Link';

import { routes } from './routes';

const Home = () => {
    return (
        <>
            <p className="text-blue-500">Homepage</p>
            <Link to={routes.about.path}>Go to about</Link>
        </>
    );
};

const About = () => {
    return (
        <>
            <p className="text-red-500">About</p>
            <Link to={routes.home.path}>Go to home</Link>
        </>
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
