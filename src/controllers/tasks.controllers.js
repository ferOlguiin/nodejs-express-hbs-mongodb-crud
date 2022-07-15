import Task from "../models/Task";

export const renderTasks = async (req, res) => {
    const tasks = await Task.find().lean();
    res.render("index", { tasks });
};

export const addTask = async (req, res) => {
    try {
        const task = Task(req.body);
        await task.save();
        res.redirect("/");

    } catch (error) {
        console.log(error)
        res.render("errorValidacion")
    }
};

export const editForm = async (req, res) => {
                        
    try{

     const task = await Task.findById(req.params.id).lean();
     res.render("edit", { task });

    } catch(error) {

         console.log(error.message)
    }

 };

 export const editFinal = async (req, res) => {
                        
    await Task.findByIdAndUpdate(req.params.id, req.body);

    res.redirect("/");
};


export const deleteTask = async (req, res) => {
    
    await Task.findByIdAndDelete(req.params.id); 

    res.redirect("/");
};

export const toogleDone = async (req, res) => {
                    
    const { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    res.redirect("/");
};