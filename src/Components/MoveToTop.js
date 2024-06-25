import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineArrowUp } from "react-icons/ai";

const MoveToTop = () => {
    const [showButton, setShowButton] = useState(false);
    const path = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        // Show button when user scrolls below 400px
        const handleScroll = () => {
            if (window.pageYOffset > 400) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [path]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className={showButton ? "moveToTop show" : "moveToTop"}>
            <button onClick={scrollToTop} aria-label="Scroll to top">
                <AiOutlineArrowUp />
            </button>
        </div>
    );
};

export default MoveToTop;
