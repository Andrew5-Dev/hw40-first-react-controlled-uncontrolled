import LoginForm from './components/LoginForm.tsx'
import LoginFormUseRef from './components/LoginFormUseRef.tsx'
import LoginFormControlled from './components/LoginFormControlled.tsx'

const App = () => {
    return (
            <div className="container-lg p-5  justify-content-center bg-light col-4">
                <h1 className="my-5 text-center">Uncontrolled Inputs</h1>
                <LoginForm />
                <h1 className="my-5 text-center">Uncontrolled Inputs UseRef</h1>
                <LoginFormUseRef/>
                <h1 className="my-5 text-center">Controlled Inputs</h1>
                <LoginFormControlled/>
            </div>
    )
}

export default App