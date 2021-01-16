import { Component,Prop, h } from '@stencil/core';
import { VimeoPlayer } from '../functional-componets/vimeo-player';
import { YoutubePlayer } from '../functional-componets/youtube-player';

const VIDEO_PROVIDER = {
    YOUTUBE : "youtube",
    VIMEO: "vimeo"
}


@Component({
    tag: 'video-player',
    styleUrl: 'video-player.css'
})



export class VideoPlayer {

    @Prop() source : string = "";
    @Prop() provider: string= VIDEO_PROVIDER.YOUTUBE;
    
    render() {

        if(!this.source){
            return <div>No sorurce video</div>
        }

        return(
                <div class="b-video">
                {
                    this.provider ===VIDEO_PROVIDER.YOUTUBE &&
                   <YoutubePlayer source={this.source}></YoutubePlayer>
                }
                {
                    this.provider ===VIDEO_PROVIDER.VIMEO &&
                    <VimeoPlayer source={this.source}></VimeoPlayer>
                }
                </div>

        );


       
    }
}