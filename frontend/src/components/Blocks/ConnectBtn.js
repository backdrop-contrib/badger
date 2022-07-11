import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "@mui/material";
import '@rainbow-me/rainbowkit/dist/index.css'

const ConnectBtn = () => {
    return ( 
        <ConnectButton.Custom>
            {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                mounted,
            }) => {
                return (
                <div
                    {...(!mounted && {
                    'aria-hidden': true,
                    'style': {
                        opacity: 0,
                        pointerEvents: 'none',
                        userSelect: 'none',
                    },
                    })}
                >
                    {(() => {
                    if (!mounted || !account || !chain) {
                        return (
                        <Button 
                            onClick={openConnectModal} 
                            variant="contained" 
                            sx={{display: 'flex', alignItems: 'center'}}
                        >
                            Connect
                        </Button>
                        );
                    }

                    if (chain.unsupported) {
                        return (
                        <button className="btn-control" onClick={openChainModal} type="button">
                            Wrong Network
                        </button>
                        );
                    }

                    return (
                        <div style={{ display: 'flex', gap: 12, height: '100%' }}>
                        <Button
                            onClick={openChainModal}
                            variant="contained"
                            sx={{ display: 'flex', alignItems: 'center' }}
                        >
                            {chain.hasIcon && (
                            <div
                                style={{
                                    background: chain.iconBackground,
                                    width: 12,
                                    height: 12,
                                    borderRadius: 999,
                                    overflow: 'hidden',
                                    marginRight: 4,
                                }}
                            >
                                {chain.iconUrl && (
                                <img
                                    alt={chain.name ?? 'Chain icon'}
                                    src={chain.iconUrl}
                                    style={{ width: 12, height: 12 }}
                                />
                                )}
                            </div>
                            )}
                            {chain.name}
                        </Button>

                        <Button 
                            onClick={openAccountModal} 
                            variant="contained"
                            sx={{}}>
                            {account.displayName}
                        </Button>
                        </div>
                    );
                    })()}
                </div>
                );
            }}
        </ConnectButton.Custom>
    )
}

export default ConnectBtn;