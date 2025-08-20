import Joi from "joi";

export const taskValidator = Joi.object({
    taskName: Joi.string().trim().required().messages({ "string.empty": "Task name is required" }),
    category: Joi.string().valid("Web Development", "Cloud & DevOps", "Leisure").required().messages({
        "any.only": "Category must be Web Development, Cloud &DevOps, or Leisure"
    }),
    startTime: Joi.date().required().messages({
        "date.base": "Start time must be a valid date",
    }),
    endTime: Joi.date().greater(Joi.ref("startTime")).required().messages({"date.greater": "End time must be after start time"}),
    priority: Joi.string().valid("High", "Medium", "Low").messages({"any.only": "Priority must be High, Medium, or Low"}),
    remarks: Joi.string()
})