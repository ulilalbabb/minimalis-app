import Button from '../Elements/Button/Button.jsx'
import InputForm from '../Elements/Input/Index.jsx'

const FormLogin = () => {
    const handleLogin = (e) => {
        e.preventDefault()
        localStorage.setItem("email", e.target.email.value)
        localStorage.setItem("password", e.target.password.value)
        window.location.href = "/products"
    }
    return (
        <form onSubmit={handleLogin}>
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
            <Button variant='bg-blue-600 w-full' type='submit'>Login</Button>
        </form>
    )
}

export default FormLogin