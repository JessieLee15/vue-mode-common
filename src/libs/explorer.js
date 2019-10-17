
function is360se(){
    var where = "suffixes", value = "dll", name = "description", nameReg = /fancy/;
    var mimeTypes = window.navigator.mimeTypes, i;
    for (i in mimeTypes) {
        if (mimeTypes[i][where] == value) {
            if (nameReg.test(mimeTypes[i][name])) return false;
        }
    }
    return true;
}
export const getExplorer= function () {
	var explorer = window.navigator.userAgent ;
	//ie 
	if (explorer.indexOf("MSIE") >= 0) {
		return 'ie'
	}
	//firefox 
	else if (explorer.indexOf("Firefox") >= 0) {
		return 'Firefox'
	}
	//Chrome
	else if(explorer.indexOf("Chrome") >= 0){

		return 'Chrome';
		// return is360se()?'360':'Chrome'
	}
	//Opera
	else if(explorer.indexOf("Opera") >= 0){
		return 'Opera'
	}
	//Safari
	else if(explorer.indexOf("Safari") >= 0){
		return 'Safari'
	}
}