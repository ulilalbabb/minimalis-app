import FormLogin from "../components/Fragments/FormLogin"
import FormRegister from "../components/Fragments/FormRegister"
import AuthLayouts from "../components/Layouts/AuthLayouts"

const RegisterPage = () => {
    return (
        <AuthLayouts title="Register">
            <FormRegister />
        </AuthLayouts>
    )
}

export default RegisterPage