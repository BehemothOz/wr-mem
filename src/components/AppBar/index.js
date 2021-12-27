import cn from 'classnames';

export const AppBar = props => {
    const { className = '', as = 'div', children } = props;

    const Tag = as;

    return (
        <>
            <Tag className={cn('sticky top-0 w-full h-14 p-3 text-white bg-red-500', className)}>
                {children}
            </Tag>
        </>
    );
};
