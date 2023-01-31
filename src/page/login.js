import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials, removeCredentials } from "../slice/user";
import { Navigate } from "react-router-dom";

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(removeCredentials())
  })
  const user = useSelector(state => state.user)
  if (user.id) return <Navigate to={'/'} />

  const validate = () => {
    if (username.length > 8 && password.length > 8) {
      // correct authentication
      dispatch(setCredentials({ id: 1, username: 'admin', email: 'admin@email.com', profileImage: '/backend/' }))
    }
    else {
      console.log('Username or password is incorrect.');
    }

  }
  return (
    <div className="flex w-screen h-screen justify-center">
      <div className="flex w-[480px] h-[280px] justify-center bg-amber-200 rounded-lg my-24">
        <div className="flex flex-col m-1 cursor-text justify-center items-center">
          <p className="border bg-white rounded-lg w-26 h-8 px-4 m-5 font-mono font-semibold py-1">ACCOUNT</p>
          <div className="flex m-1 ">
            <p className="font-mono rounded-lg h-8 px-2 py-1">Username</p>
            < input
              className="border-2 border-white font-serif[Times New Roman] rounded-lg w-72 h-8 hover:shadow-inner"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
              }}
            />
          </div>
          <div className="flex m-2">
            <p className="font-mono rounded-lg h-8 px-2 py-1">Password</p>
            < input
              className="border-2 border-white font-serif[Times New Roman] rounded-lg w-72 h-8 px-2 hover:shadow-inner"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
            />
          </div>
          <div className="flex justify-between cursor-pointer">
            <button
              type="button"
              className="rounded-lg  border bg-white w-24 h-8 py-1 px-5 m-2 hover:shadow-inner"
              onClick={() => validate()}
            >
              <p className="font-mono">Login</p>
            </button>
            <p className="border bg-white font-mono rounded-lg w-24 h-8 py-1 px-3 m-2 hover:shadow-inner">Register</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login;