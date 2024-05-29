import axios from "axios";

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}

type FieldErrorType = {
    error: string
    field: string
}


type ResponseType<B = {}> = {
    resultCode: number,
    messages: Array<string>,
    fieldsErrors: FieldErrorType[]
    data: B
}


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        'api-key': '48a19545-bfe2-4577-b60c-be93a4f04014'
    }
})

export const todolistApi = {
    getTodolists() {
        return instance.get<TodolistType[]>('/todo-lists')
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>('/todo-lists', {title})
    },
    deleteTodolist(tId: string) {
        return instance.delete<ResponseType>(`/todo-lists/${tId}`)
    },
    updateTodolist(tId: string, title: string) {
        return instance.put<ResponseType>(`/todo-lists/${tId}`, {title})
    }
}