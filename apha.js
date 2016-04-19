var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var initial = "";

function stackletters() {

	for (var i = 0; i < alphabet.length; i++) {
		// console.log(alphabet[i]);
		if ((i + 1) % 5 === 0) {
			initial += alphabet[i] + " " ;
	   	console.log(initial);
	   } else {
	   initial += alphabet[i];
	   console.log(initial);
	 }
	}
}


stackletters ();









// 	console.log(alphabet[0]);
// 	console.log(alphabet[0] + alphabet[1]);

