import { useEffect, useState } from "react";
import LoginButton from "./components/LoginButton";

function App() {

  const [ data, setData ] = useState({
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: {},
    error: null
  });

  useEffect(() => {
    const fetchData = async () => {
      setData((prev) => ({ ...prev, isLoading: true, isError: false, error: null }));

      try {
        const response = await fetch("http://nodejs-sso-using-saml.onrender.com/auth/saml/callback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Add body if required by your API
          // body: JSON.stringify({ key: "value" }),
          credentials: "include", // include cookies if the API uses sessions
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();

        setData({
          isLoading: false,
          isSuccess: true,
          isError: false,
          data: result,
          error: null,
        });
      } catch (err) {
        setData({
          isLoading: false,
          isSuccess: false,
          isError: true,
          data: {},
          error: err.message,
        });
      }
    };

    fetchData();
  }, []);


  return (
    <main className="column">
      <h1>Auth0 Login</h1>
      <LoginButton />
      <div>
        {data.isLoading && <p>Loading...</p>}
        {data.isError && <p style={{ color: "red" }}>Error: {data.error}</p>}
        {data.isSuccess && <pre>{JSON.stringify(data.data, null, 2)}</pre>}
      </div>
    </main>
  );
}

export default App;
