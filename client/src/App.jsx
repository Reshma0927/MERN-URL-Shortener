import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import URLForm from "./components/URLForm";
import URLList from "./components/URLList";

import { shortenURL } from "./services/api";

function App() {

  const [links, setLinks] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  async function handleShorten(url) {

    setLoading(true);

    setError(null);

    try {

      const response = await shortenURL({
        originalUrl: url,
      });

      if (response?.link) {

        setLinks([
          response.link,
          ...links,
        ]);

      } else {

        setError("Failed to shorten link. Please try again.");

      }

    } catch (err) {

      console.error(err);

      setError("Something went wrong. Check your connection.");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div>

      <Navbar />

      <URLForm
        onShorten={handleShorten}
        isLoading={loading}
      />

      {error && <p className="error-message">{error}</p>}

      <URLList
        links={links}
      />

    </div>

  );

}

export default App;