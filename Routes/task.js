import { Router } from "express";
import { isAuthenticated } from "../Middlewares/auth.js";
import { createTask, deleteTasks, getAllTasks, getTaskById, updateTasks } from "../Controllers/task.js";

const taskRouter = Router()

taskRouter.post('/tasks', isAuthenticated, createTask)
taskRouter.get('/tasks', isAuthenticated, getAllTasks)
taskRouter.get('/tasks/:id', isAuthenticated, getTaskById)
taskRouter.patch('/tasks/:id', isAuthenticated, updateTasks)
taskRouter.delete('/tasks/:id', isAuthenticated, deleteTasks)


export default taskRouter