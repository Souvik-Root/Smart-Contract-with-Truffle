const helloworld = artifacts.require("Helloworld");

contract("Helloworld", (accounts) => {
  // write tests

  it("constructor should set message", async () => {
    let instance = await helloworld.deployed();
    let message = await instance.message();
    assert.equal(message, "Hello world constructor!");
  });

  it("owner should be accounts[0]", async () => {
    let instance = await helloworld.deployed();
    let owner = await instance.owner();
    assert.equal(owner, accounts[0]);
  });

  it("message changes on setmessage function call", async () => {
    let instance = await helloworld.deployed();
    await instance.setMessage("Hello!");
    let message = await instance.message();
    assert.equal(message, "Hello!");
  });
});
