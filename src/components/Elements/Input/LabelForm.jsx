import { useContext } from "react"
import { DarkMode } from "../../../context/DarkMode"

const Label = (props) => {
    const { htmlFor, children } = props
    const {isDarkMode} = useContext(DarkMode)

      return (
        <label 
          htmlFor={htmlFor} 
          className={`block text-sm font-bold mb-2 text-slate-700 ${isDarkMode && "text-white"}`}>
            {children}
        </label>
      )  
}

export default Label