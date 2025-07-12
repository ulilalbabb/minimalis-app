const Button = (props) => {
    const { 
        children, 
        variant, 
        type = "button", 
        onClick = () => {}
        } = props;
    return (
        <button 
            className={`h-10 rounded-lg text-white cursor-pointer ${variant}`}
            type={type}
            onClick={onClick}
            >
                {children}
        </button>
    )
}

export default Button