import { useState } from "react";
import { auth } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        if (email !== "" && password !== "") {
            signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                localStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
                toast.success('You logged in succesfully')
                setTimeout(() => {
                    navigate('/admin/create')
                }, 2000);
            })
        } else {
            toast.error('Please enter email && password to login!')
        }
    }

    return ( 
        <>
            <div className="flex flex-col items-center md:my-32 my-16">
                <ToastContainer 
                    position = 'top-center'
                    autoClose = {2000}
                    hideProgressBar = {true}
                    closeOnClick = {true}
                    pauseOnHover = {true}
                    draggable = {true}
                    progress = {undefined}
                    theme= 'colored'
                />
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