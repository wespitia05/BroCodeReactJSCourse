// props = read-only properties that are shared between components
//         a parent component can send data to a child component
//         <Component key=value />
import Student from './Students.jsx'

function App() {
    return(
        <>
            <Student name="Spongebob" age={30} isStudent={true}/>
        </>
    );
}

export default App
