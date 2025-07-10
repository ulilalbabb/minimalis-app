import FormRegister from "../components/Fragments/FormRegister";
import AuthLayouts from "../components/Layouts/AuthLayouts";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayouts title="Register">
      <FormRegister />
      <p className="text-slate-500 text-sm mt-2 text-center">
        Have an account?{" "}
        <Link to="/login" className="text-blue-600 font-bold">
          Login
        </Link>
      </p>
    </AuthLayouts>
  );
};

export default RegisterPage;
