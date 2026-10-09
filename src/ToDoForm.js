import { useState } from "react"

function ToDoForm({addTask}) {
    const [userInput , setUserInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }
    const handleChange = (e) => {
        setUserInput(e.target.value)
    }
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} placeholder="Введите значение" type="text" onKeyDown={handleKeyPress} onChange={handleChange} />
            <button>Сохранить</button>
        </form>
    )
}

export default ToDoForm