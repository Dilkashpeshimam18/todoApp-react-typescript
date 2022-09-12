
export interface Todos{
    id:number,
    todo:string,
    isDone:boolean
}

export type InputEvent= React.ChangeEvent<HTMLInputElement>
export type ButtonEvent= React.MouseEvent<HTMLButtonElement>
export type FormEvent= React.FormEvent<HTMLFormElement>