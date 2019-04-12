function Player(score) {
	this.score = score;
}

const p1 = new Player(100);
const p2 = Player(120);

console.log('score - ', score) // ?
console.log('p1.score - ', p1.score) // ?
console.log('p2.score - ', p2.score) // ?