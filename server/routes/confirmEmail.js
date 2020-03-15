const { User } = require("../models/user");
const express = require("express");
const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (user) {
    user.confirmed = true;
    user.expireAt = undefined;
    await user.save();

    return res.send(user.confirmed);
  } else {
    res.send("This link is expired");
  }
});

module.exports = router;
