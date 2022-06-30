var http = require('http');
var fs = require('fs');

http
	.createServer(function (req,res) {
		// const text = fs.readFileSync('./content/big.txt', 'utf8');
		// res.end(text);

		//In the first method we are sending data as one big file
		//While in the second we are sending data by chunks

		const fileStream = fs.createReadStream('./content/big.txt','utf8');
		fileStream.on('open', () => {
			fileStream.pipe(res);
		})
		fileStream.on('error', (err) => {
			res.end(err);
		})
	})
	.listen(5000);