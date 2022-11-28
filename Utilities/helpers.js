const {tasks} = require("../Model/schema");

exports.generateTaskId = async()=>{
    const user = await tasks.find({});
    const Id = user.length+1;
    return Id;
};
