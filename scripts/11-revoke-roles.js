import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0xFf817008CA4F6240dFbe3eda09e031255516abBc"
);

const revokeRole = async () => {
  try {
    let roles = await tokenModule.getAllRoleMembers();
    console.log("👀 Existing roles right now:", roles);

    await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);
    roles = await tokenModule.getAllRoleMembers();
    console.log("🦋 Roles after revoking creator:", roles);
  } catch (error) {
    console.error("Failed to revoke role from ourself", error);
  }
};

await revokeRole()