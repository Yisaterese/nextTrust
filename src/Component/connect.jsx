import { ConnectButton } from "@suiet/wallet-kit";

const Connect = () => {
    return (
        <div className="md:w-full">
            <nav>
                <ConnectButton>
                    <span>Connect</span>
                </ConnectButton>
            </nav>
        </div>
    );
};

export default Connect;
