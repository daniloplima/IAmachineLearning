var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2018-03-16',
  iam_apikey: 'bzJPsKjoUDSVpL90QAgw3iLinSIohNV33b_Mh0aP9mwO',
  url: 'https://gateway.watsonplatform.net/natural-language-understanding/api',
});

const parameters = {
  text:
    'titulo: Duna. Uma estonteante mistura de aventura e misticismo, ecologia e política, este romance ganhador dos prêmios Hugo e Nebula deu início a uma das mais épicas histórias de toda a ficção científica. Duna é um triunfo da imaginação, que influenciará a literatura para sempre. Esta edição inédita, com introdução de Neil Gaiman, apresenta ao leitor o universo fantástico criado por Herbert e que será adaptado ao cinema por Denis Villeneuve, diretor de A chegada e de Blade Runner 2. Capa dura: 680 páginas Editora: Editora Aleph; Edição: 2ª (28 de abril de 2017) Idioma: Português ISBN-10: 857657313X ISBN-13: 978-8576573135',
  features: {
    entities: {
      model: '8dde3f87-075b-4486-a6df-3ca590a44b12',
      mentions: true,
      limit: 10,
    },
  },
};
naturalLanguageUnderstanding.analyze(parameters, function(err, response) {
  if (err) console.log('error:', err);
  else console.log(JSON.stringify(response, null, 2));
});
