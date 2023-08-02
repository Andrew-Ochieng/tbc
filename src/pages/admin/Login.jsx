import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()

        // if (email !== "" && password !== "")
        //     console.log('User logged in succesfully!')
        // } else {
        //     console.log('User logged in succesfully!')
        // }
        console.log('User logged in succesfully!')
    }

    return ( 
        <>
            <div className="flex flex-col items-center md:my-32 my-16">
                <form>
                    <div className="label">
                        <input 
                            className="input border border-cyan-500" 
                            type="email" 
                            name="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter email..." 
                            required 
                        />
                    </div>
                    <div className="label">
                        <input 
                            className="input border border-cyan-500" 
                            type="password" 
                            name="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password..." 
                            required 
                        />
                        </div>
                    <button 
                        onClick={handleLogin} 
                        className="btn w-full"
                    >
                        Login
                    </button>
                </form>
            </div>
        </>
     );
}
 
export default Login;