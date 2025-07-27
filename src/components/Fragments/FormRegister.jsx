import Button from '../Elements/Button/Button.jsx'
import InputForm from '../Elements/Input/Index.jsx'
import { useState } from 'react'

const FormRegister = () => {
    const [email, setEmail] = useState("") 
    const [password, setPassword] = useState("") 
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleRegister = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleRegister}>
            {/* <ToastContainer></ToastContainer> */}
            <InputForm 
                label='Email' 
                name='email' 
                type='email' 
                placeholder='example@mail.com'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <InputForm 
                label='Password' 
                name='password' 
                type='password' 
                placeholder='********'
                onChange={(e) => setPassword(e.target.value)}
                value={password}

            />
            <InputForm 
                label='Confirm Password' 
                name='confirmPassword' 
                type='password' 
                placeholder='********'
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
            />
            <Button 
                type='submit'
                variant='bg-amber-950 text-white w-full py-1 hover:bg-amber-800'>
                    Register
            </Button>
        </form>
    )
}

export default FormRegister