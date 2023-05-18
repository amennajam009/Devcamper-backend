const mongoose = require('mongoose')
const BootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, 'please  add a name'],
        // unique: true,
         trim: true, 
        maxlength: [50, "Name  can not be more  then 50 characters "]
    },
    slug: String,

    description: {
        type: String,
        // required: [true, 'Please add a description'],
        maxlength: [500, "description  can not be more  then 500 characters "]
    },
    website: {
        type: String,
        match: [/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Plase use a valid URL with HTTP  or HTTPS'
        ],
    },

    email: {
        type: String,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please  add a  valid  email'
        ],
    },
    address: {
        type: String,
        // required: [true, 'Please add an address']
    },
    // location: {
    //     //  GeoJson point
    //     type: {
    //         type: String,
    //         enum: ['point'],
    //         required: true
    //     },
    //     coordinates: {
    //         type: [Number],
    //         required: true,
    //         index: '2dsphere'},
    //         formattedAddress: String,
    //         street: String,
    //         city: String,
    //         State: String,
    //         zipcode: String,
    //         country: String,    
    // },
    careers: {
        // Array of strings
        type:[String],
        required:true,
        emum:[
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ],
    },
    averageRating: {
        type: Number,
        min: [1, 'Rating must be at  least 1 '],
        max: [10, 'Rating must can not be more than 10'],
 
    },
    averageCost:Number,

    photo:{
        type:String,
        default:'no-photo-jpg'
    },
    housing: {
        type: Boolean,
        default: false
      },
      jobAssistance: {
        type: Boolean,
        default: false
      },
      jobGuarantee: {
        type: Boolean,
        default: false
      },
      acceptGi: {
        type: Boolean,
        default: false
      },
  
})


module.exports = mongoose.model('Bootcamp', BootcampSchema)