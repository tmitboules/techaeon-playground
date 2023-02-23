import React, { useState } from "react";
import edited from "./../../src/edited.json";
import { useLottie } from "lottie-react";


export default function useLottieAnimation() {

    const options = {
        animationData: edited,
        loop: false,
        autoplay: false
    };

    const { View, play, stop } = useLottie(options);

    const [isAnimationVisible, setIsAnimationVisible] = React.useState(false);

    return {
        isAnimationVisible,
        setIsAnimationVisible,
        options,
        View,
        play,
        stop
    };
}
