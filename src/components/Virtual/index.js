import { useState } from 'react';

/*
    First attempt at implementing a virtual list
*/
export const Virtual = props => {
    const { data, visibleItems, itemHeight, item: Item } = props;

    const [start, setStart] = useState(0);

    const onScroll = event => {
        setStart(
            Math.min(
                data.length - visibleItems - 1,
                Math.floor(event.target.scrollTop / itemHeight)
            )
        );
    };

    const translateTop = () => {
        return start * itemHeight;
    };

    return (
        <div
            style={{ height: itemHeight * visibleItems }}
            className="overflow-y-scroll"
            onScroll={onScroll}
        >
            <div style={{ height: itemHeight * data.length }} className="overflow-hidden">
                <div style={{ transform: `translateY(${translateTop()}px)` }}>
                    {data.slice(start, visibleItems + start + 1).map((value, idx) => {
                        return <Item key={idx} value={value} />;
                    })}
                </div>
            </div>
        </div>
    );
};
