export default function VideoBackground() {
    return (
        <video autoPlay muted loop playsInline poster="./bg.jpg" id="myVideo">
            <source src="./bg_loop.mp4" type="video/mp4" />
        </video>
    )
}