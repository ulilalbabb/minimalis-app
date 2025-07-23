const Button = (props) => {
    const { 
        children, 
        variant, 
        type = "button", 
        onClick = () => {}
        } = props;
    return (
        <button 
            className={`rounded-lg cursor-pointer ${variant}`}
            type={type}
            onClick={onClick}
            >
                {children}
        </button>
    )
}

export default Button