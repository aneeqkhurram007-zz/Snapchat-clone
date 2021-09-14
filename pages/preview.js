import { useStateValue } from '../context/StateProvider'
import router from 'next/router'
import { useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { db, storage } from '../firebase/Firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import { AttachFile, Close, Create, Crop, MusicNote, Note, Send, TextFields, Timer } from '@material-ui/icons'
const Preview = () => {
    const [{ cameraImage, user }, dispatch] = useStateValue()
    useEffect(() => {
        !cameraImage && router.replace('/')


    }, [cameraImage])
    const closePreview = () => {
        dispatch({
            type: 'RESET_CAMERA_IMAGE'
        })
    }
    const sendPost = () => {
        const id = uuid();
        const metadata = {
            contentType: 'image/jpeg'
        };
        const uploadTask = uploadBytesResumable(ref(storage, `posts/${id}`), cameraImage, metadata)
        uploadTask.on('state_changed', null, error => {
            console.log(error);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then(url => {
                addDoc(collection(db, 'posts'), {
                    imageUrl: url,
                    username: "Aneeq",
                    read: false,
                    profilePic: user.profilePic,
                    timestamp: Timestamp.now()
                })
                router.replace('/chats')
            })
        })
    }
    return (
        <>
            <div className="preview">
                <div onClick={closePreview}>
                    <Close className="preview__close"
                    />
                </div>

                <div className="preview__toolbarRight">
                    <TextFields />
                    <Create />
                    <Note />
                    <MusicNote />
                    <AttachFile />
                    <Crop />
                    <Timer />
                </div>
                <img src={cameraImage} alt="previewImage" />
                <div className="perview__footer" onClick={sendPost}>
                    <h2>Send Now</h2>
                    <Send className="preview__sendIcon" />
                </div>
            </div>
        </>
    )
}

export default Preview
