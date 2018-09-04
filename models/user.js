
let mongoose=require('mongoose');
let userSchema=mongoose.Schema({
    _id:{
        type:String,
        required:true
        
    },
    nom:{
        type:String,
        required:true
    },
    prenom:{
      type:String,
      required:true
    },
    age:{
      type:String,
      required:true
    },
   

});
let user=module.exports=mongoose.model('user',userSchema);