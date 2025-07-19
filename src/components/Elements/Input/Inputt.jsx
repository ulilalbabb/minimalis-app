import { forwardRef, useContext } from "react";
import { DarkMode } from "../../../context/DarkMode";

const Input = forwardRef((props, ref) => {
  const { type, placeholder, name } = props;
  const {isDarkMode} = useContext(DarkMode)

  return (
    <input 
        type={type} 
        className={`text-sm border rounded-md w-full py-2 px-3 text-slate-700 placeholder:opacity-50 ${isDarkMode && "bg-slate-800 text-white placeholder:opacity-60"}`} 
        placeholder={placeholder} 
        name={name} 
        id={name} 
        ref={ref}
    />
  )
})

export default Input;
