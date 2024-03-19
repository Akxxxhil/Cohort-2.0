const mongoose=require("mongoose")
// mongoose.connect()

const cat=mongoose.model("Users",{
    name:String,
    password:String,
    email:String
})

const kitty=new cat({
    name:"Akxxhil",
    password:"1234",
    email:"anshu@gmail.com"
})
kitty.save();