function Text({ header, subheader, textcopy }) {
    return (
        <div>
            {header && <h1>{header}</h1>}
            {subheader && <h3>{subheader}</h3>}
            {textcopy && <p>{textcopy}</p>}
        </div>
    );
}

export default Text;
