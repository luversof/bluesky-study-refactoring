// 8.3 문장을 함수로 옮기기
function renderPerson(outStream, person) {
	const result = [];
	result.push(`<p>${person.name}</p>`);
	result.push(renderPhoto(person.photo));
	result.push(zznew(person.photo));
	return result.join('\n');
}

function photoDiv(p) {
	return ['<div>', zznew(p), '</div>'].join('\n');
}

function emitPhotoData(aPhoto) {
	const result = [];
	result.push(`<p>위치: ${aPhoto.location}</p>`);
	result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`);
	return result.join('\n');
}

function zznew(p) {
	return [`<p>제목: ${p.title}</p>`, emitPhotoData(p)].join('\n');
}
