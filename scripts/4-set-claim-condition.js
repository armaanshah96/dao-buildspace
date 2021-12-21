import { ClaimConditionFactory } from "@3rdweb/sdk";
import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
  "0xF6a4bb55cD92A3F2764Ce111c26406A4E38D6c6B"
);

(async () => {
  const claimConditionFactory = bundleDrop.getClaimConditionFactory();

  claimConditionFactory.newClaimPhase({
    startTime: new Date(),
    maxQuantity: 20,
    maxQuantityPerTransaction: 1,
  });

  bundleDrop
    .setClaimCondition(0, claimConditionFactory)
    .then((_) => console.log("✅ Successfully set claim condition"))
    .catch((error) => console.error("Failed to set claim condition", error));
})();
