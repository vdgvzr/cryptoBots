const ConvertLib = artifacts.require("ConvertLib");
const NftContract = artifacts.require("NftContract");

module.exports = function (deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, NftContract);
  deployer.deploy(NftContract);
};
