import { db } from './db';
import { User } from '../types/auth';

interface StoredUser extends User {
  password: string;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password: string): boolean {
  // Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return passwordRegex.test(password);
}

export async function signUp(email: string, password: string, name: string): Promise<User> {
  if (!validateEmail(email)) {
    throw new Error('Please enter a valid email address');
  }

  if (!validatePassword(password)) {
    throw new Error('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number');
  }

  const existingUser = await db.users.where('email').equals(email).first();
  if (existingUser) {
    throw new Error('An account with this email already exists');
  }

  const user: StoredUser = {
    id: crypto.randomUUID(),
    email,
    name,
    password, // In a real app, this would be hashed
    createdAt: new Date(),
  };

  await db.users.add(user);
  
  // Don't include password in the returned user object
  const { password: _, ...userWithoutPassword } = user;
  localStorage.setItem('auth', JSON.stringify({ 
    user: userWithoutPassword, 
    isAuthenticated: true 
  }));
  
  return userWithoutPassword;
}

export async function signIn(email: string, password: string): Promise<User> {
  if (!validateEmail(email)) {
    throw new Error('Please enter a valid email address');
  }

  const user = await db.users.where('email').equals(email).first() as StoredUser | undefined;
  
  if (!user) {
    throw new Error('No account found with this email address');
  }

  if (user.password !== password) {
    throw new Error('Incorrect password');
  }

  // Don't include password in the returned user object
  const { password: _, ...userWithoutPassword } = user;
  localStorage.setItem('auth', JSON.stringify({ 
    user: userWithoutPassword, 
    isAuthenticated: true 
  }));
  
  return userWithoutPassword;
}

export function signOut() {
  localStorage.removeItem('auth');
}

export function getCurrentUser(): { user: User | null; isAuthenticated: boolean } {
  const auth = localStorage.getItem('auth');
  return auth ? JSON.parse(auth) : { user: null, isAuthenticated: false };
}