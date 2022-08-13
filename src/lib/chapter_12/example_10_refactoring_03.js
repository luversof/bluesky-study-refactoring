// 12.11 슈퍼클래스를 위임으로 바꾸기
// 더 가다듬기
class CatalogItem {
	constructor(id, title, tags) {
		this._id = id;
		this._title = title;
		this._tags = tags;
	}

	get id() {
		return this._id;
	}

	get title() {
		return this._title;
	}

	get tags() {
		return this._tags;
	}
}

class Scroll {
	constructor(id, title, tags, dateLastCleaned) {
		this._id = id;
		this._catalogItem = new CatalogItem(null, title, tags);
		this._lastCleaned = dateLastCleaned;
	}

	needsCleaning(targetDate) {
		const threshold = this.hasTag('revered') ? 700 : 1500;
		return this.daysSinceLastCleaning(targetDate) > threshold;
	}

	daysSinceLastCleaning(targetDate) {
		return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
	}

	get id() {
		return this._id;
	}

	get title() {
		return this._catalogItem._title;
	}

	get tags() {
		return this._catalogItem._tags;
	}
}

// 스크롤 데이터 읽기...
const scrolls = aDocument.map(
	(record) =>
		new Scroll(
			record.id,
			record.catalogData.title,
			record.catalogData.tags,
			LocalDate.parse(record.lastCleaned)
		)
);
