const ZombieFactory = artifacts.require("ZombieFactory");

module.exports = function(deployer) {
    deployer.deploy(ZombieFactory);
}
