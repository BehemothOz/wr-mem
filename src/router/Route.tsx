import { useRouter } from './Router';

type Props = {
    path: string;
    component: React.ReactNode;
};

export const Route = ({ path, component }: Props) => {
    const { route } = useRouter();

    // if path doesn't match the current route path
    if (route.path !== path) return null;

    return <>{component}</>;
};
