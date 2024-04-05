import Sidebar from "./components/Sidebar/index.jsx";
import Body from "./components/Body/index.jsx";
import styles from "./App.module.css"

function App() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <Body />
        </div>
    )
}

export default App
