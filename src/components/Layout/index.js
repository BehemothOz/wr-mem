import { AppBar } from '../AppBar';

export const Layout = props => {
    return (
        <div>
            <AppBar as="header">OMG!</AppBar>
            {props.children}
        </div>
    );
};
