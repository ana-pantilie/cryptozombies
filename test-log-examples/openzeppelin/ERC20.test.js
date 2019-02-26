const { BN, constants, expectEvent, shouldFail } = require('openzeppelin-test-helpers');
const { ZERO_ADDRESS } = constants;

const ERC20Mock = artifacts.require('ERC20Mock');

contract('ERC20', function ([_, initialHolder, recipient, anotherAccount]) {
  const initialSupply = new BN(100);
  beforeEach(async function () {
    this.token = await ERC20Mock.new(initialHolder, initialSupply);
  });

  describe('total supply', function () {
    it('returns the total amount of tokens', async function () {
      (await this.token.totalSupply()).should.be.bignumber.equal(initialSupply);
    });
  });
  });
