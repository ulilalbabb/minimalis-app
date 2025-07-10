import FormLogin from "../components/Fragments/FormLogin";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <AuthLayouts title="Login">
      <FormLogin />
      <p className="text-slate-500 text-sm mt-2 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 font-bold">
          Sign Up
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default LoginPage;
