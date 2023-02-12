
// @desc    Get all bootcamps
// @Routes  Get /api/v1/bootcamps
// @acess   Public

exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ sucess: true, msg: "Show all bootcamps" })
 }
 
// @desc    Get all bootcamps
// @Routes  Get /api/v1/bootcamps
// @acess   Public

exports.getBootcamps = async (req, res, next) => {
   try
   {
   const bootcamps = await Bootcamp.find()
       res.status(200).json({ success: true, count:bootcamps.length, data: bootcamps })
   }
   catch (error)
   {
       res.status(400).json({ success: false })

   }
}

 // @desc    Get Single bootcamps
 // @Routes  Get /api/v1/bootcamps/:id
 // @acess   Public
 
 exports.getBootcamp = async (req, res, next) => {
   try
   {
       const bootcamp = await Bootcamp.findById(req.params.id)
       res.status(200).json({ success: true, data: bootcamp })
   }
   catch (error)
   { 
       res.status(400).json({ sucess: false })
   }
}

 
 // @desc    Create new bootcamp
 // @Routes  post /api/v1/bootcamps
 // @acess   Private
 exports.createBootcamp = async (req, res, next) => {
   try
   {
       const bootcamp = await Bootcamp.create(req.body);
       res.status(201).json({
           success: true,
           data: bootcamp
       });
   }
   catch (err)
   {

       res.status(400).json({ success: false  })
   }
}


 
 // @desc    Update bootcamp
 // @Routes  put /api/v1/bootcamps/:id
 // @acess   Private
 
 exports.updateBootcamp = (req, res, next) => {
 
    res.status(200).json({ sucess: true, msg: `update bootcamps ${req.params.id}` })
 
 
 }
 
 // @desc    Delete bootcamp
 // @Routes  Delete /api/v1/bootcamps/:id
 // @acess   Private
 
 exports.deleteBootcamp = (req, res, next) => {
 
    res.status(200).json({ sucess: true, msg: `update bootcamps ${req.params.id}` })
 
 }