export const SvgIcon = props => {
    const {
        path,
        width = '1em',
        height = '1em',
        viewBox = "0 0 20 20"
    } = props;

    return (
        <svg viewBox={viewBox} fill="currentColor" width={width} height={height}>
            {path}
        </svg>
    )
}