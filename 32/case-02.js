/**
 * JavaScript의 배열은 객체다
 */
const arr = [1, 2, 3];

if (arr.length) {
	console.log('배열 확인');
}

if (arr instanceof Array) {
	console.log('배열 확인');
}
