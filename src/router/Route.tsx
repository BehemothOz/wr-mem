import React, { useContext } from "react";
import { RouterContext } from "./Router";

type Props = {
    children: React.ReactNode;
    path?: string;
};

export function Route({ path, children }: Props) {
    const { route } = useContext(RouterContext);

    // if path doesn't match the current route path
    if (route.path !== path) return null;

    return <>{children}</>;
}
