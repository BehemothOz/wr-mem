import { RouterProvider } from './router/Router';
import { Route } from './router/Route';

import { Home } from './pages/Home';
import { About } from './pages/About';

import { routes } from './routes';

const App = () => {
    return (
        <RouterProvider>
            <Route path={routes.home.path} component={<Home />} />
            <Route path={routes.about.path} component={<About />} />
        </RouterProvider>
    );
};

export default App;
