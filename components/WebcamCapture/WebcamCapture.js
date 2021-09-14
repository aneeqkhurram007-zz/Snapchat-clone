import Webcam from 'react-webcam'
import { useCallback, useRef } from 'react'
import RadioButtonUnchecked from '@material-ui/icons/RadioButtonUnchecked'
import { useStateValue } from '../../context/StateProvider'
import router from 'next/router'
const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user"
}

const WebcamCapture = () => {
    const webCamRef = useRef(null)
    const [, dispatch] = useStateValue();
    const capture = useCallback(() => {
        const imageSrc = webCamRef.current.getScreenshot();
        dispatch({

            type: "SET_CAMERA_IMAGE",
            payload: imageSrc

        })
        router.push('/preview')
    }, [webCamRef])
    return (
        <>
            <div className='webcamCapture'>
                <Webcam
                    className="screen"
                    audio={false}
                    height={videoConstraints.height}
                    ref={webCamRef}
                    screenshotFormat="image/jpeg"
                    width={videoConstraints.width}
                    videoConstraints={videoConstraints}
                />
                <RadioButtonUnchecked className='webcamCapture__button'
                    fontSize="large"
                    onClick={capture} />
            </div>
        </>
    )
}

export default WebcamCapture
