import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  // State qui gère le contenu et l'affichage de mon message d'erreur
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleSecondPasswordChange = (event) => {
    const value = event.target.value;
    setSecondPassword(value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   alert("formulaire envoyé");
  // };

  return (
    <div className="App">
      <h1>Create Account</h1>

      <form
        onSubmit={(event) => {
          if (password === secondPassword) {
            setErrorMessage("");
            alert(`Bravo, vous avez soumis votre formulaire`);
          } else {
            setErrorMessage("");
            alert("Vos deux mots de passe ne sont pas identiques");
          }
        }}
      >
        <p>Name</p>
        <input
          placeholder="Steven Chafei"
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />

        <p>Email</p>
        <input
          placeholder="chafei.s@live.fr"
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <p>Password</p>
        <input
          placeholder="s678HGFSjsksi"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <p>Confirm your password</p>
        <input
          placeholder="s678HGFSjsksi"
          type="password"
          name="password"
          value={secondPassword}
          onChange={handleSecondPasswordChange}
        />

        <div className="test">
          <input type="submit" value="Register" />
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </form>
      <Footer />
    </div>
  );
}

export default App;
