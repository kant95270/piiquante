const express = require("express")
const { 
    getSauces, 
    createSauce, 
    getSauceById, 
    deleteSauce, 
    modifySauce 
} = require("../controllers/sauces")
const {likeSauce} = require("../controllers/vote")
const {authenticateUser} = require("../middleware/auth")
const { upload } = require("../middleware/multer")
const saucesRouter = express.Router()
const bodyParser = require("body-parser")

saucesRouter.use(bodyParser.json())
saucesRouter.use(authenticateUser)

saucesRouter.get("/", getSauces)
saucesRouter.post("/" , upload.single("image"), createSauce)
saucesRouter.get("/:id", getSauceById)
saucesRouter.delete("/:id", deleteSauce)
saucesRouter.put("/:id", upload.single("image"), modifySauce)
saucesRouter.post("/:id/like" , likeSauce)

module.exports = {saucesRouter} 