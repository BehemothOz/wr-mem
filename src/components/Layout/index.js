import { AppBar } from '../AppBar';
import { Navigation } from '../Navigation';

export const Layout = props => {
    return (
        <>
            <AppBar as="header">
                <Navigation />
            </AppBar>
            <main>
                {props.children}
            </main>
        </>
    );
};
