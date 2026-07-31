import URLCard from "./URLCard";

function URLList({ links }) {

  if (links.length === 0) {

    return (

      <p className="empty">
        No URLs shortened yet.
      </p>

    );

  }

  return (

    <div className="url-list">

      {

        links.map((link) => (

          <URLCard
            key={link._id}
            link={link}
          />

        ))

      }

    </div>

  );

}

export default URLList;