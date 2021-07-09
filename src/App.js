import { lazy, Suspense } from 'react';
// import { RouterProvider } from './router/Router';
// import { Route } from './router/Route';
// import { routes } from './routes';

const Some = lazy(() => import('.Some').then(module => ({ default: module.Some })));
// const About = lazy(() => import('./pages/About'));

console.log(Home)

const App = () => {
    return (
            <Suspense fallback={<div>Загрузка...</div>}>
                <Home />
                {/* <RouterProvider>
                    <Route path={routes.home.path} component={<Home />} />
                    <Route path={routes.about.path} component={<About />} />
                </RouterProvider> */}
            </Suspense>
    );
};

export default App;
