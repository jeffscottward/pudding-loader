var PuddingGenerator = require('ether-pudding/generator');

module.exports = function(compiledSolObj) { 

	this.cacheable();

	var classContracts = "";
	
	for (var contractName in compiledSolObj.contracts){

		var compiledSolObj = inputCompiled.contracts[contractName];
		
		var contractInterface   = compiledSolObj.interface;
		var contractBytecode    = compiledSolObj.bytecode;

		var whiskyInfo = Pudding.whisk(contractInterface, contractBytecode);

	 	classContracts += PuddingGenerator.generate(contractName, whiskyInfo);
	}

	return classContracts; 
}