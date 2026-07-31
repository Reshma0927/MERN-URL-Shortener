function URLCard({ link }) {

  const shortURL = `http://localhost:3000/${link.shortCode}`;

  function copyLink() {

    navigator.clipboard.writeText(shortURL);

    alert("Link Copied!");

  }

  return (

    <div className="url-card">

      <h3>{link.originalUrl}</h3>

      <p>{shortURL}</p>

      <div className="url-buttons">

        <button onClick={copyLink}>
          Copy
        </button>

        <a
          href={shortURL}
          target="_blank"
          rel="noreferrer"
        >
          <button>
            Open
          </button>
        </a>

      </div>

    </div>

  );

}

export default URLCard;