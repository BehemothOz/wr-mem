import { RouterProvider } from './router/Router';
import { Route } from './router/Route';
import { Link } from './router/Link';

import { routes } from './routes';

const Home = () => {
    return (
        <>
            <p>Homepage</p>
            <Link to={routes.about.path}>Go to about</Link>
        </>
    );
};

const About = () => {
    return (
        <>
            <p>About</p>
            <Link to={routes.home.path}>Go to home</Link>
        </>
    );
};

function App() {
    return (
        <RouterProvider>
            <Route path={routes.home.path}>
                <Home />
            </Route>
            <Route path={routes.about.path}>
                <About />
            </Route>
        </RouterProvider>
    );
}

export default App;
