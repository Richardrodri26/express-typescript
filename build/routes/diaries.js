"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //Ecmascript modules
// const express = require('express') //common js
const services_1 = require("../services");
const utils_1 = __importDefault(require("../utils"));
const router = express_1.default.Router();
router.get("/", (_req, res) => {
    res.send(services_1.diaryServices.getEntriesWithoutSensitiveInfo());
});
router.get("/:id", (req, res) => {
    const diary = services_1.diaryServices.findById(Number(req.params.id));
    if (!diary) {
        res.sendStatus(404);
    }
    res.send(diary);
});
router.post("/", (req, res) => {
    try {
        const newDiaryEntry = (0, utils_1.default)(req.body);
        const addedDiaryEntry = services_1.diaryServices.addDiary(newDiaryEntry);
        res.json(addedDiaryEntry);
    }
    catch (error) {
        res.status(400).send('Error al agregar un diary');
    }
});
exports.default = router;
