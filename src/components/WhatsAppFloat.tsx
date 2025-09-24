import React from "react";

const WhatsAppFloat: React.FC = () => {
    return (
        <a href="https://wa.me/6281234567890" className="whatsapp-float" target="_blank" rel="noreferrer">
            <span className="label">Hubungi Kami</span>
            <div className="icon">
                <i className="fab fa-whatsapp"></i>
            </div>
        </a>
    )
}

export default WhatsAppFloat;