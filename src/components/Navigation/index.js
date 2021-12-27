import { Link } from '../../router/Link';
import { routes } from '../../routes';

export const Navigation = () => {
    return (
        <nav>
            <Link to={routes.home.path}>Home</Link>
            <Link to={routes.about.path}>About</Link>
        </nav>
    );
};
