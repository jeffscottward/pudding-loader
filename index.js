var Pudding = require('ether-pudding');
var PuddingGenerator = require('ether-pudding/generator');

module.exports = function(compiledSolObj) { 

	this.cacheable();

	var classContracts = "";
	
	for (var contractName in compiledSolObj.contracts){

		console.log(contractName);

		var inputCompiled = compiledSolObj.contracts[contractName];
		
		var contractInterface   = inputCompiled.interface;
		var contractBytecode    = inputCompiled.bytecode;

		var whiskyInfo = Pudding.whisk(contractInterface, contractBytecode);

		whiskyInfo.load(Pudding);

	 	classContracts += PuddingGenerator.generate(contractName, whiskyInfo);
	}

	return classContracts; 
}