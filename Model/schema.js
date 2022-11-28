const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/taskAPI',
    process.env.RESTREVIEWS_DB_URI,
    {
        useNewUrlParser: true
    }
).then(()=>{
    console.log("DB connection successful!");
});

//Schema User
const TaskSchema = new mongoose.Schema(
{
    TaskId:{
        type:String,
        unique:true,
        required:true,
    },
    Title:{
        type:String,
        required:true,
    },
    
    IsCompleted:{
        type:Boolean,
        required:true,
    },
}
);

const taskModel = mongoose.model('tasks',TaskSchema);
module.exports = {
    tasks:taskModel
}