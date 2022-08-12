// 11.2 함수 매개변수화하기
function baseCharge(usage) {
	if (usage < 0) return usd(0);
	const amount = bottomBand(usage) * 0.03 + withinBand(usage) * 0.05 + topBand(usage) * 0.07;
	return usd(amount);
}

function bottomBand(usage) {
	return Math.min(usage, 100);
}

function withinBand(usage) {
	return usage > 100 ? Math.min(usage, 200) - 100 : 0;
}

function topBand(usage) {
	return usage > 200 ? usage - 200 : 0;
}