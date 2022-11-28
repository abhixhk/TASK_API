const {tasks} = require("../Model/schema");
const helper = require('../Utilities/helpers');

exports.createTask= async (req,res)=>{
    try{
        if(true){
           const Id =  await helper.generateTaskId();
           const task = await tasks.create(
            {
                TaskId: Id,
                Title: req.query.title,
                IsCompleted: false,
                
            });
            console.log(task);
            res.status(201).json({
                status:'success',
                data :{
                    Id
                },
            });
        }
    }catch(err){
        console.log(err);
        res.status(404).json({
            status:'fail',
            message:err,
        });
    }
      
};


exports.allTasks = async (req,res)=>{
    try{
        if(true){
            const result= await tasks.find({});
            if (result.length>0){
                res.status(200).json({
                    tasks:{
                        result,
                    },
                });
            }else{
                res.status(400).json({
                    status:'success',
                    data:{
                        message:"No user data available."
                    }
                });
            }
        }

    }catch(err){
        console.log(err);
        res.status(404).json({
            status:'fail',
            message:err,
        });
    }
};


exports.taskDetails = async (req,res)=>{
    try{
        if(true){
            const result= await tasks.find({TaskId:req.params.id});
            if (result.length>0){
                res.status(200).json({
                    task:{
                        result,
                    },
                });
            }else{
                res.status(400).json({
                    status:'success',
                    data:{
                        message:"No user data available."
                    }
                });
            }
        }

    }catch(err){
        console.log(err);
        res.status(404).json({
            status:'fail',
            message:err,
        });
    }
};



exports.editTask = async (req,res)=>{
    try{
        if(true){
           const task = await tasks.updateOne(
            {
                BookingId: req.params.id,    
            },
            {
                $set:{
                    IsCompleted: new Boolean(req.query.is_Completed),
                    Title:req.query.title,
                }
            }
            );
            console.log(task);
            res.status(204).json({

            });
        }
    }catch(err){
        console.log(err);
        res.status(404).json({
            status:'fail',
            message:err,
        });
    }
};


exports.deleteTask = async (req,res)=>{
    try{
        if(true){
            const result= await tasks.deleteOne({TaskId:req.params.id});
            res.status(204).json({

            });
            }else{
                res.status(400).json({
                    status:'success',
                    data:{
                        message:"No user data available."
                    }
                });
            }
    }catch(err){
        console.log(err);
        res.status(404).json({
            status:'fail',
            message:err,
        });
    }
};

exports.invalid = async (req,res)=>{
    // Invalid Path
    res.status(404).json({
        status:'fail',
        message:'Invalid Path',
    });
};
