// 11.9 함수를 명령으로 바꾸기
function score(candidate, medicalExam, scoringGuide) {
	return new Scorer(candidate).execute(medicalExam, scoringGuide);
}

class Scorer {
	constructor(candidate) {
		this._candidate = candidate;
	}

	execute(medicalExam, scoringGuide) {
		let result = 0;
		let healthLevel = 0;
		let hightMedicalRiskFlag = false;

		if (medicalExam.isSmoker) {
			healthLevel += 10;
			hightMedicalRiskFlag = true;
		}
		let certificationGrade = 'regular';
		if (scoringGuide.stateWithLowCertification(this._candidate.originState)) {
			certificationGrade = 'low';
			result -= 5;
		}
		// 비슷한 코드가 한참 이어짐
		result -= Math.max(healthLevel - 5, 0);
		return result;
	}
}
