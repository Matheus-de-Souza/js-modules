function sum (a, b) {
	return a + b;
}

// named export 
export function sub (a, b) {
	return a - b; 
};

function mult (a, b) {
	return a * b;
}

function div (a, b) {
	return a / b;
}

export {
	mult as multiplicacao,
	div
};

// Método principal
// Só pode ter um default por arquivo
export default sum;