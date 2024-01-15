import ReactPlayer from "react-player";

function VideoPlayer({videoLink}) {
  return (
    <div className={{ position: "relative", paddingTop: "56.25%" }}>
      <ReactPlayer
        url={`<${videoLink}>`}
        // light={true}
        controls={true}
        className={{ position: "absolute", top: "0", left: "0" }}
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default VideoPlayer;
