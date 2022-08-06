// 7.1 레코드 캡슐화하기
// 예시: 간단한 레코드 캡슐화하기
const organization = { name: '애크미 구스베리', country: 'GB' };

result += `<h1>${organization.name}</h1>`; //읽기 예
organization.name = newName; // 쓰기 예
