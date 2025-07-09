const Label = (props) => {
    const { htmlFor, children } = props
      return (
        <label 
            htmlFor={htmlFor} 
            className='block text-sm font-bold mb-2 text-slate-700'>
                {children}
        </label>
      )  
}

export default Label