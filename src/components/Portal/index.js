import { useState } from 'react';

/*
    ! add disablePortal prop
    ! add ref (with forwardRef)
*/

function getContainer(container) {
    return typeof container === 'function' ? container() : container;
}

export const Portal = props => {
    const { children, container } = props;
    const [mountNode, setMountNode] = useState(null);

    /*
        Warn! Not work if SSR (ex. NextJs)

        if window useLayoutEffect else useEffect
    */
    useLayoutEffect(() => {
        setMountNode(getContainer(container) || document.body);
    }, [container]);

    return mountNode ? createPortal(children, mountNode) : mountNode;
};
