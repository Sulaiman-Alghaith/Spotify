import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

interface Props {
  type: 'login' | 'signup';
}

export default function AuthForm({ type }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(`http://localhost:3000/${type}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      return res.json();
    },
    onSuccess: (data) => {
      console.log(`${type} success`, data);
      // dispatch(login(data.user)) مثلاً
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutation.mutate();
      }}
      className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md"
    >
      <h2 className="text-2xl font-bold mb-6">{type === 'login' ? 'Login' : 'Sign Up'}</h2>
      <input
        type="email"
        placeholder="Email"
        className="w-full mb-4 p-2 rounded bg-gray-700 text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full mb-4 p-2 rounded bg-gray-700 text-white"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded"
      >
        {type === 'login' ? 'Login' : 'Sign Up'}
      </button>
    </form>
  );
}
