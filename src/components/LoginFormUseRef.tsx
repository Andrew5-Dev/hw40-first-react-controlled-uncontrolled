import { FormEvent, useRef } from 'react'

const LoginFormUseRef = () => {
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log('Username:', usernameRef.current?.value)
        console.log('Password:', passwordRef.current?.value)
    }

    return (
        <form className="col-10 mx-auto" onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label fw-bold">
                    Username
                </label>
                <input
                    ref={usernameRef}
                    id="username"
                    type="text"
                    className="form-control"
                    name="username"
                    placeholder="Username..."
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label fw-bold">
                    Password
                </label>
                <input
                    ref={passwordRef}
                    id="password"
                    type="text"
                    className="form-control"
                    name="password"
                    placeholder="Password..."
                />
            </div>
            <button type="submit" className="btn btn-secondary w-100">
                Login
            </button>
        </form>
    )
}

export default LoginFormUseRef