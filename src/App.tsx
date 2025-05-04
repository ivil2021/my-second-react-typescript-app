import './App.css';
import { RegistrationForm } from './components/RegistrationForm';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';
import { UserRegistrationForm } from './components/UserRegistrationForm';

export function App() {
  return (
    <div className="App">
      <UserRegistrationForm />
      <RegistrationForm />
      <ThemeToggle />
    </div>
  );
}
