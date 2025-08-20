import { TaskModel } from "../Models/task.js";
import { taskValidator } from "../Validators/task.js";

export const createTask = async (req, res, next) => {
    try {
        const { error, value } = taskValidator.validate(req.body)
        if (error) {
            return res.status(422).json(error)
        }
        const task = await TaskModel.create({ ...value, user: req.auth.id })
        res.status(201).json(task)
    } catch (error) {
        next(error)
    }
}

export const getAllTasks = async (req, res, next) => {
    try {
        const { filter = "{}", sort = "{}", limit = 100, skip = 0 } = req.query
        const tasks = await TaskModel
            .find(JSON.parse(filter))
            .sort(JSON.parse(sort))
            .limit(limit)
            .skip(skip)
        res.status(200).json(tasks)
    } catch (error) {
        next(error)
    }
}

export const getTaskById = async (req, res, next) => {
    try {
        const tasks = await TaskModel.findById(req.params.id)
        res.status(200).json(tasks)
    } catch (error) {
        next(error)
    }
}

export const updateTasks = async (req, res, next) => {
    try {
        const { error, value } = taskValidator.validate(req.body)
        if (error) {
            return res.status(422).json(error)
        }
        const tasks = await TaskModel.findByIdAndUpdate(req.params.id, value, { new: true })
        res.status(200).json(tasks)
    } catch (error) {
        next(error)
    }
}

export const deleteTasks = async (req,res,next) => {
    try {
        await TaskModel.findByIdAndDelete(req.params.id)
        res.status(200).json('task deleted successfully')
    } catch (error) {
        next(error)
    }
    }