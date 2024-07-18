import { FormEvent } from 'react'

const LoginForm = () => {
    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            username: { value: string }
            password: { value: string }
        }

        console.log(target.username.value)
        console.log(target.password.value)
    }

    return (
        <form className="col-10 mx-auto" onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label fw-bold">
                    Username
                </label>
                <input type="text" className="form-control" name="username" placeholder="Username..."/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label fw-bold">
                    Password
                </label>
                <input type="text" className="form-control" name="password" placeholder="Password..."/>
            </div>
            <button type="submit" className="btn btn-secondary w-100">
                Login
            </button>
        </form>
    )
}

export default LoginForm