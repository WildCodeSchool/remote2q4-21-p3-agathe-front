import { useState } from "react";

const useModal = (fade = false) => {
    const [isShowing, setIsShowing] = useState(false);
    const [className, setClassName] = useState("");
    let timeout;
    const fadeOutEnded = () => {
        clearTimeout(timeout);
        setIsShowing(false)
    };
    const fadeOut = () => {
        timeout = setTimeout(fadeOutEnded, 5000);
        setClassName("fade-out");
    };
    function toggle() {
        setIsShowing(!isShowing);
        if (fade && !isShowing) fadeOut();
        else setClassName("");
    }

    return {
        className,
        isShowing,
        toggle,
    };
};

export default useModal;
