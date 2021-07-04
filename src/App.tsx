import "./App.css";

import { RouterProvider } from "./router/Router";
import { Route } from "./router/Route";
import { Link } from "./router/Link";

import { routes } from "./router/routes";

const Home = () => {
  console.count('Home')
    return (
        <>
            <p>Homepage</p>
            <Link to={routes.about.path}>Go to about</Link>
        </>
    );
};

const About = () => {
  console.count('About')
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
            <div style={{ width: 400, backgroundColor: "lightgreen" }}>
                <Route path={routes.home.path}>
                    <Home />
                </Route>
                <Route path={routes.about.path}>
                    <About />
                </Route>
            </div>
        </RouterProvider>
    );
}

export default App;
