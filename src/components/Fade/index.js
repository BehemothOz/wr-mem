import { cloneElement } from 'react';
import { Transition } from 'react-transition-group';

/*
    Link: https://reactcommunity.org/react-transition-group/transition
*/

/*
    note the onEnter callback, accessing offsetHeight | scrollTop to reflow the browser
*/

const defaultStyle = {};
const transitionStyles = {
    entering: {},
    entered: {},
    exiting: {},
    exited: {},
};

export const reflow = node => node.scrollTop;

export const Fade = ({ in: inProp, children, timeout }) => (
    <Transition in={inProp} timeout={timeout} unmountOnExit onEnter={node => reflow(node)}>
        {(state, childProps) => {
            return cloneElement(children, {
                style: {
                    ...defaultStyle,
                    ...transitionStyles[state],
                    zIndex: -1,
                },
                ...childProps,
            });
        }}
    </Transition>
);
