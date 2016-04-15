var Pudding = require('ether-pudding');
var PuddingGenerator = require('ether-pudding/generator');

module.exports = function(compiledSolObj) {

	this.cacheable();

	var classContracts = "";

	if(Pudding.version    === undefined) { Pudding.version    = '0.0.0'; }

	for (var contractName in compiledSolObj.contracts){

		var inputCompiled = compiledSolObj.contracts[contractName];

	 	classContracts += PuddingGenerator.generate(contractName, inputCompiled, Pudding);
	}

	return classContracts;
}