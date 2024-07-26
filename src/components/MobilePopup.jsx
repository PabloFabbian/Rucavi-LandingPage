import React, { useEffect, useState } from "react";

const MobilePopup = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 820);
    const [showPopup, setShowPopup] = useState(isMobile);

    useEffect(() => {
        const handleResize = () => {
            const isMobileDevice = window.innerWidth < 820;
            setIsMobile(isMobileDevice);
            setShowPopup(isMobileDevice);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (showPopup) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        // Limpia la clase al desmontar el componente
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [showPopup]);

    if (!showPopup) return null;

    return (
        <div className="popupContainer">
            <div className="popupContent border border-2 border-violet-400">
                <h2 className="pb-2 font-semibold">¡Gracias por elegirnos!</h2>
                <p>La versión móvil de esta página aún está en desarrollo.</p>
                <p className="pb-3">Por favor, acceda desde un PC de escritorio o una laptop para una mejor experiencia.</p>
                <button
                    className="rounded-3xl bg-violet-300 px-4 py-1 border border-2 border-violet-400"
                    onClick={() => setShowPopup(false)}
                >
                    Continuar
                </button>
            </div>
        </div>
    );
};

export default MobilePopup;