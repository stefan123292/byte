import {CommunityContainer, CommunityLink, Description, LinksContainer, Title} from "./CommunityStyles";
import telegramIcon from "../../assets/images/telegram.png";
import xIcon from "../../assets/images/twitter.png";
import pumpFunLogo from "../../assets/images/pump.png";

const Community = () => {
    return (
        <CommunityContainer>
            <Title>Join the BytePulse Community</Title>
            <Description>
                Be part of the most exciting and forward-thinking community! Whether you’re passionate about blockchain, AI, or decentralized innovation, BytePulse brings together tech enthusiasts, innovators, and creators to shape the future of digital progress.
            </Description>
            <LinksContainer>
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
            </LinksContainer>
        </CommunityContainer>
    );
};

export default Community;
