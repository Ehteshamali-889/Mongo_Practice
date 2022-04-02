const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/ttchanel",{useNewUrlParser:true,useUnifiedTopology:true}).
then(()=>console.log("Connection Successfull..."))
.catch((err)=>console.log(err));

// Schema
const playlistSchema=new mongoose.Schema({
    name:String,
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

// model
// Collection creation
const Playlist=new mongoose.model("Playlist",playlistSchema)

// create Document and insert

const createDocument=async()=>{
    try{
        const reactPlaylist=new Playlist({
            name:"NodeJS",
            ctype:"Back End",
            videos:40,
            author:"Thapa Technical",
            active:true
        })
        const result=await reactPlaylist.save();
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
    
}
createDocument();
