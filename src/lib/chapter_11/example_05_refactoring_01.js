// 11.3 플래그 인수 제거하기

// 클라이언트 1
aShipment.deliveryDate = rushDeliveryDate(anOrder);

// 클라이언트 2
aShipment.deliveryDate = regularDeliveryDate(anOrder);

function deliveryDate(anOrder, isRush) {
	let result;
	let deliveryTime;
	if (anOrder.deliveryState === 'MA' || anOrder.deliveryState === 'CT')
		deliveryTime = isRush ? 1 : 2;
	else if (anOrder.deliveryState === 'NY' || anOrder.deliveryState === 'NH') {
		deliveryTime = 2;
		if (anOrder.deliveryState === 'NH' && !isRush) deliveryTime = 3;
	} else if (isRush) deliveryTime = 3;
	else if (anOrder.deliveryState === 'ME') deliveryTime = 3;
	else deliveryTime = 4;

	result = anOrder.placedOn.plusDays(2 + deliveryTime);
	if (isRush) result = result.minusDays(1);
	return result;
}

function rushDeliveryDate(anOrder) {
	return deliveryDate(anOrder, true);
}

function regularDeliveryDate(anOrder) {
	return deliveryDate(anOrder, false);
}
