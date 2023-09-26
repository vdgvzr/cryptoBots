// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.1;

import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "./BotMarketplaceInterface.sol";
import "./NftContract.sol";

contract BotMarketplace is Ownable, NftContract {
    NftContract private _nftContract;

    struct Offer {
        address seller;
        uint256 price;
        uint256 index;
        uint256 tokenId;
        bool active;
    }

    Offer[] offers;

    mapping(uint256 => Offer) tokenIdToOffer;

    event MarketTransaction(string TxType, address owner, uint256 tokenId);

    function setBotContract(address _botContractAddress) public onlyOwner() {
        _nftContract = NftContract(_botContractAddress);
    }

    constructor(address _botContractAddress) {
        setBotContract(_botContractAddress);
    }

    function getOffer(uint256 _tokenId) public view returns (
        address seller,
        uint256 price,
        uint256 index,
        uint256 tokenId,
        bool active
    ) {
        Offer storage offer = tokenIdToOffer[_tokenId];

        return(
            offer.seller,
            offer.price,
            offer.index,
            offer.tokenId,
            offer.active
        );
    }

    function getAllTokenOnSale() public view  returns(uint256[] memory listOfOffers) {
        uint256 totalOffers = offers.length;

        if (totalOffers == 0) {
            return new uint256[](0);
        } else {
            uint256[] memory result = new uint256[](totalOffers);

            for (uint256 i = 0; i < totalOffers; i++) {
                if (offers[i].active == true) {
                    result[i] = offers[i].tokenId;
                }
            }

            return result;
        }
    }

    function setOffer(uint256 _price, uint256 _tokenId) public {
        require(_ownerOf(_tokenId) == _msgSender(), "You are not the owner of that NFT");
        require(tokenIdToOffer[_tokenId].active == false, "You can't sell an offer twice");
        require(_nftContract.isApprovedForAll(_msgSender(), address(this)), "Contract needs to be approved for all");

        Offer memory _offer = Offer({
            seller: _msgSender(),
            price: _price,
            index: offers.length,
            tokenId: _tokenId,
            active: true
        });

        tokenIdToOffer[_tokenId] = _offer;
        offers.push(_offer);

        emit MarketTransaction("Create Offer", _msgSender(), _tokenId);
    }

    function removeOffer(uint256 _tokenId) public {
        Offer memory _offer = tokenIdToOffer[_tokenId];

        require(_offer.seller == _msgSender(), "Must be token seller to remove offer");

        delete tokenIdToOffer[_tokenId];
        offers[_offer.index].active = false;

        emit MarketTransaction("Remove Offer", _msgSender(), _tokenId);
    }

    function buyBot(uint256 _tokenId) external payable {
        Offer memory _offer = tokenIdToOffer[_tokenId];

        require(msg.value == _offer.price, "Incorrect price");
        require(tokenIdToOffer[_tokenId].active == true, "Token is not active");

        delete tokenIdToOffer[_tokenId];
        offers[_offer.index].active = false;

        if (_offer.price > 0) {
            (bool success, ) = _offer.seller.call{value: _offer.price}("");
        }

        _nftContract.transferFrom(_offer.seller, _msgSender(), _tokenId);

        emit MarketTransaction("Buy", _msgSender(), _tokenId);
    }
}