import React from "react"
import videoBG from './assets/CQ-bg.mp4'

export default function Main() {
    return (
        <body>
            <div class="bg-video-wrap">
                <video src={videoBG} autoPlay loop muted />
                <h1>Master the Casino</h1>
            </div>
        </body>
    )
}