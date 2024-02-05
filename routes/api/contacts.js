const express = require("express");

const {
    getAll,
    getByID,
    add,
    removeById,
    updateById,
} = require("../../controllers");
const {validateBody} = require("../../midlewares");
const { validateData } = require("../../decorators");
const schema = require("../../schemas");

const router = express.Router();

router.get("/", getAll);

router.get("/:contactId", getByID);

router.post("/", validateBody, validateData(schema), add);

router.delete("/:contactId", removeById);

router.put("/:contactId", validateBody, validateData(schema), updateById);

module.exports = router;