/* @ds-bundle: {"format":4,"namespace":"DesignSystem_b51d63","components":[{"name":"Band","sourcePath":"components/menu/Band.jsx"},{"name":"ProductRow","sourcePath":"components/menu/ProductRow.jsx"},{"name":"ProductSheet","sourcePath":"components/menu/ProductSheet.jsx"},{"name":"SubHeading","sourcePath":"components/menu/SubHeading.jsx"}],"sourceHashes":{"components/menu/Band.jsx":"a022c306c200","components/menu/ProductRow.jsx":"f27607d63721","components/menu/ProductSheet.jsx":"ecacc8ee2d1f","components/menu/SubHeading.jsx":"122b1f82a5f6","ui_kits/menu/App.jsx":"50185082f7ae","ui_kits/menu/data.js":"7655d7ad230a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_b51d63 = window.DesignSystem_b51d63 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/menu/Band.jsx
try { (() => {
const MAP = {
  cafeteria: ["--cat-cafeteria", "--on-cafeteria"],
  bebidas: ["--cat-bebidas-frias", "--on-bebidas-frias"],
  panaderia: ["--cat-panaderia", "--on-panaderia"],
  dulces: ["--cat-dulces", "--on-dulces"],
  combos: ["--cat-combos", "--on-combos"]
};
function Band({
  category = "cafeteria",
  label,
  count,
  open = false,
  onClick,
  children
}) {
  const [bg, fg] = MAP[category];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--band-gap)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      all: "unset",
      boxSizing: "border-box",
      cursor: "pointer",
      width: "100%",
      minHeight: "var(--band-h)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 var(--sp-5)",
      background: `var(${bg})`,
      color: `var(${fg})`,
      borderRadius: open ? "var(--r-band) var(--r-band) 0 0" : "0 var(--r-band) var(--r-band) 0",
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)",
      fontWeight: 600,
      fontSize: "var(--fs-band)"
    }
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-caption)",
      letterSpacing: "var(--ls-caps)"
    }
  }, count != null ? count + " • " : "", open ? "−" : "+")), open && /*#__PURE__*/React.createElement("div", {
    style: {
      background: `color-mix(in srgb,var(${bg}) 14%,var(--crema-latte))`,
      borderRadius: "0 0 var(--r-band) var(--r-band)",
      padding: "var(--sp-4) var(--page-pad) var(--sp-5)"
    }
  }, children));
}
Object.assign(__ds_scope, { Band });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/Band.jsx", error: String((e && e.message) || e) }); }

