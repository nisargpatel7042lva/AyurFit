import React, { useState } from 'react';
import { Leaf, ArrowLeft, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { signIn } from '../utils/auth';

interface SignInProps {
  onBack: () => void;
  onSuccess: () => void;
  onSignUpClick: () => void;
}

export default function SignIn({ onBack, onSuccess, onSignUpClick }: SignInProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 via-white to-sage-50 flex flex-col">
      <button
        onClick={onBack}
        className="absolute top-8 left-8 text-sage-600 hover:text-sage-700 flex items-center gap-2"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Home
      </button>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Leaf className="h-12 w-12 text-sage-600" />
            </div>
            <h2 className="text-2xl font-bold text-sage-900">Welcome Back</h2>
            <p className="text-sage-600 mt-2">Sign in to continue your wellness journey</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sage-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-sage-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-sage-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-2 border border-sage-200 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent outline-none transition-colors"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sage-400 hover:text-sage-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-sage-600 focus:ring-sage-500 border-sage-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-sage-600">
                  Remember me
                </label>
              </div>
              <button type="button" className="text-sm text-sage-600 hover:text-sage-700">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-sage-600 text-white py-2 rounded-lg hover:bg-sage-700 transition-colors"
            >
              Sign In
            </button>

            <div className="text-center">
              <p className="text-sm text-sage-600">
                Don't have an account?{' '}
                <button
                  type="button"
                  onClick={onSignUpClick}
                  className="text-sage-700 hover:text-sage-800 font-medium"
                >
                  Sign up
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}