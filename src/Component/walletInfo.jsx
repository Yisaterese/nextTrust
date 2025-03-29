import { useWallet } from '@suiet/wallet-kit';

function WalletStatus() {
    const wallet = useWallet();

    if (wallet.status === 'connected') {
        return <div>Connected to {wallet.name}</div>;
    }

    return <div>Not connected</div>;
}

export default WalletStatus;
