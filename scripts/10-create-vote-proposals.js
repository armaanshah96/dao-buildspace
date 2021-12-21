import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0xFf817008CA4F6240dFbe3eda09e031255516abBc"
);
const voteModule = sdk.getVoteModule(
  "0x8Df45986Cc83eBA3A8039218ed8c050bB0d10939"
);

const createVoteProposals = async () => {
  const newAmount = 90_000;

  await voteModule
    .propose(
      "Should Stank mint " + newAmount + " STANK tokens for the treasury",
      [
        {
          nativeTokenValue: 0,
          transactionData: tokenModule.contract.interface.encodeFunctionData(
            "mint",
            [
              voteModule.address,
              ethers.utils.parseUnits(newAmount.toString(), 18),
            ]
          ),
          toAddress: tokenModule.address,
        },
      ]
    )
    .then((_) => console.log("😲 Created proposal for more tokens"))
    .catch((error) => {
      console.error("Failed to create proposal", error);
      process.exit(1);
    });

  const transferAmount = 500;
  await voteModule
    .propose(
      "Should we transfer " +
        transferAmount +
        " tokens to " +
        process.env.WALLET_ADDRESS,
      [
        {
          nativeTokenValue: 0,
          transactionData: tokenModule.contract.interface.encodeFunctionData(
            "transfer",
            [
              process.env.WALLET_ADDRESS,
              ethers.utils.parseUnits(newAmount.toString(), 18),
            ]
          ),
          toAddress: tokenModule.address,
        },
      ]
    )
    .then((_) =>
      console.log("😀 Created proposal to reward ourselves from treasury")
    )
    .catch((error) => console.error("Failed to create transfer proposal"));
};

await createVoteProposals();
