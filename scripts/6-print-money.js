import sdk from "./1-initialize-sdk.js";
import { ethers } from "ethers";

const tokenModule = sdk.getTokenModule(
  "0xFf817008CA4F6240dFbe3eda09e031255516abBc"
);

(async () => {
  try {
    const amount = 10000;

    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);

    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();

    console.log(
      "😀 There are now",
      ethers.utils.formatUnits(totalSupply, 18),
      "$STANK available"
    );
  } catch (error) {
    console.error("Failed to mint governance tokens", error);
  }
})();
