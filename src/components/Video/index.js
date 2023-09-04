import ReactPlayer from "react-player";
import "./videoPlay.css";

const VideoPlayer = () => {
    return (
        <div className="video-container">
            <h1>Video Sobre mim</h1>
            <ReactPlayer className="react-player"
                url={process.env.PUBLIC_URL + "/meuvideo.mkv"}
                controls={true}
                width="80%"
                height="80%"
                loop={true}
            />
        </div>
    )
}

export default VideoPlayer;