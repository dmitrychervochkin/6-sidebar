import "./logo.scss";

interface LogoProps {
    isHover?: boolean;
}

export const Logo = ({ isHover = true }: LogoProps) => {
    return (
        <div className="logo">
            <img
                className="logo__img"
                src="./shield-logo.png"
                style={{ width: isHover ? "40px" : "55px" }}
            />
            {isHover && <div className="logo__title">Docket</div>}
        </div>
    );
};
