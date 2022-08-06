// 7.1 레코드 캡슐화하기
// 예시: 간단한 레코드 캡슐화하기
class Organization {
	constructor(data) {
		this._name = data.name;
		this._country = data.country;
	}

	set name(aString) {
		this._name = aString;
	}

	get name() {
		return this._name;
	}

	set country(aCountryCode) {
		this._country = aCountryCode;
	}

	get country() {
		return this._country;
	}
}

const organization = new Organization({ name: '애크미 구스베리', country: 'GB' });

function getOrganization() {
	return organization;
}

result += `<h1>${getOrganization().name}</h1>`; //읽기 예
getOrganization().name = newName; // 쓰기 예
