const BigNumber = require('bignumber.js');
const ZombieFactory = artifacts.require("ZombieFactory");
ZombieFactory.numberFormat = 'BigNumber';

contract("ZombieFactory", function(accounts) {
    
    it("creates a new zombie with the name 'test'", async () => {
        let instance = await ZombieFactory.deployed();
        let result = await instance.createRandomZombie("test");
        let zombieId = new BigNumber(result.logs[0].args.zombieId);
        let newZombie = await instance.zombies.call(zombieId);
        // console.log(zombieId.toString());
        // console.log(newZombie);
        assert.equal(newZombie.name, "test");
    });
    
//    it("creates a new zombie with an empty name", async () => {
//        let instance = await ZombieFactory.deployed();
//        let result = await instance.createRandomZombie("");
//        // let zombieId = new BigNumber(result.logs[0].args.zombieId);
//        // let newZombie = await instance.zombies.call(zombieId);
//        // console.log(zombieId.toString());
//        // console.log(newZombie);
//        // assert.equal(newZombie.name, "");
//    });
});
