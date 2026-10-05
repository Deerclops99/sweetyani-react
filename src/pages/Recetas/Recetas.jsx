import { Link } from "react-router-dom";
import "./Recetas.css";

const recetas = [
  {
    id: "cheesecake-de-frutilla",
    nombre: "Cheesecake de frutilla",
    emoji: "🍓",
    tono: "#ffd3e6",
    tiempo: "1 h 30 min + frío",
    porciones: "10 porciones",
    dificultad: "Media",
    descripcion:
      "Cremoso por dentro, base crocante y frutillas frescas arriba. El clásico de las mesas dulces.",
    ingredientes: [
      {
        grupo: "Base",
        items: ["200 g de galletitas dulces trituradas", "100 g de manteca derretida"],
      },
      {
        grupo: "Relleno",
        items: [
          "600 g de queso crema",
          "150 g de azúcar",
          "3 huevos",
          "200 g de crema de leche",
          "2 cucharadas de maicena",
          "1 cucharadita de esencia de vainilla",
        ],
      },
      {
        grupo: "Cobertura",
        items: ["250 g de frutillas", "3 cucharadas de azúcar"],
      },
    ],
    pasos: [
      "Mezclá las galletitas con la manteca y apretalas en el fondo de un molde desmontable de 22 cm. Llevá a la heladera 15 minutos.",
      "Batí el queso crema con el azúcar hasta que no tenga grumos. Agregá los huevos de a uno, después la crema, la maicena y la vainilla.",
      "Volcá el relleno sobre la base y horneá a 160 °C entre 50 y 60 minutos. El centro tiene que quedar apenas temblón.",
      "Apagá el horno, dejá la torta adentro con la puerta entreabierta 1 hora y después llevala a la heladera al menos 6 horas.",
      "Cociná las frutillas picadas con el azúcar a fuego bajo 10 minutos. Dejá enfriar y volcá sobre el cheesecake antes de servir.",
    ],
    truco:
      "Sacá el queso crema y los huevos de la heladera 1 hora antes: con los ingredientes a temperatura ambiente no se agrieta.",
    pedido: { texto: "¿Preferís que lo preparemos nosotros? Pedí tu cheesecake.", ruta: "/tortas" },
  },
  {
    id: "torta-de-chocolate-humeda",
    nombre: "Torta de chocolate húmeda",
    emoji: "🎂",
    tono: "#e8cdbd",
    tiempo: "1 h 15 min",
    porciones: "12 porciones",
    dificultad: "Fácil",
    descripcion:
      "Bizcochuelo de cacao que se queda húmedo varios días, con ganache para cubrir y rellenar.",
    ingredientes: [
      {
        grupo: "Bizcochuelo",
        items: [
          "220 g de harina",
          "300 g de azúcar",
          "75 g de cacao amargo",
          "1 ½ cucharadita de polvo de hornear",
          "1 ½ cucharadita de bicarbonato",
          "1 cucharadita de sal",
          "2 huevos",
          "240 ml de leche",
          "120 ml de aceite",
          "2 cucharaditas de vainilla",
          "240 ml de agua hirviendo",
        ],
      },
      {
        grupo: "Ganache",
        items: ["300 g de chocolate semiamargo", "300 g de crema de leche"],
      },
    ],
    pasos: [
      "Precalentá el horno a 180 °C y enmantecá dos moldes de 20 cm.",
      "Mezclá los secos en un bowl grande: harina, azúcar, cacao, polvo de hornear, bicarbonato y sal.",
      "Agregá los huevos, la leche, el aceite y la vainilla. Batí 2 minutos. Sumá el agua hirviendo: la mezcla queda bien líquida, es normal.",
      "Repartí en los moldes y horneá de 30 a 35 minutos, hasta que un palillo salga limpio. Dejá enfriar por completo.",
      "Calentá la crema sin que hierva, volcala sobre el chocolate picado, esperá 2 minutos y revolvé hasta que brille. Dejá espesar un poco, rellená y cubrí.",
    ],
    truco:
      "El agua hirviendo es la clave de la humedad. No la reemplaces por agua fría.",
    pedido: { texto: "¿Para un cumpleaños? Pedí tu torta personalizada.", ruta: "/tortas" },
  },
  {
    id: "brownies",
    nombre: "Brownies",
    emoji: "🍫",
    tono: "#d9bfae",
    tiempo: "45 min",
    porciones: "16 cuadrados",
    dificultad: "Fácil",
    descripcion:
      "Corteza fina y crujiente, centro húmedo y mucho chocolate. Se hacen en un solo bowl.",
    ingredientes: [
      {
        grupo: "Ingredientes",
        items: [
          "150 g de manteca",
          "200 g de chocolate semiamargo",
          "200 g de azúcar",
          "3 huevos",
          "100 g de harina",
          "30 g de cacao amargo",
          "1 cucharadita de vainilla",
          "1 pizca de sal",
        ],
      },
    ],
    pasos: [
      "Precalentá el horno a 180 °C y forrá con papel manteca un molde cuadrado de 20 cm.",
      "Derretí la manteca con el chocolate a baño maría o en el microondas de a 30 segundos. Dejá entibiar.",
      "Sumá el azúcar y los huevos de a uno, revolviendo bien. Agregá la vainilla.",
      "Incorporá la harina, el cacao y la sal tamizados, con movimientos envolventes. No batas de más.",
      "Horneá de 25 a 28 minutos. El centro tiene que quedar apenas húmedo. Dejá enfriar antes de cortar.",
    ],
    truco:
      "Para cortar cuadrados prolijos, enfrialos en la heladera 30 minutos y usá un cuchillo caliente.",
    pedido: { texto: "Sumá brownies a tu mesa dulce.", ruta: "/mesa-dulce" },
  },
  {
    id: "alfajores-de-maicena",
    nombre: "Alfajores de maicena",
    emoji: "🍪",
    tono: "#fbe3b8",
    tiempo: "1 h + reposo",
    porciones: "15 alfajores",
    dificultad: "Media",
    descripcion:
      "Tapas que se deshacen en la boca, rellenas de dulce de leche y bañadas en coco.",
    ingredientes: [
      {
        grupo: "Masa",
        items: [
          "250 g de maicena",
          "100 g de harina 0000",
          "2 cucharaditas de polvo de hornear",
          "150 g de manteca pomada",
          "100 g de azúcar",
          "3 yemas",
          "1 cucharadita de vainilla",
          "1 cucharada de leche o coñac",
        ],
      },
      {
        grupo: "Relleno",
        items: ["400 g de dulce de leche repostero", "Coco rallado, cantidad necesaria"],
      },
    ],
    pasos: [
      "Batí la manteca con el azúcar hasta que quede cremosa. Agregá las yemas, la vainilla y la leche.",
      "Sumá la maicena, la harina y el polvo de hornear tamizados. Unila sin amasar de más.",
      "Envolvé la masa en film y dejala reposar 30 minutos en la heladera.",
      "Estirala a 5 mm de grosor, cortá discos de 5 cm y ubicalos en una placa enmantecada.",
      "Horneá a 170 °C de 10 a 12 minutos. Tienen que quedar casi blancos, sin dorar. Enfriá sobre una rejilla.",
      "Rellená de a pares con dulce de leche y pasá los bordes por coco rallado.",
    ],
    truco:
      "Si se rompen al estirar, la masa está muy fría: dejala 5 minutos a temperatura ambiente.",
    pedido: { texto: "Pedí alfajores para tu mesa dulce.", ruta: "/mesa-dulce" },
  },
  {
    id: "cupcakes-de-vainilla",
    nombre: "Cupcakes de vainilla",
    emoji: "🧁",
    tono: "#e3d4fb",
    tiempo: "50 min",
    porciones: "12 cupcakes",
    dificultad: "Fácil",
    descripcion:
      "Esponjosos y con aroma a vainilla, coronados con buttercream para decorar a tu gusto.",
    ingredientes: [
      {
        grupo: "Cupcakes",
        items: [
          "150 g de harina",
          "150 g de azúcar",
          "2 cucharaditas de polvo de hornear",
          "¼ de cucharadita de sal",
          "100 g de manteca pomada",
          "2 huevos",
          "120 ml de leche",
          "1 cucharadita de vainilla",
        ],
      },
      {
        grupo: "Buttercream",
        items: [
          "200 g de manteca pomada",
          "300 g de azúcar impalpable",
          "2 cucharadas de leche",
          "1 cucharadita de vainilla",
        ],
      },
    ],
    pasos: [
      "Precalentá el horno a 180 °C y poné pirotines en una placa de 12 cupcakes.",
      "Batí la manteca con el azúcar hasta que esté clara y cremosa. Agregá los huevos de a uno y la vainilla.",
      "Incorporá la harina, el polvo de hornear y la sal en tres tandas, alternando con la leche.",
      "Llená los pirotines hasta dos tercios y horneá de 18 a 20 minutos. Dejá enfriar por completo.",
      "Batí la manteca con el azúcar impalpable, la leche y la vainilla hasta que quede liviana. Decorá con manga y pico.",
    ],
    truco:
      "Decorá siempre con los cupcakes completamente fríos, si no el buttercream se derrite.",
    pedido: { texto: "Sumá cupcakes a tu mesa dulce.", ruta: "/mesa-dulce" },
  },
  {
    id: "lemon-pie",
    nombre: "Lemon pie",
    emoji: "🍋",
    tono: "#fff3a8",
    tiempo: "1 h + frío",
    porciones: "10 porciones",
    dificultad: "Media",
    descripcion:
      "Base crocante, crema de limón bien cítrica y un merengue dorado que se luce en cualquier mesa.",
    ingredientes: [
      {
        grupo: "Base",
        items: ["200 g de galletitas dulces trituradas", "100 g de manteca derretida"],
      },
      {
        grupo: "Crema de limón",
        items: [
          "1 lata de leche condensada (395 g)",
          "4 yemas",
          "120 ml de jugo de limón",
          "Ralladura de 1 limón",
        ],
      },
      {
        grupo: "Merengue",
        items: ["4 claras", "160 g de azúcar"],
      },
    ],
    pasos: [
      "Mezclá las galletitas con la manteca y cubrí el fondo y los bordes de un molde de tarta de 24 cm. Horneá 10 minutos a 180 °C.",
      "Mezclá la leche condensada con las yemas, el jugo y la ralladura hasta que espese un poco.",
      "Volcá la crema sobre la base y horneá 15 minutos a 170 °C. Dejá enfriar y llevá a la heladera 3 horas.",
      "Batí las claras a punto nieve y agregá el azúcar de a cucharadas hasta tener un merengue firme y brillante.",
      "Cubrí la tarta con el merengue y dorá 8 a 10 minutos a 180 °C, o con soplete, hasta que tome color.",
    ],
    truco:
      "Rallá el limón antes de exprimirlo. Es mucho más fácil, y la ralladura le da el perfume.",
    pedido: { texto: "¿Un postre para tu evento? Consultanos.", ruta: "/mesa-dulce" },
  },
  {
    id: "pasta-frola-de-membrillo",
    nombre: "Pasta frola de membrillo",
    emoji: "🥧",
    tono: "#f6c9a6",
    tiempo: "1 h 15 min",
    porciones: "10 porciones",
    dificultad: "Fácil",
    descripcion:
      "La tarta de la merienda de siempre: masa suave y quebradiza, con relleno de dulce de membrillo.",
    ingredientes: [
      {
        grupo: "Masa",
        items: [
          "300 g de harina 0000",
          "100 g de azúcar",
          "150 g de manteca fría en cubos",
          "2 yemas",
          "1 huevo",
          "1 cucharadita de polvo de hornear",
          "Ralladura de 1 limón",
        ],
      },
      {
        grupo: "Relleno",
        items: ["500 g de dulce de membrillo", "2 cucharadas de agua"],
      },
    ],
    pasos: [
      "Mezclá la harina, el azúcar, el polvo de hornear y la ralladura. Agregá la manteca fría y desmenuzá con las yemas de los dedos hasta tener arenilla.",
      "Sumá las yemas y el huevo y unila sin amasar de más. Envolvé en film y llevá a la heladera 30 minutos.",
      "Procesá o aplastá el dulce de membrillo con el agua hasta que quede untable.",
      "Estirá dos tercios de la masa y forrá un molde de 24 cm. Rellená con el membrillo.",
      "Estirá el resto, cortá tiras y armá la reja encima. Horneá a 180 °C de 35 a 40 minutos, hasta que dore.",
    ],
    truco:
      "Si querés una variante, reemplazá el membrillo por dulce de batata o dulce de leche.",
    pedido: { texto: "Pedí tu torta para la merienda.", ruta: "/tortas" },
  },
  {
    id: "chaja",
    nombre: "Chajá",
    emoji: "🍑",
    tono: "#cfeee0",
    tiempo: "1 h 30 min + frío",
    porciones: "10 porciones",
    dificultad: "Media",
    descripcion:
      "El postre uruguayo por excelencia: bizcochuelo, crema, dulce de leche, duraznos y merengue dorado.",
    ingredientes: [
      {
        grupo: "Bizcochuelo",
        items: ["4 huevos", "120 g de azúcar", "120 g de harina", "1 cucharadita de vainilla"],
      },
      {
        grupo: "Relleno",
        items: [
          "400 ml de crema de leche bien fría",
          "3 cucharadas de azúcar impalpable",
          "250 g de dulce de leche repostero",
          "1 lata de duraznos en almíbar, escurridos y en cubos",
        ],
      },
      {
        grupo: "Merengue",
        items: ["3 claras", "150 g de azúcar"],
      },
    ],
    pasos: [
      "Batí los huevos con el azúcar y la vainilla durante 10 minutos, hasta que dupliquen su volumen y formen cinta. Agregá la harina tamizada con movimientos envolventes.",
      "Volcá en un molde de 22 cm enmantecado y horneá a 180 °C de 25 a 30 minutos. Dejá enfriar y cortalo en cubos o en tres capas.",
      "Batí la crema con el azúcar impalpable hasta que tenga punto firme.",
      "Armá el postre en una fuente alternando bizcochuelo, dulce de leche, crema y duraznos. Llevá a la heladera 2 horas.",
      "Batí las claras a punto nieve y sumá el azúcar de a cucharadas hasta que el merengue quede firme. Cubrí todo el postre.",
      "Dorá 8 a 10 minutos a 180 °C, o con soplete, y serví bien frío.",
    ],
    truco:
      "Los huevos tienen que estar a temperatura ambiente para que el bizcochuelo suba bien.",
    pedido: { texto: "¿Querés un Chajá para tu evento? Pedilo.", ruta: "/tortas" },
  },
  {
    id: "flan-casero",
    nombre: "Flan casero con dulce de leche",
    emoji: "🍮",
    tono: "#ffcf99",
    tiempo: "1 h 20 min + frío",
    porciones: "8 porciones",
    dificultad: "Fácil",
    descripcion:
      "Textura sedosa, caramelo intenso y una buena cucharada de dulce de leche al servir.",
    ingredientes: [
      {
        grupo: "Caramelo",
        items: ["150 g de azúcar", "3 cucharadas de agua"],
      },
      {
        grupo: "Flan",
        items: ["1 litro de leche", "5 huevos", "150 g de azúcar", "1 cucharadita de vainilla"],
      },
      {
        grupo: "Para servir",
        items: ["Dulce de leche, cantidad necesaria"],
      },
    ],
    pasos: [
      "Poné el azúcar con el agua en una cacerola a fuego medio, sin revolver, hasta que tome color ámbar. Volcá el caramelo en una flanera de 22 cm y girala para cubrir el fondo.",
      "Mezclá los huevos con el azúcar y la vainilla, sin batir de más para no hacer espuma. Agregá la leche tibia.",
      "Colá la mezcla sobre la flanera y colocala dentro de una asadera con agua caliente hasta la mitad.",
      "Horneá a 170 °C de 60 a 70 minutos. Tiene que quedar firme, con el centro apenas tembloroso.",
      "Dejá enfriar y llevá a la heladera 6 horas. Desmoldá y servilo con dulce de leche.",
    ],
    truco:
      "Colar la mezcla antes de hornear es lo que deja el flan liso y sin burbujas.",
    pedido: { texto: "Sumá flanes individuales a tu mesa dulce.", ruta: "/mesa-dulce" },
  },
  {
    id: "mousse-de-chocolate",
    nombre: "Mousse de chocolate",
    emoji: "🥣",
    tono: "#e5c3dd",
    tiempo: "20 min + 4 h de frío",
    porciones: "6 porciones",
    dificultad: "Fácil",
    descripcion:
      "Aireada, intensa y con solo tres ingredientes. Sin huevo crudo, apta para cualquier mesa.",
    ingredientes: [
      {
        grupo: "Ingredientes",
        items: [
          "200 g de chocolate semiamargo",
          "100 ml de crema de leche para calentar",
          "250 ml de crema de leche bien fría para batir",
        ],
      },
    ],
    pasos: [
      "Picá el chocolate y ponelo en un bowl.",
      "Calentá los 100 ml de crema hasta que largue vapor, sin hervir. Volcala sobre el chocolate, esperá 1 minuto y revolvé hasta obtener una ganache lisa. Dejá entibiar.",
      "Batí la crema fría hasta que forme picos suaves.",
      "Incorporá la crema batida a la ganache en dos tandas, con movimientos envolventes, para no perder aire.",
      "Repartí en copas y llevá a la heladera al menos 4 horas.",
    ],
    truco:
      "Si la ganache está caliente al mezclar, la crema se baja. Tiene que estar tibia, no caliente.",
    pedido: { texto: "Pedí mousse en vasitos para tu evento.", ruta: "/mesa-dulce" },
  },
  {
    id: "cookies-con-chips",
    nombre: "Cookies con chips de chocolate",
    emoji: "🍪",
    tono: "#f2d7a8",
    tiempo: "45 min",
    porciones: "20 cookies",
    dificultad: "Fácil",
    descripcion:
      "Bordes crocantes, centro blando y trozos de chocolate derretido en cada mordida.",
    ingredientes: [
      {
        grupo: "Ingredientes",
        items: [
          "150 g de manteca pomada",
          "100 g de azúcar rubia",
          "100 g de azúcar blanca",
          "1 huevo",
          "1 cucharadita de vainilla",
          "250 g de harina",
          "½ cucharadita de bicarbonato",
          "½ cucharadita de sal",
          "200 g de chips de chocolate o chocolate picado",
        ],
      },
    ],
    pasos: [
      "Batí la manteca con los dos azúcares hasta que quede cremosa. Agregá el huevo y la vainilla.",
      "Sumá la harina, el bicarbonato y la sal tamizados. Unila sin amasar de más.",
      "Incorporá los chips y llevá la masa a la heladera 30 minutos.",
      "Armá bolitas de unos 40 g y ubicalas separadas en una placa con papel manteca.",
      "Horneá a 180 °C de 10 a 12 minutos, hasta que los bordes estén dorados y el centro todavía blando. Dejá enfriar 5 minutos en la placa.",
    ],
    truco:
      "Sacalas del horno cuando el centro todavía parece crudo: terminan de cocinarse al enfriar.",
    pedido: { texto: "Sumá cookies a tu mesa dulce.", ruta: "/mesa-dulce" },
  },
  {
    id: "tiramisu",
    nombre: "Tiramisú",
    emoji: "☕",
    tono: "#d9e6f5",
    tiempo: "30 min + 6 h de frío",
    porciones: "8 porciones",
    dificultad: "Fácil",
    descripcion:
      "Capas de vainillas con café y una crema de mascarpone suave. Sin horno y sin huevo crudo.",
    ingredientes: [
      {
        grupo: "Crema",
        items: [
          "500 g de mascarpone",
          "250 ml de crema de leche bien fría",
          "100 g de azúcar impalpable",
          "1 cucharadita de vainilla",
        ],
      },
      {
        grupo: "Armado",
        items: [
          "300 ml de café fuerte, frío",
          "3 cucharadas de licor de café (opcional)",
          "24 vainillas (unos 200 g)",
          "Cacao amargo para espolvorear",
        ],
      },
    ],
    pasos: [
      "Mezclá el café con el licor en un plato hondo.",
      "Batí la crema de leche con el azúcar impalpable y la vainilla hasta que forme picos firmes.",
      "Agregá el mascarpone y mezclá con suavidad hasta que la crema quede lisa.",
      "Pasá las vainillas rápidamente por el café, sin empaparlas, y armá una capa en una fuente de 20 x 25 cm.",
      "Cubrí con la mitad de la crema. Repetí con otra capa de vainillas y el resto de la crema.",
      "Llevá a la heladera al menos 6 horas y espolvoreá con cacao justo antes de servir.",
    ],
    truco:
      "Mojá las vainillas apenas un segundo de cada lado: si se empapan, el tiramisú queda aguado.",
    pedido: { texto: "¿Un postre para tu evento? Consultanos.", ruta: "/mesa-dulce" },
  },
];

