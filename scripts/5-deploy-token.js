import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x8f7aD8c817091d00511B33f14cbfe6e719f0389e");

(async () => {
  app
    .deployTokenModule({
      name: "StankDAO Governance Token",
      symbol: "STANK",
    })
    .then((tokenModule) =>
      console.log(
        "✅ Successfully deployed token module, address:",
        tokenModule.address
      )
    )
    .catch((error) => console.error("Failed to deploy token module", error));
})();
