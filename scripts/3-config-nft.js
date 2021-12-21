import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xF6a4bb55cD92A3F2764Ce111c26406A4E38D6c6B"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Stank Members",
        description: "The stanks that make StankDAO",
        image: readFileSync("scripts/assets/stank-member.png"),
      },
      {
        name: "Evil Stank",
        description: "The stank of a snake",
        image: readFileSync("scripts/assets/evil-stank.png"),
      },
      {
        name: "Skanky Stank",
        description: "The stank is a skank",
        image: readFileSync("scripts/assets/skanky-stank.png"),
      },
      {
        name: "Sour Stank",
        description: "The stank of the sour",
        image: readFileSync("scripts/assets/sour-stank.png"),
      },
      {
        name: "Angry Stank",
        description: "The stank with a sneer",
        image: readFileSync("scripts/assets/angry-stank.png"),
      },
    ]);

    console.log(
      "Successfully deployed NFT batch, Stank members with individuals in the drop"
    );
  } catch (error) {
    console.error("failed to create the NFT batch", error);
  }
})();
