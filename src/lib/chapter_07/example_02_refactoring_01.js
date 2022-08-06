// 7.1 레코드 캡슐화하기
// 예시: 중첩된 레코드 캡슐화하기
let customerData = {
	1920: {
		name: '마틴 파울러',
		id: '1920',
		usages: {
			2016: {
				1: 50,
				2: 55
				//나머지 달(month)은 생략
			},
			2015: {
				1: 70,
				2: 63
				//나머지 달(month)은 생략
			}
		}
	},
	38673: {
		name: '닐 포드',
		id: '38673'
		// 다른 고객 정보도 같은 형식으로 저장된다.
	}
};

function getRawDataOfCustomers() {
	return customerData;
}

function setRawDataOfCustomers(arg) {
	customerData = arg;
}

// 쓰기 예...
getRawDataOfCustomers()[customierID].usages[year][month] = amount;

// 읽기 예...
function compareUsage(customierID, laterYear, month) {
	const later = getRawDataOfCustomers()[customierID].usages[laterYear][month];
	const earlier = getRawDataOfCustomers()[customierID].usages[laterYear - 1][month];
	return { lateAmount: later, change: later - earlier };
}
