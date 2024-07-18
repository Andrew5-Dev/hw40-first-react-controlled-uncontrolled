import { FormEvent, useState } from 'react'

interface FormDataInterface {
    username: string
    password: string
}

const initialFormData: FormDataInterface = {
    username: '',
    password: ''
}

const LoginFormControlled = () => {
    const [formData, setFormData] = useState<FormDataInterface>(initialFormData)

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
    }

    const handleInputChange = (fieldName: string, fieldValue: string) => {
        setFormData({ ...formData, [fieldName]: fieldValue })
    }

    return (
        <form className="col-10 mx-auto" onSubmit={handleFormSubmit}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label fw-bold">
                    Username
                </label>
                <input
                    id="username"
                    type="text"
                    className="form-control"
                    placeholder="Username..."
                    onChange={(e) => handleInputChange('username', e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label fw-bold">
                    Password
                </label>
                <input
                    id="password"
                    type="text"
                    className="form-control"
                    placeholder="Password..."
                    onChange={(e) => handleInputChange('password', e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-secondary w-100">
                Login
            </button>
        </form>
    )
}

export default LoginFormControlled