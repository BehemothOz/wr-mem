export const SvgIcon = props => {
    const { path } = props;

    return (
        <svg viewBox="0 0 20 20" fill="currentColor">
            {path}
        </svg>
    )
}