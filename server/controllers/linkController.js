const Link = require("../models/Link");

function generateShortCode() {

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let code = "";

  for (let i = 0; i < 6; i++) {

    const randomIndex =
      Math.floor(Math.random() * characters.length);

    code += characters[randomIndex];
  }

  return code;
}

const shortenURL = async (req, res) => {

  try {

    const { originalUrl } = req.body;

    const shortCode = generateShortCode();

    const newLink = await Link.create({
      originalUrl,
      shortCode,
    });

    return res.status(201).json({
      message: "Short URL Created",
      link: newLink,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      error: "Internal Server Error",
    });

  }

};

const redirectURL = async (req, res) => {

  try {

    const { shortCode } = req.params;

    const link = await Link.findOne({
      shortCode,
    });

    if (!link) {
      return res.status(404).json({
        message: "Link not found",
      });
    }

    link.clicks += 1;

    await link.save();

    return res.redirect(link.originalUrl);

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      error: "Internal Server Error",
    });

  }

};

module.exports = {
  shortenURL,
  redirectURL,
};