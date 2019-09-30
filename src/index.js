import express from "express";

var server = express();

const port = process.env.PORT || 3000;
const redirectUrl = process.env.REDIRECT_URL || "https://www.whalegram.com";

server.get("*", (req, res) => {
  res.redirect(redirectUrl);
});

server.listen(port, () => console.log(`Server listening on ${port}`));
