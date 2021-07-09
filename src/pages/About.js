import { Layout } from '../components/Layout';
import { Link } from '../router/Link';
import { routes } from '../routes';

export const About = () => {
    return (
        <Layout>
            <p className="text-red-500">About</p>
            <Link to={routes.home.path}>Go to home</Link>
        </Layout>
    );
};
