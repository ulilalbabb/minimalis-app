import Input from "./Inputt"
import Label from "./LabelForm"

const InputForm = (props) => {
    const { label, name, type, placeholder } = props
    return(
        <div className='mb-6'>
            <Label 
                htmlFor={name}>
                    {label}
            </Label>
            <Input 
                name={name} 
                type={type} 
                placeholder={placeholder}
            />   
        </div>
    )
}

export default InputForm