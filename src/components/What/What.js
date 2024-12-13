import {GalaxyWenWrapper} from "./WhatStyles";
import telegramIcon from "../../assets/images/telegram.png";
import xIcon from "../../assets/images/twitter.png";
import pumpFunLogo from "../../assets/images/pump.png";

const GalaxyWenInfo = () => {
    return (
        <GalaxyWenWrapper>
            {/* What is PixelGrid */}
            <h1 className="section-title">What is BytePulse?</h1>
            <p className="content">
                BytePulse isn’t just another cryptocurrency—it’s the heartbeat of the future. Powered by cutting-edge
                blockchain technology and driven by precision, BytePulse seamlessly connects the digital world with
                decentralized innovation. It’s more than a token—it’s a movement that empowers individuals, drives
                progress, and redefines what's possible in the digital age.
                Join the Pulse. Embrace the rhythm of innovation. Together, we’re creating a smarter, decentralized
                future—one block, one transaction, one revolution at a time.
            </p>

            {/* Call to Action Buttons */}
            <div className="buttons-container">
                <a href="https://t.me/+alidq1Yn4OY3MmQy" target="_blank" rel="noopener noreferrer">
                    <img src={telegramIcon} alt="Telegram"/>
                </a>
                <a href="https://x.com/BytePulse1" target="_blank" rel="noopener noreferrer">
                    <img src={xIcon} alt="X"/>
                </a>
                <a href="#pump-fun">
                    <img src={pumpFunLogo} alt="Pump Fun"/>
                </a>
            </div>
        </GalaxyWenWrapper>
    );
};

export default GalaxyWenInfo;
