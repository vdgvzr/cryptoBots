// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.1;

import "./ConvertLib.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "../node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";

contract NftContract is ERC721, Ownable {
    using SafeMath for uint256;
    using SafeMath for uint64;
    using SafeMath for uint32;
    using SafeMath for uint16;

    constructor() ERC721("CryptoBots", "CRB") {}

    event Birth(address owner, uint256 botId, uint256 materId, uint256 paterId, uint256 parts);

    struct Bot {
        uint256 parts;
        uint64 creationTime;
        uint32 materId;
        uint32 paterId;
        uint16 generation;
    }

    Bot[] bots;

    uint256 public constant CREATION_LIMIT_GEN0 = 10;
    uint256 public GEN0_COUNTER;

    function totalSupply() public view returns (uint) {
        return bots.length;
    }

    function viewCreateBotGen0(uint256 _parts) public view onlyOwner() returns (uint256, address) {
        return (_parts, _msgSender());
    }

    function createBotGen0(uint256 _parts) public onlyOwner() {
        require(GEN0_COUNTER < CREATION_LIMIT_GEN0);
        GEN0_COUNTER++;
        _createBot(0, 0, 0, _parts, _msgSender());
    }

    function _createBot(
        uint256 _materId,
        uint256 _paterId,
        uint256 _generation,
        uint256 _parts,
        address _owner
    ) internal returns (uint) {
        Bot memory _bot = Bot({
            parts: _parts,
            creationTime: uint64(block.timestamp),
            materId: uint32(_materId),
            paterId: uint32(_paterId),
            generation: uint16(_generation)
        });

        bots.push(_bot);
        uint256 newBotId = bots.length - 1;

        require(newBotId == uint256(uint32(newBotId)));

        emit Birth(_owner, newBotId, _materId, _paterId, _parts);

        _safeMint(_owner, newBotId);

        return newBotId;
    }

    function getBot(uint256 tokenId) public view returns (
        uint256 parts,
        uint256 creationTime,
        uint256 materId,
        uint256 paterId,
        uint256 generation,
        address owner
    ) {
        Bot storage bot = bots[tokenId];

        parts = uint256(bot.parts);
        creationTime = uint256(bot.creationTime);
        materId = uint256(bot.materId);
        paterId = uint256(bot.paterId);
        generation = uint256(bot.generation);
        owner = address(ownerOf(tokenId));
    }

    function synthesize(uint256 _paterId, uint256 _materId) public {
        require(ownerOf(_paterId) == _msgSender(), "The user doesn't own the token");
        require(ownerOf(_materId) == _msgSender(), "The user doesn't own the token");

        ( uint256 paterParts,,,,, ) = getBot(_paterId);
        ( uint256 _materParts,,,,uint256 materGeneration, ) = getBot(_materId);

        uint256 newParts = _mixParts(paterParts, _materParts);

        uint256 newGen = materGeneration + 1;

        _createBot(_materId, _paterId, newGen, newParts, _msgSender());
    }

    function _mixParts(uint256 _paterParts, uint256 _materParts) internal pure returns (uint256) {
        uint256 paterHalf = _paterParts / 10000000;
        uint256 materHalf = _materParts % 10000000;

        uint256 newParts = paterHalf * 10000000;
        newParts = newParts + materHalf;

        return newParts;
    }
}
