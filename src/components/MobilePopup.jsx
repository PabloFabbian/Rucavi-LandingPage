import React, { useEffect, useState } from "react";

const MobilePopup = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1780);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const sessionKey = 'popupSessionKey';
        const currentSessionKey = performance.now().toString();
        const savedSessionKey = sessionStorage.getItem(sessionKey);

        const isMobileDevice = window.innerWidth < 1780;
        setIsMobile(isMobileDevice);

        if (isMobileDevice && (!savedSessionKey || savedSessionKey !== currentSessionKey)) {
            setShowPopup(true);
            sessionStorage.setItem(sessionKey, currentSessionKey);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const isMobileDevice = window.innerWidth < 1780;
            setIsMobile(isMobileDevice);

            if (isMobileDevice && !sessionStorage.getItem('popupShown')) {
                setShowPopup(true);
            } else {
                setShowPopup(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (showPopup) {
            document.body.classList.add("no-scroll");
            sessionStorage.setItem("popupShown", "true");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [showPopup]);

    if (!showPopup) return null;

    return (
        <div className="popupContainer">
            <div className="popupContent border border-2 border-violet-400">
                <h2 className="pb-2 font-semibold">¡Gracias por elegirnos!</h2>
                <p>La versión para dispositivos móviles de nuestra página sigue en desarrollo.</p>
                <p className="pb-3">Por favor, acceda desde un PC de escritorio o una laptop para una mejor experiencia.</p>
                <button
                    className="rounded-3xl bg-violet-300 px-4 py-1 border border-1 border-violet-400"
                    onClick={() => setShowPopup(false)}
                >
                    Continuar
                </button>
            </div>
        </div>
    );
};

export default MobilePopup;