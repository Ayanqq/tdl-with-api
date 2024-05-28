import React, {useEffect, useState} from 'react'
import {tasksApi} from "../api/tasks-api";

export default {
    title: 'TASKS-API'
}

const todolistId = 'f2605f37-4d8f-46c3-9605-ce65e07e2f4b'

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        tasksApi.getTasks(todolistId)
            .then(res => {
                setState(res.data.items[0].title)
            })
            .catch(rej => setState(`Ошибка ${rej}`))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        tasksApi.createTask(todolistId, 'Again new task')
            .then(res => {
                setState(res.data.data.item.title)
            })
            .catch(rej => setState(`Ошибка ${rej}`))
     }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const taskId = '8c75de31-d1cb-4e95-9273-4a5a298f0036'
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