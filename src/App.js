import logo from './logo.svg';
import './App.css';
import Admin from "./Admin"
import UserRegistrationForm from './UserRegistrationForm';

function App() {
  return (
    <>
      <section className="hero is-primary">
        <div className="container">
          <div className="hero-body">
            <p className="title">
              Welcome!
          </p>
          </div>
        </div>
      </section>
      <Admin />
      <UserRegistrationForm />
    </>
  );
}

export default App;
