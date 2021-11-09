const express = require("express");
const router = express.Router();
const Reply = require("../models/replyModel");

router.post("/", async (req, res) => {

    let reply = await Reply.create(req.body);
    res.status(201).send({ reply });
});

router.get("/", async (req, res) => {

    let replies = await Reply.find().populate("postid").lean();
    res.status(201).send({ replies });
});


router.get("/:id", async (req, res) => {

    let reply = await Reply.findById(req.params.id).populate("postid").lean();
    res.status(201).send({ reply });
});


router.patch("/:id", async (req, res) => {

    let reply = await Reply.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send({ reply });
});

router.delete("/:id", async (req, res) => {

    let deletedreply = await Reply.deleteOne({ _id: req.params.id });
    res.status(200).send({ deletedreply });
});

module.exports = router;
