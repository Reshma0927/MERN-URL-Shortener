import { useState } from "react";

function URLForm({ onShorten }) {

  const [url, setUrl] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    if (url.trim() === "") {
      return;
    }

    onShorten(url);

    setUrl("");
  }

  return (
    <form className="url-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Paste your longgggg URL..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <button type="submit">
        Shorten
      </button>

    </form>
  );
}

export default URLForm;