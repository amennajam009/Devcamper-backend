/**
 * User CRUD routes
 * @author Amen Najam 
 */
const router = require("express").Router();
const bootcamp= require("../Controller/bootcamp.js")

/**
 * ////////////////////////// Routes /////////////////////////
 * @method post bootcampcreate
 * @method get  getallbootcamp
 * @method get  getbootcampid
 * @method put  updatebootcampbyid
 * @method delete delbootcamp
 * */
router.get("/",bootcamp.getBootcamps); // Get all users at once
router.get("/:id",bootcamp.getBootcamp);
router.post("/",bootcamp.createBootcamp);
router.put("/:id",bootcamp.updateBootcamp);
router.delete("/:id",bootcamp.deleteBootcamp);

module.exports = router;