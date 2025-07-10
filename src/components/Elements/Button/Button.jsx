const Button = (props) => {
    const { children, variant } = props;
    return (
        <button 
            className={`h-10 px-6 rounded-lg text-white cursor-pointer ${variant}`}
            type="submit"
            >
                {children}
        </button>
    )
}

export default Button