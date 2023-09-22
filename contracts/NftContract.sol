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
        address owner;
        uint256 id;
    }

    Bot[] public bots;

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
            generation: uint16(_generation),
            owner: address(_owner),
            id: uint256(bots.length)
        });

        bots.push(_bot);
        uint256 newBotId = bots.length - 1;

        require(newBotId == uint256(uint32(newBotId)));

        emit Birth(_owner, newBotId, _materId, _paterId, _parts);

        _safeMint(_owner, newBotId);

        return newBotId;
    }

    function getCatalogue() public view returns (Bot[] memory) {
        return bots;
    }

    function getBot(uint256 tokenId) public view returns (
        uint256 parts,
        uint256 creationTime,
        uint256 materId,
        uint256 paterId,
        uint256 generation,
        address owner,
        uint256 id
    ) {
        Bot storage bot = bots[tokenId];

        parts = uint256(bot.parts);
        creationTime = uint256(bot.creationTime);
        materId = uint256(bot.materId);
        paterId = uint256(bot.paterId);
        generation = uint256(bot.generation);
        owner = address(ownerOf(tokenId));
        id = uint256(bot.id);
    }

    function synthesize(uint256 _paterId, uint256 _materId) public {
        require(ownerOf(_paterId) == _msgSender(), "The user doesn't own the token");
        require(ownerOf(_materId) == _msgSender(), "The user doesn't own the token");
        require(_paterId != _materId, "The robot can't be used twice");

        ( uint256 _paterParts,,,,uint256 paterGeneration,, ) = getBot(_paterId);
        ( uint256 _materParts,,,,uint256 materGeneration,, ) = getBot(_materId);

        uint256 newParts = _mixParts(_paterParts, _materParts);

        uint256 newGen = 0;
        if (paterGeneration < materGeneration) {
            newGen = materGeneration + 1;
            newGen /= 2;
        } else if (paterGeneration > materGeneration) {
            newGen = paterGeneration + 1;
            newGen /= 2;
        } else {
            newGen = materGeneration + 1;
        }

        _createBot(_materId, _paterId, newGen, newParts, _msgSender());
    }

    function _mixParts(uint256 _paterParts, uint256 _materParts) public returns (uint256) {
        uint256[8] memory materArr;
        uint256[8] memory paterArr;
        uint256 newParts = 0;


        for (uint256 i = 0; i <= 7; i++) {
            materArr[i] = _materParts % 100;
            paterArr[i] = _paterParts % 100;

            _materParts /= 100;
            _paterParts /= 100;
        }

        uint256 index = 7;

        for (uint256 i = 0; i < materArr.length; i++) {
            uint256[] memory pair = new uint256[](2);
            pair[0] = materArr[index];
            pair[1] = paterArr[index];
            
            if (pair[0] != 1 || pair[1] != 1) {
                // 10% chance of random mutation
                if (_generateRandomNumber(10) <= 4) {
                    newParts += pair[0];
                } else if (_generateRandomNumber(10) > 4 && _generateRandomNumber(10) <= 8) {
                    newParts += pair[1];
                } else {
                    newParts += _generateRandomNumber(100);
                }
            } else {
                newParts += _generateRandomNumber(100);
            } 

            if (i != 7) {
                newParts *= 100;
                index -= 1;
            }
        }

        return newParts;
    }

    uint seed = 0;

    function _generateRandomNumber(uint _modulus) internal returns(uint){
        seed++;
        return uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, seed))) % _modulus;
    }
}
