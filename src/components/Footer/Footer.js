import { FooterWrapper } from "./FooterStyles";

const Copyright = () => {
    const currentYear = new Date().getFullYear();

    return (
        <FooterWrapper>
            <p>&copy; {currentYear} BytePulse. All Rights Reserved.</p>
            <p>
                Built with <span>❤️</span> for the community. <br />
                Follow us on{" "}
                <a href="https://x.com/BytePulse1" target="_blank" rel="noopener noreferrer">
                    X
                </a>{" "}
                and{" "}
                <a href="https://t.me/+alidq1Yn4OY3MmQy" target="_blank" rel="noopener noreferrer">
                    Telegram
                </a>
                .
            </p>
        </FooterWrapper>

    );
};

export default Copyright;
