// importando os módulos
const { write } = require('fs');
const https = require('http');

// configuraçao pra acessar o server
const localhost = '127.0.0.1';
const port = 5000;

// configuraçao do server
const server = https.createServer((req, res) => {

  //url que vai ser inserida pelo usuario
  let url = req.url;
  if (url == '/') {

    res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });

    // página principal
    res.write('<h2>Você está na garagem</h2>');
    res.end();

  } else if (url == '/veiculos') {

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    // página professores
    res.write('<h4>você está na página veiculos</h4>');
    res.write('<img>imagem do celta preto</img>');
    res.write('<p>carro: celta, fabricante: eu nao sei qual empresa faz o celta, ano: 2000, modelo: aaa, combustível: gasolina, cor: preto, preco: R$ 20.000,00</p>');
    res.write('<p>carro: fiat uno, fabricante: Fiat, ano: 2005, modelo: uno, combustivel: gasolina, cor: branco, preco: R$ 10.000,00</p>');
    res.write('carro: ferrari, fabricante: Ferrari, ano: 2013, modelo: venom, combustível: gasolina aditivada (para melhor desempenho), cor: vermelho, preco: R$ 3.000.000,01')

    res.end();

  } else {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    res.write('essa página não existe - erro 404');

    res.end();
  }
});
// msg que avisa se o server tá funcionando
server.listen(port, localhost, console.log('O server está funcionando'))