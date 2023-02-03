const Exemplos = [
    {
        codigo:"ABC",
        modelo:"Camisa da Seleção do Brasil",
        marca:"Send Shirt Store",
        descricao:"Amarela 2022",
        preco: 120,
        imagens:[
            "http://d2r9epyceweg5n.cloudfront.net/stores/002/322/390/products/camisa-do-brasil-home-021-3b8ea42cae09a93ad716636128141738-640-0.jpeg",
            "https://s2.glbimg.com/Wtfe-LjFtK5hhCp_oyF1jkld0tM=/0x0:1154x1243/600x0/smart/filters:gifv():strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/I/H/Baq8svTgOVnWJpQvFMsQ/camisa-brasil-copa-2.jpeg",
        ],
        promocao:false
    },
    {
        codigo:"CDE",
        modelo:"Camisa da Seleção do Brasil",
        marca:"Send Shirt Store",
        preco: 120,
        descricao:"Azul 2022",
        imagens:[
            "http://d2r9epyceweg5n.cloudfront.net/stores/002/313/658/products/c2bec6571-d7d5027f61d9c0df6a16622935830432-640-0.jpeg",
            "http://d3ugyf2ht6aenh.cloudfront.net/stores/002/110/993/products/a015ab5e-6c5d-4770-a00a-6040c1b3e8001-cee5a72858dcbd558116613936889566-640-0.jpeg",
        ],
        promocao:false
    },
    {
        codigo:"FGH",
        modelo:"Camisa da Seleção da Argentina",
        marca:"Send Shirt Store",
        preco: 120,
        descricao:"Atual Campeão do Mundo",
        imagens:[
            "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/249/553/products/camisa-argentina-i-2022-torcedor-3-estrelas-azul-e-branco-copa-do-mundo-2022-221-91ffa6d6b3cde694b316721617594266-640-0.webp",
            "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/663/605/products/dbb001b21-89a8c7bf117958e45d16575468283468-640-0.webp",
        ],
        promocao:true
    },
    {
        codigo:"IJK",
        modelo:"Camisa da Seleção da França",
        marca:"Send Shirt Store",
        preco: 120,
        descricao:"Atual Vice do Mundo",
        imagens:[
            "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/663/605/products/60d9b66e1-6d8279afa8d96dabe716673117947499-640-0.webp",
            "https://picsum.photos/800/800?random=4",
        ],
        promocao:true
    },
    {
        codigo:"LMN",
        modelo:"Camisa da Seleção da Inglaterra",
        marca:"Send Shirt Store",
        preco: 120,
        descricao:"Camisa preta e reluzente com detalhes de dragão",
        imagens:[
            "https://estilogringo.com.br/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-02-at-14.12.09.jpeg",
            "",
        ],
        promocao:false
    },
    {
        codigo:"OPQ",
        modelo:"Camisa do Palmeiras",
        marca:"Send Shirt Store",
        preco: 100,
        descricao:"Atualmente o campeão do Brasileirão",
        imagens:[
            "https://a-static.mlcdn.com.br/1500x1500/camisa-puma-palmeiras-ii-2021-infantil-branco-08/aesportiva1/400042867/66921cbae9aa07bc0ebb233671dcec69.jpeg",
            "",
        ],
        promocao:true
    },
    {
        codigo:"RST",
        modelo:"Camisa do Flamengo",
        marca:"Send Shirt Store",
        preco: 100,
        descricao:"Atualmente campeão da Libertadores",
        imagens:[
            "https://static.netshoes.com.br/produtos/camisa-flamengo-i-2021-sn-torcedor-adidas-masculina/02/NQQ-1178-002/NQQ-1178-002_zoom1.jpg?ts=1599854677",
            "https://picsum.photos/800/800?random=7",
        ],
        promocao:false
    },
    {
        codigo:"UVW",
        modelo:"Camisa do Real Madrid",
        marca:"Send Shirt Store",
        preco: 100,
        descricao:"Atual campeão da Champions",
        imagens:[
            "https://cdn.awsli.com.br/1000x1000/1891/1891643/produto/161589931/82fc5a6166.jpg",
            "https://cdn.iset.io/assets/56122/produtos/3386/camisa-real-madrid-2022-2023-mg-camisas-futebol.jpg",
        ],
        promocao:false
    },
    {
        codigo:"XYZ",
        modelo:"Camisa do Paris Saint Germain",
        marca:"Send Shirt Store",
        preco: 100,
        descricao:"Atual campeão da Ligue 1",
        imagens:[
            "https://cdn.iset.io/assets/56122/produtos/3195/camisa-feminina-psg-i-2022-2023-mg-camisas-futebol.jpg",
            "",
        ],
        promocao:false
    },
    {
        codigo:"ZYX",
        modelo:"Camisa do Manchester City",
        marca:"Send Shirt Store",
        preco: 100,
        descricao:"Atual campeão da Premier League",
        imagens:[
            "http://d2r9epyceweg5n.cloudfront.net/stores/002/090/372/products/medium-removebg-preview261-ee41d27afb5c10ea3016508357988328-640-0.png",
            "",
        ],
        promocao:true
    },
    {
        codigo:"JAS",
        modelo:"Camisa do Milan",
        marca:"Send Shirt Store",
        preco: 100,
        descricao:"Atual campeão da Serie A",
        imagens:[
            "https://cf.shopee.com.br/file/3296565397dd0212fd5559cbf4d42eb7",
            "",
        ],
        promocao:false
    },
    {
        codigo:"ASD",
        modelo:"Camisa do Bayern München",
        marca:"Send Shirt Store",
        preco: 100,
        descricao:"Atual campeão da Bundesliga",
        imagens:[
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTHC-v7hLeAtUe1v36zp4ATg1IhsljEO76MBVRVTqGc3iWgwkyWF1Z2e4vf0Trw7uwRu31tjoOXlsgU--mJqeqsX_mJHMBFXhg-pp8nuSvM&usqp=CAE",
            "",
        ],
        promocao:true
    },
    {
        codigo:"LHF",
        modelo:"Camisa do Porto",
        marca:"Send Shirt Store",
        preco: 100,
        descricao:"Atual campeão da Primeira Liga",
        imagens:[
            "http://d3ugyf2ht6aenh.cloudfront.net/stores/001/631/923/products/f5e44f261-0a80d00c0096e03ba016595517898804-640-0.webp",
            "http://futhold.com.br/wp-content/uploads/2022/07/0770e073-rotated.jpg",
        ],
        promocao:false
    },
    {
        codigo:"OWQ",
        modelo:"Sua camisa",
        marca:"Send Shirt Store",
        preco: 50,
        descricao:"Monte a sua camisa, personalize do jeito que você deseja, para criação de uniformes e outros planos. Preço por cada peça",
        imagens:[
            "https://www.imparprintbh.com.br/control/wa/catalogo_produtos/uploads/4d0b0cc08ad0586965947b0093f2a38d",
        ],
        promocao:true
    },
]

export default Exemplos