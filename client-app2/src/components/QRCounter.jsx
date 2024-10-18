import { useEffect, useState } from "react"

export default function QRCounter() {

    const [qrCode, setQrCode] = useState([])

    const getQrCode = async () => {

        const urlWithProxy = "/api/v1";

        const response = await fetch(urlWithProxy)
        const result = await response.json()
        console.log(result);
        setQrCode(result)
    }

    useEffect(() => {
        getQrCode()
    }, [])

    return (
        <>
            {/* <button className="dashboard__btn" onClick={getQrCode}>Refresh</button> */}

            <button className="dashboard__btn" onClick={getQrCode}>
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor" height="200" width="200"><path fill="currentColor" d="M289.088 296.704h92.992a32 32 0 0 1 0 64H232.96a32 32 0 0 1-32-32V179.712a32 32 0 0 1 64 0v50.56a384 384 0 0 1 643.84 282.88 384 384 0 0 1-383.936 384 384 384 0 0 1-384-384h64a320 320 0 1 0 640 0 320 320 0 0 0-555.712-216.448z" id="mainIconPathAttribute"></path></svg>
                <span>Refresh</span>
            </button>

            <div className="qr__code__wrapper">
                <div className="card__counter total">
                    <span className="counter__label">Total Scans</span>
                    <span className="counter__number">{qrCode.total_clicks}</span>
                </div>

                <div className="card__counter unique">
                    <span className="counter__label">Unique Scans:</span>
                    <span className="counter__number">{qrCode.unique_clicks}</span>
                </div>

                <img src={qrCode.png} alt="" width={200} height="auto" />

            </div>

        </>
    )
}