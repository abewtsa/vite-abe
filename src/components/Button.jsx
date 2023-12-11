function Button({ buttonText, buttonLink, backgroundColor, color, buttonFunc, buttonClassName, padding }) {
    const style = {
        color: color,
        backgroundColor: backgroundColor,
        padding: padding,
    };

    let insertButtonClass

    //defining variable by passing props changes the variable into an object,
    //hence when using insertButtonClass={buttonClassName},
    //needs you to pass the object specific value: insertButtonClass.buttonClassName
    //instead of just the variable insertButtonClass

    if (buttonClassName==null){
        insertButtonClass="element-none"
    }
    else{
        insertButtonClass=buttonClassName
    }
    
    return (
        <a href={buttonLink}>
        <button 
        className={insertButtonClass} 
        style={style} 
        onClick={buttonFunc}>
        {buttonText}
        </button>
        </a>
    );
}
export default Button;