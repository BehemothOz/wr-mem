import React, { createContext, useContext, useLayoutEffect, useMemo, useState } from "react";
import { createBrowserHistory, Location, State } from "history";
import { locationToRoute } from "./utils";

type Props = {
    children: React.ReactNode;
};

const history = createBrowserHistory();

export const RouterContext = createContext({
    route: locationToRoute(history),
});

const RouterProvider = ({ children }: Props) => {
    console.log(children)
    const [route, setRoute] = useState(locationToRoute(history));
    console.log('RouterProvider', route)
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

    const memoRoute = useMemo(() => ({
        route
    }), [route]);

    return (
        <RouterContext.Provider value={memoRoute}>
            {children}
        </RouterContext.Provider>
    );
};

const useRouter = () => useContext(RouterContext);

export { useRouter, RouterProvider, history };
