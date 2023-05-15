import express from "express"; //Ecmascript modules
// const express = require('express') //common js
import { diaryServices } from "../services";
import toNewDiaryEntry from "../utils";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.get("/:id", (req, res) => {
  const diary = diaryServices.findById(Number(req.params.id));

  if (!diary) {
    res.sendStatus(404);
  }

  res.send(diary);
});

router.post("/", (req, res) => {
  try {

    const newDiaryEntry = toNewDiaryEntry(req.body)

    const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry);

    return res.json(addedDiaryEntry);
  } catch (e: any) {
    return res.status(400).send(e.message);
  }
});

export default router;
