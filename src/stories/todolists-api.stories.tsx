import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistApi} from "../api/todolist-api";

export default {
    title: 'TODOLIST-API'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodolists()
            .then(res => {
                setState(res.data)
                console.log(res.data)
            })
            .catch(rej => setState(`Выдала ошибка:${rej}`))
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.createTodolist('What to do, new').then(res => setState(res.data))
            .catch(error => setState(`Произошла ошибка:${error}`))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '3eaa7f5c-3c10-4d7b-a534-fc537f470a60'
    useEffect(() => {

        todolistApi.deleteTodolist(todolistId)
            .then(res => setState(res.data))
            .catch(rej => setState(`Произошла ошибка${rej}`))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = 'f2605f37-4d8f-46c3-9605-ce65e07e2f4b'
        todolistApi.updateTodolist(todolistId, 'Updated title')
            .then(res => setState(res.data))
            .catch(error => setState(`Произошла ошибка: ${error}`))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}