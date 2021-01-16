import {FunctionalComponent, h} from '@stencil/core';

interface VimeoPlayerProps {
    source: string;
}

export const VimeoPlayer : FunctionalComponent<VimeoPlayerProps> = ( {source} ) => {

    return(
        <div>
            <h2>Vimeo</h2>
            <iframe width="560" 
            height="315"
            src={source} 
            frameborder="0">                  
            </iframe>

        </div>

    );

};