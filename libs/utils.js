

// sleep time expects milliseconds
function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


function normalizeAddress(address,maxLength){
	maxLength = 10;
	if(address == undefined)
		return "";
	address = address.replace(/(nº\s*[0-9])\w+/g,"");
	address = address.replace("nº", "");
	splitted = address.split(",");

	result = "";
	len = splitted.length > maxLength? maxLength : splitted.length;
	for(i = 0 ; i< len ; i++){
		
		if(!splitted[i].includes("/") && !splitted[i].includes("("))
			result += splitted[i]+",";
	}

	return result;
}

module.exports = {normalizeAddress: normalizeAddress, sleep:sleep}