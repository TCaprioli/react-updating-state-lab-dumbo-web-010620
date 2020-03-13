// Code YouTubeDebugger Component Here
// Code DigitalClicker Component Here
import React, {Component} from 'react'

class YouTubeDebugger extends Component{
    state={errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {resolution: '1080p'}
        }}
        
        
        changeBitrate=()=>{
            let {bitrate} = this.state.settings
            let {resolution} = this.state.settings.video

            bitrate === 8 ?

            this.setState({settings: {bitrate: 12,
                video: {resolution: resolution} }})
            :
            this.setState({settings: {bitrate: 8,
                video: {resolution: resolution} }})
        }

        changeResolution=()=>{
            let {resolution} = this.state.settings.video
            let {bitrate} = this.state.settings

            resolution === '1080p' ?

            this.setState({settings: {bitrate: bitrate,
                video: {resolution: '720p'} }})
            :
            this.setState({settings: {bitrate: bitrate,
                video: {resolution: '1080p'} }})
        }

    render(){
        return(
            <div>
                <button className="bitrate" onClick={this.changeBitrate}>.bitrate</button>
                <button className="resolution" onClick={this.changeResolution}>.resolution</button>
            </div>

        )
    }
}

export default YouTubeDebugger