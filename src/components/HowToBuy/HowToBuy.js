import {CTAButton, HowToBuyContainer, Step, StepsContainer, Title} from "./HowToBuyStyles";
import pumpFunLogo from "../../assets/images/pump.png";

const HowToBuy = () => {
    return (
        <HowToBuyContainer>
            <Title>How to Buy BytePulse</Title>
            <StepsContainer>
                <Step>1. Go to <strong>pump.fun</strong>, the trusted platform for buying BytePulse.</Step>
                <Step>2. Connect your crypto wallet to the platform.</Step>
                <Step>3. Search for <strong>BytePulse (BYP)</strong> using the token symbol.</Step>
                <Step>4. Follow the steps to finalize your purchase securely.</Step>
                <Step>5. Hold BytePulse and join the movement to shape the future of decentralized innovation!</Step>
            </StepsContainer>
            <CTAButton href="#pump-fun" target="_blank" rel="noreferrer">
                <div className="buttos-container">
                    <img src={pumpFunLogo} alt="Decentralized Exchange" />
                </div>
            </CTAButton>
        </HowToBuyContainer>

    );
};

export default HowToBuy;
