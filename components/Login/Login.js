import { Button } from '@material-ui/core'
import { useStateValue } from '../../context/StateProvider'
import { auth, provider } from '../../firebase/Firebase'
import { signInWithPopup } from '@firebase/auth'
import router from 'next/router'
const Login = () => {
    const [, dispatch] = useStateValue()
    const signIn = () => {
        signInWithPopup(auth, provider).then(result => {
            dispatch({
                type: "LOGIN",
                payload: {
                    username: result.user.displayName,
                    profilePic: result.user.photoURL,
                    id: result.user.uid
                }
            })
            router.replace('/')
        }).catch(err => alert(err.message))
    }
    return (
        <div className="login">
            <div className="login__container">
                <img src="https://uploads-ssl.webflow.com/5dbfa12e9bf13e036e5438a3/5de4ecded41c9b591ed3bac8_Snapchat-logo.png" />
                <Button variant="outlined" onClick={signIn}>Sign In</Button>
            </div>
        </div>
    )
}

export default Login
