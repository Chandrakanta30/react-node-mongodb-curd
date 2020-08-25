const mongoose = require('mongoose')

var SassApplication = mongoose.model('sassApplications',
{
    title : {type:String},
    message : {type:String},
},'sassApplications')

module.exports = { SassApplication}