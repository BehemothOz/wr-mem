import React, { createContext, useContext, useLayoutEffect, useState } from 'react';
import { createBrowserHistory, Location, State } from 'history';
import { locationToRoute } from './utils';

type Props = {
    children: React.ReactNode;
};

const history = createBrowserHistory();

const RouterContext = createContext({
    route: locationToRoute(history),
});

const RouterProvider = ({ children }: Props) => {
    const [route, setRoute] = useState(() => locationToRoute(history));

    const handleRouteChange = (location: { location: Location<State> }) => {
        const route = locationToRoute(location);
        setRoute(route);
    };

    useLayoutEffect(() => {
        let unlisten = history.listen(handleRouteChange);
        return () => {
            unlisten();
        };
    }, []);

    return <RouterContext.Provider value={{ route }}>{children}</RouterContext.Provider>;
};

const useRouter = () => useContext(RouterContext);

export { useRouter, RouterProvider, history };
