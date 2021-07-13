import { lazy, Suspense } from 'react';
import { Layout } from './components/Layout';
import { RouterProvider } from './router/Router';
import { Route } from './router/Route';
import { routes } from './routes';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));

console.log(Home);

const App = () => {
    return (
        <RouterProvider>
            <Layout>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <Route path={routes.home.path} component={<Home />} />
                    <Route path={routes.about.path} component={<About />} />
                </Suspense>
            </Layout>
        </RouterProvider>
    );
};

export default App;
