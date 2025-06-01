import AuthForm from '../components/auth/AuthForm';

export default function SignupPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      <AuthForm type="signup" />
    </div>
  );
}
