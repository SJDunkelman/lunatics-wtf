import React, {useRef, useState} from "react";
import NavigationBar from "../components/NavigationBar";
import Layout from "../components/Layout";
import {Link} from "gatsby";
import Web3Modal from "web3modal";
import { providers, Contract } from "ethers";
import {StaticImage} from "gatsby-plugin-image";


function MintPage (){
    const terraGradient = "text-transparent bg-clip-text bg-gradient-to-tr from-terra-blue via-terra-blue to-terra-yellow";
    const onHover = "hover:drop-shadow-sm";

    // Web3
    const [walletConnected, setWalletConnected] = useState(false);
    const [mintedNFT, setMintedNFT] = useState(false);
    const [loading, setLoading] = useState(false);
    const [numberMinted, setNumberMinted] = useState(0);
    const web3ModalRef = useRef();

    //   Returns a Provider or Signer object representing the Ethereum RPC with or without the signing capabilities of
    //   metamask attached
    const getProviderOrSigner = async (needSigner = false) => {
        // Connect to Metamask
        // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
        const provider = await web3ModalRef.current.connect();
        const web3Provider = new providers.Web3Provider(provider);

        // If user is not connected to the Rinkeby network, let them know and throw an error
        const { chainId } = await web3Provider.getNetwork();
        if (chainId !== 4) {
            window.alert("Change the network to Rinkeby");
            throw new Error("Change network to Rinkeby");
        }

        if (needSigner) {
            const signer = web3Provider.getSigner();
            return signer;
        }
        return web3Provider;
    };

    /**
     * addAddressToWhitelist: Adds the current connected address to the whitelist
     */
    const addAddressToWhitelist = async () => {
        try {
            // We need a Signer here since this is a 'write' transaction.
            const signer = await getProviderOrSigner(true);
            // Create a new instance of the Contract with a Signer, which allows
            // update methods
            const whitelistContract = new Contract(
                WHITELIST_CONTRACT_ADDRESS,
                abi,
                signer
            );
            // call the addAddressToWhitelist from the contract
            const tx = await whitelistContract.addAddressToWhitelist();
            setLoading(true);
            // wait for the transaction to get mined
            await tx.wait();
            setLoading(false);
            // get the updated number of addresses in the whitelist
            await getNumber();
            setJoinedWhitelist(true);
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <Layout>
            <div className="flex flex-col h-screen relative bg-mint">
                <nav className="w-full flex items-center justify-center py-12">
                    <div className="text-5xl flex space-x-6">
                        <div>
                             <a href="#"><i className={`fa-brands fa-twitter ${terraGradient} ${onHover}`} /></a>
                         </div>
                         <a href="https://www.opensea.io">
                             <StaticImage src="../images/opensea.png" alt="Opensea" className={`w-12 ${onHover}`}  />
                         </a>
                         <Link to="/">
                             <i className={`fa-solid fa-house cursor-pointer ${terraGradient} ${onHover}`} />
                         </Link>
                        </div>
                    </nav>
                <div className="flex flex-col justify-center items-center font-prata text-center">
                    <h1 className="text-4xl lg:text-5xl text-white">Welcome to Kwon Town</h1>
                    <div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MintPage;