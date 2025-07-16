import { useLogin } from "../hooks/useLogin"

const ProfilePage = () => {
    const usename = useLogin()
    return (
        <div>
            <h1>Profile Page</h1>
            <p>username : {usename}</p>
        </div>
    )
}

export default ProfilePage