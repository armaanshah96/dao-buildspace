import sdk from "./1-initialize-sdk.js";
import { ethers } from "ethers";

const bundleDropModule = sdk.getBundleDropModule(
  "0xF6a4bb55cD92A3F2764Ce111c26406A4E38D6c6B"
);

const tokenModule = sdk.getTokenModule(
  "0xFf817008CA4F6240dFbe3eda09e031255516abBc"
);

(async () => {
  try {
    const walletAddresses = await bundleDropModule.getAllClaimerAddresses("0");

    if (walletAddresses.length === 0) {
      console.log("🙀 No NFTs have been claimed!!");
      process.exit(0);
    }

    const airdropTargets = walletAddresses.map((address) => {
      const randomAmount = Math.floor(Math.random() * 10 + 1);
      console.log("-> Going to airdrop", randomAmount, "tokens to", address);

      return {
        address,
        amount: ethers.utils.parseUnits(randomAmount.toString(), 18),
      };
    });

    console.log("🎃 starting airdrop wooo");
    await tokenModule.transferBatch(airdropTargets);
    console.log("🤑 Successfully airdropped tokens to all holders!");
  } catch (error) {
    console.error("Failed to airdrop governance tokens", error);
  }
})();
