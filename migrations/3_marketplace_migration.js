const NftContract = artifacts.require("NftContract");
const Marketplace = artifacts.require("BotMarketplace");

module.exports = function (deployer) {
  deployer.deploy(Marketplace, NftContract.address);
};
