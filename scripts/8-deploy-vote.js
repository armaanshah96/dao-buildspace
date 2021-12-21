import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
  "0x8f7aD8c817091d00511B33f14cbfe6e719f0389e"
);

(async () => {
  appModule
    .deployVoteModule({
      name: "StankDAO's Proposals",
      votingTokenAddress: "0xFf817008CA4F6240dFbe3eda09e031255516abBc",
      proposalStartWaitTimeInSeconds: 0,
      proposalVotingTimeInSeconds: 24 * 60 * 60,
      votingQuorumFraction: 1,
      minimumNumberOfTokensNeededToPropose: "0",
    })
    .then((voteModule) =>
      console.log(
        "😱 Successfully deployed voting module, address:",
        voteModule.address
      )
    )
    .catch((error) => console.error("Failed to deploy voting module", error));
})();
