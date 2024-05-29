import React, {useEffect, useState} from 'react'
import {tasksApi} from "../api/tasks-api";

export default {
    title: 'TASKS-API'
}

const todolistId = '4c2761d6-70b7-4106-a74a-e925eb003fb2'

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        tasksApi.getTasks(todolistId)
            .then(res => {
                setState(res.data)
            })
            .catch(rej => setState(`Ошибка ${rej}`))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        tasksApi.createTask(todolistId, 'Task For SECOND todolist, number TWO')
            .then(res => {
                setState(res.data.data.item.title)
            })
            .catch(rej => setState(`Ошибка ${rej}`))
     }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const taskId = '4c2761d6-70b7-4106-a74a-e925eb003fb2'
    useEffect(() => {
       tasksApi.deleteTask(todolistId, taskId)
            .then(res => {
                setState(res.data)
            })
            .catch(rej => setState(`Ошибка ${rej}`))
     }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const taskId = '2b8fd253-ab6c-4325-99c2-cb014426a74e'
        tasksApi.updateTask(todolistId, taskId, 'mzf updated task title')
            .then(res => {
                setState(res.data)
            })
            .catch(rej => setState(`Ошибка ${rej}`))
       }, [])

    return <div>{JSON.stringify(state)}</div>
}