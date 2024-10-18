import { RegisterForm } from "@/components/shared/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="continaer mx-auto">
      <h2 className="text-5xl font-bold mb-8">Create an account</h2>

      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
