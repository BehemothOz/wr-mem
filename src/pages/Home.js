const data = [
    {
        id: 1,
        original: 'original 1',
        translate: 'translate 1',
        description: 'description 1',
    },
    {
        id: 2,
        original: 'original 2',
        translate: 'translate 2',
        description: 'description 2',
    },
];

export const Home = () => {
    return (
        <ul className="p-3">
            {data.map(item => {
                const { id, original, translate } = item;

                return (
                    <li key={id} className="mb-3 p-3 bg-white">
                        {original} | {translate}
                    </li>
                );
            })}
        </ul>
    );
};
