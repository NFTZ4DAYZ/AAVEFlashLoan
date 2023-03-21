const {expect, assert} = require("chai");
const hre = require("hardhat");

const {DAI, DAI_WHALE, POOL_ADDRESS_PROVIDER} = require("../config");

describe("Flash Loans", function () {
  it("Should take a flash loan & be able to return it", async function () {
    const FlashLoanExample = await hre.ethers.getContractFactory(
      "FlashLoanExample"
    );

    const flashLoanExample = await FlashLoanExample.deploy(

      POOL_ADDRESS_PROVIDER
    );
    await flashLoanExample.deployed();

    const token = await ethers.getContractAt("IERC20", DAI);

    const BALANCE_AMOUNT_DAI = ethers.utils.parseEther("2000");
    await hre.network.provider.request({
      method: "hardhat_impersonateAccount",
      params: [DAI_WHALE],
    });
    const signer = await ethers.getSigner(DAI_WHALE);
    await token
    .connect(signer)
    .transfer(flashLoanExample.address, BALANCE_AMOUNT_DAI);


     const txn = await flashLoanExample.createFlashLoan(DAI, 10000);
     await txn.wait();

     const remainingBalance = await token.balanceOf(flashLoanExample.address);

     expect(remainingBalance.lt(BALANCE_AMOUNT_DAI)).to.equal(true);
  });
});