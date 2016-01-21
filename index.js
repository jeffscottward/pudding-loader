var Pudding = require('ether-pudding');
var PuddingGenerator = require('ether-pudding/generator');

module.exports = function(compiledSolObj) { 

	this.cacheable();

	var classContracts = "";
	
	for (var contractName in compiledSolObj.contracts){

		console.log(contractName);

		var inputCompiled = compiledSolObj.contracts[contractName];
		
	 	classContracts += PuddingGenerator.generate(contractName, inputCompiled);
	}

	return classContracts; 
}