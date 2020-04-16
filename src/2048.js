const data = [
	[2, 0, 2, 2],
	[2, 2, 0, 2],
	[0, 2, 0, 0],
	[2, 0, 0, 0],
];
const jumpVertical = (data, row, col, val) => {
	let next = col + val;
	if (val === -1 && next < 0 || val === 1 && next > 3) return 1;
	if (data[col][row] === 0) return 1;
	if (data[next][row] === 0) {
		data[next][row] = data[col][row];
		data[col][row] = 0;
	} else if (data[next][row] === data[col][row]) {
		data[next][row] = 2 * data[col][row];
		data[col][row] = 0;
		return 1;
	} else {
		return 1
	}
	return jumpVertical(row, next, val)
}

const show = (data) => {
	data.map(i => {
		console.log(i.join(' '));
	})
}
const convertDown = (data) => {
	for (let row = 3; row >= 0; row--) {
		for (let col = 2; col >= 0; col--) {
			jumpVertical(row, col, 1)
		}
	}
}
const convertUp = (data) => {
	for (let row = 3; row >= 0; row--) {
		for (let col = 1; col <= 3; col++) {
			jumpVertical(row, col, -1)
		}
	}
}
const coreHandle = (data, data, row, col, next) => {
	if (data[row][col] === 0) return 1;
	if (data[row][next] === 0) {
		data[row][next] = data[row][col];
		data[row][col] = 0;
	} else if (data[row][next] === data[row][col]) {
		data[row][next] = 2 * data[row][col];
		data[row][col] = 0;
		return 1;
	} else {
		return 1
	}
}
const jumpLeft = (data, row, col) => {
	let next = col - 1;
	if (next < 0) return 1;
	if (coreHandle(data, row, col, next)) return 1;
	return jumpLeft(row, next)
}
const jumpRight = (data, row, col) => {
	let next = col + 1;
	if (next > 3) return 1;
	if (coreHandle(data, row, col, next)) return 1;
	return jumpRight(row, next)

}
const convertLeft = (data) => {
	for (let row = 3; row >= 0; row--) {
		for (let col = 1; col <= 3; col++) {
			jumpLeft(row, col, -1)
		}
	}
}

const convertRight = (data) => {
	for (let row = 3; row >= 0; row--) {
		for (let col = 2; col >=0; col--) {
			jumpRight(row, col)
		}
	}
}
const randomInsert = (data) => {
	const emptyPotion = [];
	for (let row = 3; row >= 0; row--) {
		for (let col = 3; col >=0; col--) {
			if(!data[row][col]) {
				emptyPotion.push({row,col})
			}
		}
	}
	const numEmpty = emptyPotion.length-1;
	const ran = Math.floor(Math.random() * numEmpty);
	const indexRand = emptyPotion[ran];
	data[[indexRand.row]][[indexRand.col]] = 2
} 

show();
console.log('innnnnnnnnnnnn')
randomInsert()
show();

// convertDown();
// show();

// console.log('-------------------1 ========================')
// convertUp();
// show();

console.log('-------------------2 ========================')
convertRight();

show();

console.log('-------------------final ========================')