function Recetas() {
  return (
    <section className="recetas">
      <header className="recetas__intro">
        <h1>Recetas clásicas de la casa</h1>
        <p>
          Doce recetas que hacemos una y otra vez en Sweet Yani. Elegí una,
          abrila y cociná en casa con ingredientes que encontrás en cualquier
          supermercado.
        </p>
      </header>

      <div className="recetas__grid">
        {recetas.map((r) => (
          <article
            key={r.id}
            id={r.id}
            className="receta"
            style={{ "--tono": r.tono }}
          >
            <div className="receta__tile" aria-hidden="true">
              <span>{r.emoji}</span>
            </div>

            <div className="receta__main">
              <h2>{r.nombre}</h2>
              <p className="receta__desc">{r.descripcion}</p>

              <ul className="receta__meta">
                <li>⏱ {r.tiempo}</li>
                <li>🍽 {r.porciones}</li>
                <li>Dificultad: {r.dificultad}</li>
              </ul>

              <details className="receta__detalle">
                <summary>Ver ingredientes y pasos</summary>

                <div className="receta__cuerpo">
                  <h3>Ingredientes</h3>
                  {r.ingredientes.map((g) => (
                    <div key={g.grupo} className="receta__grupo">
                      <h4>{g.grupo}</h4>
                      <ul>
                        {g.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <h3>Preparación</h3>
                  <ol className="receta__pasos">
                    {r.pasos.map((paso) => (
                      <li key={paso}>{paso}</li>
                    ))}
                  </ol>

                  <p className="receta__truco">
                    <strong>Un consejo:</strong> {r.truco}
                  </p>

                  <Link className="receta__pedir" to={r.pedido.ruta}>
                    {r.pedido.texto}
                  </Link>
                </div>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Recetas;
