import { Avatar } from "@material-ui/core"
import { ChatBubble, RadioButtonUnchecked, Search } from "@material-ui/icons"
import { useEffect, useState } from "react"
import { auth, db } from '../firebase/Firebase'
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore"
import { signOut } from 'firebase/auth'
import Chat from "../components/Chat/Chat"
import { useStateValue } from "../context/StateProvider"
import router from "next/router"
const Chats = () => {
    const [posts, setposts] = useState(null)
    const [{ user }, dispatch] = useStateValue()
    useEffect(() => {
        onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setposts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            })))
        })
    }, [])
    const takeSnap = () => {
        dispatch({
            type: "RESET_CAMERA_IMAGE"
        })
        router.push('/')
    }
    return (
        <div className="chats">
            <header className="chats__header">
                <Avatar src={user.profilePic} onClick={() => {
                    signOut(auth)
                    router.replace('/')
                }} className="chats__avatar" />
                <div className="chats__search">
                    <Search />
                    <input type="text" placeholder="Friends" />
                </div>
                <ChatBubble className="chats__chatIcon" />
            </header>
            <div className="chats__posts">
                {posts?.map(({ id, data: { profilePic, username, timestamp, imageUrl, read } }) => (
                    <Chat key={id}
                        id={id}
                        username={username}
                        timestamp={timestamp}
                        imageUrl={imageUrl}
                        read={read}
                        profilePic={profilePic}

                    />
                ))}
            </div>
            <RadioButtonUnchecked
                className="chats__takePicIcon"
                fontSize='large'
                onClick={takeSnap}
            />
        </div>
    )
}



export default Chats
