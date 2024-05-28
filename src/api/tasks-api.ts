import axios from "axios";
import {TaskType} from "../Todolist";

const instance = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.1/todo-lists',
    withCredentials: true,
    headers: {
        'api-key': '48a19545-bfe2-4577-b60c-be93a4f04014'
    }
})

export const tasksApi = {
    getTasks(todolistId: string) {
        return instance.get(`/${todolistId}/tasks`)
    },
    createTask(todolistId: string, title: string) {
        return instance.post(`${todolistId}/tasks`, {title})
    },
    deleteTask(todolistId: string, taskId: string) {
        return instance.delete(`/${todolistId}/tasks/${taskId}`)
    },
    updateTask(todolistId:string, taskId:string, title:string) {
        return instance.put(`/${todolistId}/tasks/${taskId}`, {title})
    }
}