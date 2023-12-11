function Link({linkText, link, linkClassName}) {
    
    let insertClassName

    if (linkClassName==null){
        insertClassName="element-none"
    }
    else{
        insertClassName=linkClassName
    }

    return (
            <a href={link}>
            <p className={insertClassName}>{linkText}</p>
            </a>
    );
}
export default Link;