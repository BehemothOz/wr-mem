const data = [
    { id: 1, original: 'original 1', translate: 'translate 2' },
    { id: 2, original: 'original 2', translate: 'translate 3' },
]

export const Home = () => {
    return (
        <ul className="p-3">
            {data.map(item => {
                const { id, original, translate } = item;

                return <li key={id}>{original} | {translate}</li>
            })}
        </ul>
    );
};
