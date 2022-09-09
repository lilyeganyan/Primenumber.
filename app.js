const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end(isPrime(15));
})
server.listen(8080);

console.log("[app] Server started.");

function isPrime(a) 
{
    if (a <= 1)
    {
    return false;
    }

    else if (a == 2)
    {
        return true;
    }

    else if (a % 2 == 0)
    {
        return false;
    }
    else
    {
        var b = ((a-1)/2)
        for (var k = 3; k < b; k == k + 2 ){
            if (a % k == 0){
                return false;
            }
        }
        return true;
    }


}