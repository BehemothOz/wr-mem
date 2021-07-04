import { useRouter } from './Router';

type Props = {
    path: string;
    children: React.ReactNode;
};

export const Route = ({ path, children }: Props) => {
    const { route } = useRouter();

    // if path doesn't match the current route path
    if (route.path !== path) return null;

    return <>{children}</>;
};
