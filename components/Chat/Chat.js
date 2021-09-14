import { Avatar } from "@material-ui/core"
import { StopRounded } from "@material-ui/icons"
import ReactTimeago from "react-timeago"
import { useStateValue } from '../../context/StateProvider'
import { setDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase/Firebase'
import router from 'next/router'
const Chat = ({ id, username, timestamp, read, imageUrl, profilePic }) => {
    const [, dispatch] = useStateValue()
    const open = () => {
        if (!read) {
            dispatch({
                type: "SELECT_IMAGE",
                payload: imageUrl,
            })
            setDoc(doc(db, 'posts', id), {
                read: true
            }, {
                merge: true
            })
            router.push('/chats/view')
        }
    }
    return (
        <div className="chat" onClick={open}>
            <Avatar className="chat__avatar" src={profilePic} />
            <div className="chat__info">
                <h4>{username}</h4>
                <p>
                    {!read && " Tap to view -"}{" "}  <ReactTimeago date={new Date(timestamp?.toDate()).toLocaleString()}
                    /></p>

            </div>
            {!read && <StopRounded className="chat__readIcon" />}
        </div>
    )
}

export default Chat
