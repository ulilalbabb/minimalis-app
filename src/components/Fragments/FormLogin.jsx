import { useEffect, useRef, useState } from 'react'
import Button from '../Elements/Button/Button.jsx'
import InputForm from '../Elements/Input/Index.jsx'
import { login } from '../../services/auth-servise.js'

const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()

        const data = {
            username: e.target.username.value,
            password: e.target.password.value 
        }
        login(data, (status, res) => {
            if(status) {
                localStorage.setItem("token", res)
                window.location.href = "/"
            } else {
                setLoginFailed(res.response.data)
                console.log(res)
            }
        })
    }

    const usernameRef = useRef(null)

    useEffect(() => {
        usernameRef.current.focus()
    }, [])

    return (
        <form onSubmit={handleLogin}>
            <InputForm 
                label='Username' 
                name='username' 
                type='text' 
                placeholder='example@mail.com'
                ref={usernameRef}
            />
            <InputForm 
                label='Password' 
                name='password' 
                type='password' 
                placeholder='********'
            />
            <Button variant='bg-amber-950 text-white w-full py-1 hover:bg-amber-800' type='submit'>Login</Button>
            {loginFailed && <p className="text-red-600 text-sm mt-2 text-center">{loginFailed}</p>}
        </form>
    )
}

export default FormLogin