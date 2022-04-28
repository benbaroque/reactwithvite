import { useState } from "react"

const Hello = () => {
    const [name, updateName] = useState("")
    return (
        <div>
            <form>
                Name : <input type="text" />
            </form>
            {name ? <b>Hi, {name}</b> : "Please enter your name"}
        </div>
    )
}

export default Hello 