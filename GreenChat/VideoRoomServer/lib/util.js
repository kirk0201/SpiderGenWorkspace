
exports = module.exports = 
{
};

//from 숫자 부터 count 개수 만큼 범위의 랜덤 정수를 리턴한다.
//getRndInt(2,5) -> 2부터 5개... 2,3,4,5,6 사이...
exports.getRndInt = function(from, count)
{
	return Math.floor(Math.random() * count) + from;
};

exports.shuffleArray = function(array)
{
	function comp() { return Math.random()*2-1; }
	
	array.sort(comp);
	array.sort(comp);
	array.sort(comp);
};
