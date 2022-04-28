// import Hello from "./Hello"
import Users from "./Users"

const Workshop = () => {

    const callback = (message) => {
        console.log("Callback with " + message);
    }

    return (
        <div>
            <h2>Workshop component</h2>
            {/* <Hello initialName="Ben" onCall={callback} /> */}
            <Users/>
        </div>
    )
}

export default Workshop 