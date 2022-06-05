import React from "react";
import {useState} from "react";
import { ethers, BigNumber } from "ethers";
import lunaticsNFT from "../contracts/LunaticsNFT.json";

const lunaticsNFTAddress = "0x0dd15CBE47aBD2A4817AB9D200EfC148f01d7828";

const MintCard = ({ accounts, setAccounts }) => {

    const [mintAmount, setMintAmount] = useState(1);
    // const isConnected = Boolean(accounts[0]);
    const isConnected = true;

    const handleDecrement = () => {
        if(mintAmount <= 1) return;
        setMintAmount(mintAmount - 1);
    }

    const handleIncrement = () => {
        if(mintAmount >= 9) return;
        setMintAmount(mintAmount + 1);
    }

    async function handleMint(){
        try {
            if (!accounts[0]) {
                alert("Please connect wallet first!");
                return;
            }

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const nftContract = new ethers.Contract(
                '0x0dd15CBE47aBD2A4817AB9D200EfC148f01d7828',
                [
                    `function mint(uint256 quantity_) public `,
                ],
                signer
            );
            try {
                const response = await nftContract.mint(BigNumber.from(mintAmount));
                console.log('response: ', response);
            } catch (error) {
                console.log("error", error);
            }
        } catch (error) {
            console.log("error", error);
        }
    }

    return(
        <div>
            {isConnected ? (
                <div className="flex flex-col space-y-6">
                    <div className="flex space-x-4 text-4xl">
                        <button onClick={handleDecrement}><i className="fa-solid fa-minus" /></button>
                        <p>{mintAmount}</p>
                        <button onClick={handleIncrement}><i className="fa-solid fa-plus" /></button>
                    </div>
                    <button className="text-lg text-white bg-terra-blue rounded-lg py-2 px-4" onClick={handleMint}>
                        Mint
                    </button>
                </div>) : (
                <div>
                    <i className="fa-regular fa-arrow-up" />
                    <p className="text-xl">You must connect your MetaMask wallet to mint.</p>
                </div>
            )

            }
        </div>
    )
}

export default MintCard;