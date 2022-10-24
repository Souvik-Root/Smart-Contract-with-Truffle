const helloworld = artifacts.require("Helloworld");
const helloworld2 = artifacts.require("Helloworld2");

module.exports = function(deployer) {
    deployer.deploy(helloworld, "Hello world constructor!").then(async ()=>{
        let instance = await helloworld.deployed();
        let message = instance.message();
        return deployer.deploy(helloworld2,message )
    });
}