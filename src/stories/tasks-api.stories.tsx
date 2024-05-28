import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistApi} from "../api/todolist-api";
import {tasksApi} from "../api/tasks-api";

export default {
    title: 'TASKS-API'
}

const settings = {
    withCredentials: true,
    headers: {
        'api-key': '48a19545-bfe2-4577-b60c-be93a4f04014'
    }
}

const todolistId = 'f2605f37-4d8f-46c3-9605-ce65e07e2f4b'

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        tasksApi.getTasks(todolistId)
            .then(res => setState(res.data))
            .catch(rej => setState(`Ошибка ${rej}`))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        tasksApi.createTask(todolistId, 'Again new task')
            .then(res => setState(res.data))
            .catch(rej => setState(`Ошибка ${rej}`))
     }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const taskId = '8a15f5f2-7b10-4627-b705-70d751d412e4'
    useEffect(() => {
       tasksApi.deleteTask(todolistId, taskId)
            .then(res => setState(res.data))
            .catch(rej => setState(`Ошибка ${rej}`))
     }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const taskId = '8c75de31-d1cb-4e95-9273-4a5a298f0036'
        tasksApi.updateTask(todolistId, taskId, 'mzf updated task title')
            .then(res => setState(res.data))
            .catch(rej => setState(`Ошибка ${rej}`))
       }, [])

    return <div>{JSON.stringify(state)}</div>
}