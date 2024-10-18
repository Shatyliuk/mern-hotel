import { LoginForm } from "@/components/shared/LoginForm";

const LoginPage = () => {
  return (
    <div className="continaer mx-auto">
      <h2 className="text-5xl font-bold mb-8">Sign in</h2>

      <LoginForm />
    </div>
  );
};

export default LoginPage;
