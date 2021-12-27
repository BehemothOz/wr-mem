const data = [
    { id: 1, original: 'original 1', translate: 'translate 2' },
    { id: 2, original: 'original 2', translate: 'translate 3' },
];

export const Home = () => {
    return (
        <ul className="py-2 px-3">
            {data.map(item => {
                const { id, original, translate } = item;

                return (
                    <li key={id} className="py-1">
                        <div className="p-3 bg-white">
                            <span className="block" style={{ fontWeight: 600 }}>{original}</span>
                            <span style={{ fontSize: 12 }}>{translate}</span>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
