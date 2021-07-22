// SPDX-License-Identifier: MIT

pragma solidity >=0.6.2 <0.8.0;
pragma abicoder v2;

import "./ERC721Rarible.sol";
import "@openzeppelin/contracts/proxy/IBeacon.sol";
import "@openzeppelin/contracts/proxy/BeaconProxy.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @dev This contract is for creating proxy to access ERC721Rarible token.
 *
 * The beacon should be initialized before call ERC721RaribleFactory constructor.
 *
 */
contract ERC721RaribleFactory is Ownable {
    IBeacon public beacon;

    event Create721RaribleProxy(BeaconProxy proxy);

    constructor(IBeacon _beacon) {
        beacon = _beacon;
    }

    function createToken(string memory _name, string memory _symbol, string memory baseURI, string memory contractURI) external {
        BeaconProxy beaconProxy = new BeaconProxy(address(beacon), "");
        ERC721Rarible token = ERC721Rarible(address(beaconProxy));
        token.__ERC721Rarible_init(_name, _symbol, baseURI, contractURI);
        token.transferOwnership(_msgSender());
        emit Create721RaribleProxy(beaconProxy);
    }
}
