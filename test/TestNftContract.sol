// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.5.0 <0.9.0;
pragma experimental ABIEncoderV2;


import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/NftContract.sol";

contract TestNftContract {

  /* function testInitialBalanceUsingDeployedContract() public {
    NftContract meta = NftContract(DeployedAddresses.NftContract());

    uint expected = 10000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 NftContract initially");
  }

  function testInitialBalanceWithNewNftContract() public {
    NftContract meta = new NftContract();

    uint expected = 10000;

    Assert.equal(meta.getBalance(tx.origin), expected, "Owner should have 10000 NftContract initially");
  } */

}
