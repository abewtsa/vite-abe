function Link(props) {

    const { linkText, link, linkClassName } = props;

    const insertClassName = linkClassName || 'element-none';
    return (
        <>
        <a target="_blank" href={link} rel="noreferrer">
        <p className={insertClassName}>{linkText}</p>
        </a>
        </>
    );
}

export default Link;
