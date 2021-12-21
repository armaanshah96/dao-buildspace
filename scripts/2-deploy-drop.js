import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x8f7aD8c817091d00511B33f14cbfe6e719f0389e");
(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "StankDAO Membership",
      description: "Original stank for friends with resting stank face",
      image: readFileSync("scripts/assets/stank-member.png"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log(
      "Successfully deployed bundle drop module, address:",
      bundleDropModule.address
    );

    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata()
    );
  } catch (error) {
    console.log("failed to deploy bundle drop module", error);
  }
})();
