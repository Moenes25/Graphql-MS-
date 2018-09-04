
let mongoose=require('mongoose');
let photoSchema=mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
      type:String,
      required:true
    },
   
   

});
let photo=module.exports=mongoose.model('photo',photoSchema);