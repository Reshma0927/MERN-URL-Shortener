const BASE_URL = "https://mern-url-shortener-jicf.onrender.com";

export async function shortenURL(data) {

  const response = await fetch(`${BASE_URL}/shorten`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  return result;
}
