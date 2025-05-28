const aiService = require("../services/ai.service");

module.exports.getResponse = async (req, res) => {
  const code = req.body.code;
  console.log(code);
  if (!code || typeof code !== "string") {
    return res
      .status(400)
      .json({ error: "Valid 'code' is required in the request body." });
  }
  const response = await aiService(code);
  res.status(200).json({ result: response });
};