// components/menu/ProductRow.jsx
try { (() => {
function ProductRow({
  name,
  description,
  price,
  photo,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: "flex",
      gap: "var(--sp-3)",
      alignItems: "center",
      padding: "var(--sp-3) 0",
      borderBottom: "1px solid var(--rule)",
      cursor: onClick ? "pointer" : "default"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: "var(--fs-product)",
      color: "var(--espresso)"
    }
  }, name), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-desc)",
      lineHeight: "var(--lh-body)",
      marginTop: 2,
      textWrap: "pretty"
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      letterSpacing: "var(--ls-display)",
      fontSize: "var(--fs-price)",
      color: "var(--text-price)",
      marginTop: 6
    }
  }, price)), photo && /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: "var(--thumb)",
      height: "var(--thumb)",
      objectFit: "cover",
      borderRadius: "var(--r-thumb)",
      flex: "none"
    }
  }));
}
Object.assign(__ds_scope, { ProductRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/ProductRow.jsx", error: String((e && e.message) || e) }); }

// components/menu/ProductSheet.jsx
try { (() => {
function ProductSheet({
  name,
  description,
  price,
  photo,
  category = "cafeteria",
  onClose
}) {
  const col = {
    cafeteria: "--cat-cafeteria",
    bebidas: "--cat-bebidas-frias",
    panaderia: "--cat-panaderia",
    dulces: "--cat-dulces",
    combos: "--cat-combos"
  }[category];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      background: "var(--scrim)"
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "var(--surface-sheet)",
      borderRadius: "var(--r-sheet) var(--r-sheet) 0 0",
      boxShadow: "var(--shadow-sheet)",
      overflow: "hidden",
      maxHeight: "92%",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, photo && /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      display: "block",
      width: "100%",
      aspectRatio: "4/5",
      maxHeight: 380,
      objectFit: "cover"
    }
  }), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      all: "unset",
      cursor: "pointer",
      position: "absolute",
      top: 12,
      right: 12,
      width: 44,
      height: 44,
      borderRadius: "var(--r-pill)",
      background: "var(--crema-latte)",
      color: "var(--espresso)",
      display: "grid",
      placeItems: "center",
      fontSize: 22
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10,
      background: `var(${col})`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--sp-4) var(--page-pad) var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)",
      fontWeight: 600,
      fontSize: 32,
      lineHeight: 1.05,
      color: "var(--espresso)"
    }
  }, name), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: 1.4,
      margin: "10px 0 0"
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 34,
      color: "var(--text-price)",
      marginTop: 14,
      letterSpacing: "var(--ls-display)"
    }
  }, price))));
}
Object.assign(__ds_scope, { ProductSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/ProductSheet.jsx", error: String((e && e.message) || e) }); }

// components/menu/SubHeading.jsx
try { (() => {
function SubHeading({
  children,
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "var(--sp-4) 0 var(--sp-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)",
      fontWeight: 600,
      fontSize: "var(--fs-sub)",
      color: "var(--espresso)",
      borderBottom: "1.5px solid var(--rule)",
      paddingBottom: 6
    }
  }, children), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-caption)",
      color: "var(--text-muted)",
      marginTop: 6,
      fontWeight: 600
    }
  }, note));
}
Object.assign(__ds_scope, { SubHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/menu/SubHeading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/menu/App.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Band,
  SubHeading,
  ProductRow,
  ProductSheet
} = window.DesignSystem_b51d63;
function MenuApp() {
  const [open, setOpen] = React.useState("panaderia");
  const [sel, setSel] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("header", {
    style: {
      padding: "36px var(--page-pad) 24px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/Mood_logo_marron.svg",
    alt: "Mood",
    style: {
      width: 200
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 16,
      margin: "16px 0 0",
      fontWeight: 500
    }
  }, "Una nueva forma de disfrutar lo simple")), /*#__PURE__*/React.createElement("main", {
    style: {
      paddingRight: "var(--page-pad)"
    }
  }, window.MOOD_MENU.map(c => /*#__PURE__*/React.createElement(Band, {
    key: c.id,
    category: c.id === "bebidas" ? "bebidas" : c.id,
    label: c.label,
    open: open === c.id,
    onClick: () => setOpen(open === c.id ? null : c.id)
  }, c.subs.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.t
  }, c.subs.length > 1 && /*#__PURE__*/React.createElement(SubHeading, {
    note: s.note
  }, s.t), s.items.map((p, i) => /*#__PURE__*/React.createElement(ProductRow, _extends({
    key: i
  }, p, {
    onClick: () => setSel({
      ...p,
      category: c.id
    })
  })))))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "28px var(--page-pad) 40px",
      textAlign: "center",
      fontSize: 14,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo/Mood_isologo_marron.svg",
    alt: "",
    style: {
      width: 64,
      marginBottom: 12
    }
  }), /*#__PURE__*/React.createElement("br", null), "Eva Per\xF3n 234, Cruz del Eje, C\xF3rdoba", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/moodcafecde"
  }, "@moodcafecde")), sel && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      maxWidth: 430,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(ProductSheet, _extends({}, sel, {
    onClose: () => setSel(null)
  }))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(MenuApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/menu/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/menu/data.js
try { (() => {
(() => {
  const P = "../../assets/photos/",
    f = n => "$" + n.toLocaleString("es-AR");
  const it = (name, price, description, photo) => ({
    name,
    price: typeof price === "number" ? f(price) : price,
    description,
    photo: photo && P + photo
  });
  const same = (names, price, ph = {}) => names.map(n => it(n, price, "", ph[n]));
  const CL = "S $3.000 • M $4.000 • L $5.000";
  window.MOOD_MENU = [{
    id: "cafeteria",
    label: "Cafetería",
    subs: [{
      t: "Cafés clásicos",
      items: same(["Café expreso", "Lágrima", "Café con leche y crema", "Café expreso con crema"], CL)
    }, {
      t: "Cafés especiales",
      items: [it("Café moka", 6000, "Café con leche, cacao y crema."), it("Café capuchino", 6000, "Crema, chocolate, café con o sin leche y canela.", "Cafe-capuchino.png"), it("Café bombón", 7000, "Leche condensada, chocolate, café con o sin leche y crema texturizada.")]
    }, {
      t: "Tés e infusiones",
      note: "$3.000 cada uno",
      items: same(["Té negro", "Boldo", "Tilo", "Té verde", "Té con limón"], 3000)
    }, {
      t: "Submarinos",
      items: [it("Submarino clásico", 5000), it("Submarino con crema texturizada", 6000), it("Submarino con Nutella", 7000), it("Submarino chocolatoso", 7000), it("Submarino Block", 7000)]
    }, {
      t: "Chocolatadas",
      items: [it("Chocolatada clásica", 3000), it("Chocolatada con crema", 4000)]
    }, {
      t: "Lates saborizados",
      note: "M $4.500 • L $5.500",
      items: same(["Vainilla", "Coco", "Caramelo", "Avellanas", "Pistacho"], "M $4.500 • L $5.500")
    }]
  }, {
    id: "bebidas",
    label: "Bebidas frías",
    subs: [{
      t: "Frappuccino / Frappé",
      note: "$7.000 cada uno",
      items: same(["Vainilla", "Dulce de leche", "Caramelo", "Frambuesa", "Pistacho", "Moka", "Tiramisú", "Oreo"], 7000, {
        Pistacho: "Frappe-pistacho.png"
      })
    }, {
      t: "Jugo de naranja 100 % natural",
      items: [it("Chico", 3000), it("Mediano", 5000), it("Grande", 7000)]
    }, {
      t: "Limonadas clásicas",
      note: "$4.000 cada una",
      items: same(["Limonada clásica", "Limonada con menta", "Limonada con menta y jengibre"], 4000, {
        "Limonada clásica": "Limonadas.png"
      })
    }, {
      t: "Milkcream",
      note: "$7.000 cada uno",
      items: same(["De chocolate", "Dulce de leche", "Frutilla", "Oreo"], 7000, {
        "De chocolate": "Milkcream-chocolate.png"
      })
    }, {
      t: "Licuados clásicos",
      note: "M $6.000 • L $8.000",
      items: same(["Maracuyá", "Banana", "Frutilla", "Durazno"], "M $6.000 • L $8.000")
    }, {
      t: "Licuados especiales",
      note: "$6.000 cada uno",
      items: same(["Mango, durazno, ananá y agua", "Durazno y jugo exprimido de naranja", "Kiwi, durazno y jugo exprimido de naranja", "Frutilla, banana y jugo exprimido de naranja", "Maracuyá, ananá, durazno y jugo exprimido de naranja"], 6000, {
        "Mango, durazno, ananá y agua": "Licuado-especial-Mango.png"
      })
    }, {
      t: "Limonadas especiales",
      note: "$5.000 cada una",
      items: same(["Coco", "Frutos rojos / del bosque", "Frutilla"], 5000)
    }, {
      t: "Limonadas: tamaños",
      items: [it("500 ml", 4000), it("1 litro", 8000)]
    }]
  }, {
    id: "panaderia",
    label: "Panadería",
    subs: [{
      t: "Medialunas y criollos",
      items: [it("Medialuna de manteca", 700), it("Medialuna con crema pastelera", 1000), it("Medialuna con dulce de leche", 1000), it("Medialuna de jamón y queso", 1500), it("Criollos con hojaldre", 600), it("Tostadas de pan (x3)", 2000)]
    }, {
      t: "Baguettes",
      items: [it("Clásico", 6000, "Jamón cocido y queso."), it("Campestre", 8000, "Jamón, queso, lechuga, tomate y huevo frito."), it("Serrano", 8000, "Jamón crudo, rúcula, tomate y queso.", "Baguette-Serrano.png"), it("Clásico con verduras", 8000, "Jamón, queso, lechuga y tomate."), it("Baguetín Mood", 8000, "Queso tybo, mortadela tipo paladini, queso azul o roquefort, nueces y mayonesa casera.", "Baguette-Mood.png"), it("Baguetín Milán", 8000, "Queso tybo, salame tipo milán y mayonesa casera."), it("Baguetín crudo o bondiola", 8000, "Queso tybo, jamón crudo o bondiola, queso en hebras tipo reggianito y mayonesa casera.")]
    }, {
      t: "Croissants salados",
      items: [it("Jamón y queso", 5000), it("Jamón, queso, lechuga y tomate", 5000), it("Huevo, panceta ahumada y queso crema", 6000), it("Queso crema, rúcula y jamón crudo", 6000), it("Huevo, jamón cocido y queso", 6000)]
    }, {
      t: "Tostados con pan artesanal",
      items: [it("Clásico", 7000, "Jamón y queso (4 triángulos)."), it("Napolitano", 6500, "Queso, jamón cocido, tomate y pesto de nuez."), it("4 quesos", 6500, "Gratinado."), it("Queso y salame", 6500, "Gratinado."), it("Clásico gratinado", 6500, "Jamón y queso."), it("Clásico con verduras", 6500, "Jamón, queso, tomate, huevo y lechuga.")]
    }, {
      t: "Tostones",
      note: "$8.000 cada uno",
      items: [it("Clásico", 8000, "Queso crema, rúcula, tomate cherry y jamón crudo."), it("Palta y huevo", 8000, "Queso crema, palta y huevo.", "Toston-paltayhuevo.png"), it("Panceta", 8000, "Queso crema, huevo revuelto y panceta ahumada.", "Toston-lanceta.png"), it("Especial Mood", 8000, "Mayonesa cremosa de zanahoria, rúcula, queso en cubitos y tomates cherry.", "Tostones-Mood.png")]
    }]
  }, {
    id: "dulces",
    label: "Dulces",
    subs: [{
      t: "Croissants dulces",
      items: [it("Clásico", 3000), it("Con crema pastelera", 3000), it("Con dulce de leche", 5000), it("Con Nutella", 6000), it("Con Nutella y frutilla", 6000), it("Chocolate Block", 6000), it("Con frutilla y crema texturizada", 6000, "", "Croissant-con-crema-frutilla.png"), it("Dulce de leche y frutilla", 6000), it("Dulce de leche, crema y Oreo", 6000), it("Con crema texturizada y frutos del bosque", 6000)]
    }, {
      t: "Cookies",
      note: "$4.000 cada una",
      items: same(["Chocolate", "Nutella", "Clásica", "Red Velvet", "Pistacho", "Kinder", "Bombón", "Block"], 4000, {
        "Bombón": "Cookie-Bombon.png"
      })
    }, {
      t: "Postres frescos",
      items: [it("Ensalada de frutas de estación", 4000), it("Bowl de frutas de estación", 7000), it("Bowl de frutas de estación con yogur griego", 8000)]
    }, {
      t: "Tortas y tartas",
      items: [it("Tortas y tartas", 6000, "Consultar variedad disponible.")]
    }]
  }, {
    id: "combos",
    label: "Combos",
    subs: [{
      t: "Combos",
      items: [it("Clásico", 6000, "Infusión, 2 criollos de hojaldre, mermelada, manteca, soda o agua."), it("Combo 1", 13000, "Infusión, 2 tostadas de pan de campo, 2 fetas de jamón cocido, 2 fetas de queso, cazuela de huevo revuelto con panceta ahumada, jugo exprimido de naranja, ensalada de fruta de estación, vaso de soda o agua."), it("Combo 2", 13000, "Infusión, 1 criollo, 1 medialuna, cazuelita de dulce de leche o mermelada, manteca, ensalada de frutas, jugo exprimido de naranja, tostadito de pan de campo con jamón y queso."), it("Combo 3", 12000, "Infusión XL, 2 tostadas de pan lactal casero, cazuelita de mermelada, cazuelita de queso crema o manteca, ensalada de frutas de estación, jugo de naranja."), it("Combo 4", 12000, "3 medialunas de manteca, jugo exprimido de naranja grande, vaso de soda o agua."), it("Combo 5", 12000, "Licuado XL con agua o leche, tostado con pan de campo con jamón y queso."), it("Combo 6", 12000, "Infusión XL, tostón con queso crema, palta y huevo frito.", "Toston-paltayhuevo.png"), it("Combo 7", 12000, "Infusión XL, tostón con jamón crudo, rúcula, mayonesa casera y queso parmesano."), it("Brunch saludable", "Precio a confirmar", "Huevo, palta, rúcula, tomatitos cherry, bacon, y queso crema o mayonesa de zanahoria.", "Brunch-Saludable.png")]
    }]
  }];
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/menu/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Band = __ds_scope.Band;

__ds_ns.ProductRow = __ds_scope.ProductRow;

__ds_ns.ProductSheet = __ds_scope.ProductSheet;

__ds_ns.SubHeading = __ds_scope.SubHeading;

})();
