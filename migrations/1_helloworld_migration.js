const helloworld = artifacts.require("Helloworld");

module.exports = function(deployer) {
    deployer.deploy(helloworld, "Hello world constructor!");
}