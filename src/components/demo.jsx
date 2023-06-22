import React from "react";
import LazyLoad from "react-lazyload";

export const Demo = () => {
    return (
        <div id="demo">
            <LazyLoad once>
                <video autoPlay loop muted playsInline>
                    <source src="/video/video.mp4" type="video/mp4" />
                </video>
            </LazyLoad>
        </div>
    );
};
