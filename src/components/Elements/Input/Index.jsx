import { forwardRef } from "react"
import Input from "./Inputt"
import Label from "./LabelForm"

const InputForm = forwardRef((props, ref) => {
  const { type, placeholder, name, label } = props;
  return (
    <div className="mb-4">
      <Label htmlFor={name}>{label}</Label>
      <Input 
        type={type} 
        placeholder={placeholder} 
        name={name} 
        id={name} 
        ref={ref}
      />
    </div>
  )
})

export default InputForm