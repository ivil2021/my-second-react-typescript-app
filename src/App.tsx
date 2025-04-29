import './App.css';
import { RegistrationForm } from './components/RegistrationForm';
import { ThemeToggle } from './components/ThemeToggle/ThemeToggle';

export function App() {
  return (
    <div className="App">
      <RegistrationForm />
      <ThemeToggle />
    </div>
  );
}
