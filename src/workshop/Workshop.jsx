// import Hello from "./Hello"
import Hello2 from "./Hello2"

const Workshop = () => {

    const callback = (message) => {
        console.log("Callback with " + message);
    }

    return (
        <div>
            <h2>Workshop component</h2>
            {/* <Hello initialName="Ben" onCall={callback} /> */}
            <Hello2/>
        </div>
    )
}

export default Workshop 