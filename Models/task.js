
import mongoose, { model, Schema } from "mongoose";

 const taskSchema = new Schema({
    taskName: { type: String, required: [true, "Task name is required"], trim: true },
    category: { type: String, enum: ["Web Development", "Cloud&DevOps", "Leisure"], required: [true, "Category is required"] },
    startTime: { type: Date, required: [true, "Start time is required"] },
    endTime: { type: Date, required: [true, "End time is required"] },
    priority: { type: String, enum: ["High", "Medium", "Low"], default: "Medium" },
    remarks: { type: String, trim: true }
})

export const TaskModel = model('Task', taskSchema);