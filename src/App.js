import LoginButton from "./components/LoginButton";
import { jwtDecode } from "jwt-decode";

function App() {

  const token = new URLSearchParams(window.location.search).get("token");
  if (token) {
    const user = jwtDecode(token);
    console.log("SAML User:", user);
  }


  return (
    <main className="column">
      <h1>Auth0 Login</h1>
      <LoginButton />
      {/* <div>
        {data.isLoading && <p>Loading...</p>}
        {data.isError && <p style={{ color: "red" }}>Error: {data.error}</p>}
        {data.isSuccess && <pre>{JSON.stringify(data.data, null, 2)}</pre>}
      </div> */}
    </main>
  );
}

export default App;
