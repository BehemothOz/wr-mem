import { Layout } from '../components/Layout';
import { Link } from '../router/Link';
import { routes } from '../routes';

export const Home = () => {
    return (
        <Layout>
            <p className="text-blue-500">Homepage</p>
            <Link to={routes.about.path}>Go to about</Link>
        </Layout>
    );
};
