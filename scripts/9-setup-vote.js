import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0xFf817008CA4F6240dFbe3eda09e031255516abBc"
);
const voteModule = sdk.getVoteModule(
  "0x8Df45986Cc83eBA3A8039218ed8c050bB0d10939"
);

const setupVote = () => {
  tokenModule
    .grantRole("minter", voteModule.address)
    .then((_) =>
      console.log("Gave vote module permision to act on token module")
    )
    .catch((error) => {
      console.error("Failed to give vote module permission on token module");
      process.exit(1);
    })
    .then((_) => {
      return tokenModule.balanceOf(process.env.WALLET_ADDRESS);
    })
    .then((ownedTokenBalance) => {
      const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
      const percent90 = ownedAmount.div(100).mul(90);

      return tokenModule.transfer(voteModule.address, percent90);
    })
    .then((_) =>
      console.log("WOOO successful transfer of tokens to vote module")
    )
    .catch((error) =>
      console.error("Failed to transfer token to vote module,", error)
    );
};

setupVote();