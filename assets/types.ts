export type Priority = 'low' | 'medium' | 'high';

export type Todo = {
    id: string,
    date: Date,
    text: string,
    priority: Priority,
    isDone: boolean
}