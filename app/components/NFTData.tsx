import { ethers } from 'ethers';
  
interface NFTDataProps {
    contractAddress: string;
    contractABI: string;
}
 
const NFTData: React.FC<NFTDataProps> = ({ contractAddress, contractABI }) => {

    const optimismRpcUrl = 'https://mainnet.optimism.io';
    const provider = new ethers.providers.JsonRpcProvider(optimismRpcUrl);

    //console.log("CONTRACT ADDRESS:", contractAddress);
    //console.log("CONTRACT ABI:", contractABI);
    //console.log("CONTRACT PROVIDER:", provider);

    const contract = new ethers.Contract(contractAddress, contractABI, provider);

    //console.log("CONTRACT:", contract);

    //contract.estimateGas();

    /*async function getTotalSupply() {
        try {
            const totalSupply = await contract.totalSupply();
            console.log("Total Supply: ", totalSupply.toString());
        } catch (error) {
            console.error("Error: ", error);
        }
    }*/
    
    return (
        null
    )
}

export default NFTData;