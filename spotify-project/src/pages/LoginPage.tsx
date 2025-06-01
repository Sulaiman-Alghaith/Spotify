import AuthForm from '../components/auth/AuthForm';

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <AuthForm type="login" />
    </div>
  );
}
