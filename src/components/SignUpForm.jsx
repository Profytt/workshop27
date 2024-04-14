import { useState } from "react";

export default function SignUpForm({ token, setToken}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const respnse = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          body: {
            username,
            password: password,
          },
        }
      );
      const result = await respnse.json();
      setToken(result.token);
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }

  async function handleClick() {
    if (!token) {
      setError("Please sign up to get a token first!");
      return;
    }

    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "GET", // Adjust the method based on your API endpoint
        headers: {
          Authorization: `Bearer ${token}`, // Include token in Authorization header
        },
      });

      const data = await response.json();
      console.log("API Response:", data);
    } catch (error) {
      setError(error.message);
    }
  }




  
  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
        
      </form>


      
    </>
  );
}
