import Button from '../Elements/Button/Button.jsx'
import InputForm from '../Elements/Input/Index.jsx'

const FormRegister = () => {
    return (
        <form action="">
            <InputForm 
                label='FullName' 
                name='fullname' 
                type='text' 
                placeholder='insert your name'
            />
            <InputForm 
                label='Email' 
                name='email' 
                type='email' 
                placeholder='example@mail.com'
            />
            <InputForm 
                label='Password' 
                name='password' 
                type='password' 
                placeholder='********'
            />
            <InputForm 
                label='Confirm Password' 
                name='confirmPassword' 
                type='password' 
                placeholder='********'
            />
            <Button variant='bg-amber-950 text-white w-full py-1 hover:bg-amber-800'>Register</Button>
        </form>
    )
}

export default FormRegister