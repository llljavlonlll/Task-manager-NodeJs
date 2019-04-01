require("./db/mongoose");
const express = require("express");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log("Server is up on port: " + port);
});

// const Task = require("./models/task");
// const User = require("./models/user");

// const main = async () => {
//     // const task = await Task.findById("5c9f607d2b733d32a0cecc46");
//     // await task.populate("owner").execPopulate();
//     // console.log(task.owner);

//     const user = await User.findById("5c9f42a7cc3b2b076c216c7d");
//     await user.populate("tasks").execPopulate();
//     console.log(user.tasks);
// };

// main();
