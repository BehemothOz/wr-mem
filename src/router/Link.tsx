import React from 'react';
import { useRouter, history } from './Router';

type Props = {
    to: string;
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
};

export const Link = ({ to, children, onClick, ...props }: Props) => {
    const { route } = useRouter();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();

        if (route.path === to) return;

        onClick && onClick(e);
        history.push(to);
    };

    return (
        <>
            <a {...props} onClick={handleClick}>
                {children}
            </a>
        </>
    );
};
