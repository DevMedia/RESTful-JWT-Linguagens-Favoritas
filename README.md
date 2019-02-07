# Aplicação back-end de linguagems favoritas
Para uma explicação completa sobre esse código confira a Série Autenticação com JWT no Node.js + Angular https://www.devmedia.com.br/jwt-json-web-tokens/

## Linguagens

### Nesse documento encontram-se os comandos para popular o banco de dados MongoDB com algumas linguagens

Para popular seu bando de dados abra seu terminal em linha de comando e digite :

```
mongo

use jwt-auth
```

Em seguida copie e cole o código provido a seguir e o seu banco estará populado:

```
db.linguagens.insert({
    "nome": "Javascript",
    "criadoPor": "Brendan Eich",
    "surgidoEm": 818035200,
    "ultimaVersao": 1.8,
    "usuarios": [

    ],
    "paradigmas": [
        "funcional",
        "orientado a protótipo",
        "imperativo",
        "scripts"
    ],
    "urlImagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
})

db.linguagens.insert({
    "nome": "Java",
    "criadoPor": "James Gosling e Sun Microsystems",
    "surgidoEm": 820454400,
    "ultimaVersao": 11,
    "usuarios": [

    ],
    "paradigmas": [
        "funcional",
        "orientado a objetos",
        "imperativo",
        "scripts",
        "imperativa",
        "estruturada",
        "genérica",
        "concorrente"
    ],
    "urlImagem": "https://www.bitmat.it/wp-content/uploads/2014/07/java-per-android-gratis.jpg"
})

db.linguagens.insert({
    "nome": "Python",
    "criadoPor": "Guido van Rossum",
    "surgidoEm": 667008000,
    "ultimaVersao": 3.7,
    "usuarios": [

    ],
    "paradigmas": [
        "funcional",
        "orientado a objeto",
        "imperativo"
    ],
    "urlImagem": "https://sg.fiverrcdn.com/photos/103432563/original/d94bc19bc26ca71f3ea122d65f41cd71151f765f.png?1508733843"
})

db.linguagens.insert({
    "nome": "TypeScript",
    "criadoPor": "Microsoft",
    "surgidoEm": 1349049600,
    "ultimaVersao": 2.6,
    "usuarios": [

    ],
    "paradigmas": [
        "funcional",
        "orientado a objetos",
        "imperativo",
        "scripts"
    ],
    "urlImagem": "https://coryrylan.com/assets/images/posts/types/typescript.png"
})

db.linguagens.insert({
    "nome": "PHP",
    "criadoPor": "Rasmus Lerdof",
    "surgidoEm": 802569600,
    "ultimaVersao": 7.2,
    "usuarios": [

    ],
    "paradigmas": [
        "procedural", "reflexão", "orientação a objetos", "funcional"
    ],
    "urlImagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png"
})

db.linguagens.insert({
    "nome": "Ruby",
    "criadoPor": "Yukihiro Matsumoto",
    "surgidoEm": 819504000,
    "ultimaVersao": 2.5,
    "usuarios": [

    ],
    "paradigmas": [
        "imperativa", "reflexão", "orientação a objetos", "funcional"
    ],
    "urlImagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/300px-Ruby_logo.svg.png"
})

db.linguagens.insert({
    "nome": "Elixir",
    "criadoPor": "José Valim",
    "surgidoEm": ,
    "ultimaVersao": 1.7,
    "usuarios": [

    ],
    "paradigmas": [
        "funcional", "concorrente", "distribuída"
    ],
    "urlImagem": "https://pbs.twimg.com/profile_images/683949209050046464/-MWyJCb1.png"
})

db.linguagens.insert({
    "nome": "Delphi",
    "criadoPor": "",
    "surgidoEm": 791596800,
    "ultimaVersao": 10.2,
    "usuarios": [

    ],
    "paradigmas": [
        "procedural",
        "orientado a objeto",
        "imperativo",
        "scripts",
        "imperativa",
        "baseada em componente",
        "genérica",
        "orientada a eventos"
    ],
    "urlImagem": "https://pbs.twimg.com/profile_images/561991175712681986/xwj7aiIf_400x400.png"
})

db.linguagens.insert({
    "nome": "C#",
    "criadoPor": "Microsoft",
    "surgidoEm": 962409600,
    "ultimaVersao": 7.2,
    "usuarios": [

    ],
    "paradigmas": [
        "estruturada",
        "imperativa",
        "concorrente",
        "funcional",
        "genérica",
        "orientada a eventos",
        "orientada a objetos" ,
        "reflexiva"
    ],
    "urlImagem": "https://www.codesai.com/assets/csharp_logo.svg"
})


```
