
/**
 * @module express require module express
 * @module mainController require module mainController
 * @module mainRouter require module ./routes/mainRoutes
 * 
 * @type {mainRouter } connect metod express.Router(); to work with Routing
*/

const express = require('express');
const mainController = require('../controller/mainController');
const mainRouter = express.Router();

mainRouter.use("/", mainController.index);

/** mainRouter */
module.exports = mainRouter;