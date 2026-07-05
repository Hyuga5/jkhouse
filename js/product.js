const PRODUCTS = [
  {
    id: 1,
    slug: "cpvcpipe",
    category: "CPVC",
    name: "CPVC Pipe SDR-11 NS 570",
    description:
      "Hot & cold water CPVC pipe conforming to NS-570 SDR-11 standard.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570 / SDR-11",
      "Price: per metre",
      "Available in 3m lengths",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '½" (15mm)', price: 178 },
      { size: '¾" (20mm)', price: 264 },
      { size: '1" (25mm)', price: 413 },
      { size: '1-¼" (32mm)', price: 605 },
      { size: '1-½" (40mm)', price: 847 },
      { size: '2" (50mm)', price: 1386 },
    ],
    notes: "Price per metre",
    img: "images/cpvcpipe.jpg",
  },
  {
    id: 2,
    slug: "cpvcsocket",
    category: "CPVC",
    name: "Coupler (Socket)",
    description: "CPVC straight coupling/socket for joining pipes.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '½"', price: 18 },
      { size: '¾"', price: 26 },
      { size: '1"', price: 50 },
      { size: '1-¼"', price: 100 },
      { size: '1-½"', price: 174 },
      { size: '2"', price: 358 },
    ],
    notes: "",
    img: "images/cpvcsocket.jpg",
  },
  {
    id: 3,
    slug: "cpvcelbow90",
    category: "CPVC",
    name: "Elbow 90°",
    description: "CPVC 90-degree elbow fitting.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '½"', price: 26 },
      { size: '¾"', price: 40 },
      { size: '1"', price: 79 },
      { size: '1-¼"', price: 165 },
      { size: '1-½"', price: 233 },
      { size: '2"', price: 534 },
    ],
    notes: "",
    img: "images/cpvcelbow90.png",
  },
  {
    id: 4,
    slug: "cpvcelbow45",
    category: "CPVC",
    name: "Elbow 45°",
    description: "CPVC 45-degree elbow fitting.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '½"', price: 35 },
      { size: '¾"', price: 42 },
      { size: '1"', price: 66 },
      { size: '1-¼"', price: 119 },
      { size: '1-½"', price: 273 },
      { size: '2"', price: 605 },
    ],
    notes: "",
    img: "images/cpvcelbow45.jpeg",
  },
  {
    id: 5,
    slug: "cpvcequaltee",
    category: "CPVC",
    name: "Equal Tee",
    description: "CPVC equal-branch tee fitting.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '½"', price: 31 },
      { size: '¾"', price: 56 },
      { size: '1"', price: 94 },
      { size: '1-¼"', price: 204 },
      { size: '1-½"', price: 308 },
      { size: '2"', price: 700 },
    ],
    notes: "",
    img: "images/cpvcequaltee.png",
  },
  {
    id: 6,
    slug: "cpvcendcap",
    category: "CPVC",
    name: "End Cap",
    description: "CPVC pipe end cap.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '½"', price: 22 },
      { size: '¾"', price: 28 },
      { size: '1"', price: 42 },
      { size: '1-¼"', price: 78 },
      { size: '1-½"', price: 130 },
      { size: '2"', price: 252 },
    ],
    notes: "",
    img: "images/cpvcendcap.png",
  },
  {
    id: 7,
    slug: "cpvcunion",
    category: "CPVC",
    name: "Union",
    description: "CPVC union connector for easy disconnection.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '½"', price: 185 },
      { size: '¾"', price: 259 },
      { size: '1"', price: 314 },
      { size: '1-¼"', price: 531 },
      { size: '1-½"', price: 724 },
      { size: '2"', price: 1172 },
    ],
    notes: "",
    img: "images/cpvcunion.png",
  },
  {
    id: 8,
    slug: "cpvctankconnector",
    category: "CPVC",
    name: "Tank Connector",
    description: "CPVC tank connector fitting.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '½"', price: 157 },
      { size: '¾"', price: 158 },
      { size: '1"', price: 228 },
      { size: '1-¼"', price: 482 },
      { size: '1-½"', price: 513 },
      { size: '2"', price: 858 },
    ],
    notes: "",
    img: "images/cpvctankconnector.png",
  },
  {
    id: 9,
    slug: "cross-tee",
    category: "CPVC",
    name: "Cross Tee",
    description: "CPVC cross/4-way tee fitting.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '½"', price: 77 },
      { size: '¾"', price: 152 },
      { size: '1"', price: 281 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 10,
    slug: "cross-over",
    category: "CPVC",
    name: "Cross Over",
    description: "CPVC cross-over fitting for crossing pipes.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '½" (15mm)', price: 145 },
      { size: '¾" (20mm)', price: 213 },
      { size: '1" (25mm)', price: 405 },
    ],
    notes: "",
    img: "/images/cross-over.png",
  },
  {
    id: 11,
    slug: "abs-pipe-clip",
    category: "CPVC",
    name: "ABS Pipe Clip",
    description: "ABS material pipe clip/clamp for CPVC pipes.",
    specs: ["Material: ABS", "Price: per piece"],
    variants: [
      { size: '½"', price: 11 },
      { size: '¾"', price: 15 },
      { size: '1"', price: 18 },
      { size: '1-¼"', price: 30 },
      { size: '1-½"', price: 46 },
      { size: '2"', price: 77 },
    ],
    notes: "",
    img: "/images/abs-pipe-clip.png",
  },
  {
    id: 12,
    slug: "metal-pipe-clip",
    category: "CPVC",
    name: "Metal Pipe Clip",
    description: "Metal pipe clip/clamp for CPVC pipes.",
    specs: ["Material: Metal", "Price: per piece"],
    variants: [
      { size: '½"', price: 22 },
      { size: '¾"', price: 26 },
      { size: '1"', price: 32 },
      { size: '1-¼"', price: 37 },
      { size: '1-½"', price: 43 },
      { size: '2"', price: 54 },
    ],
    notes: "",
    img: "/images/metal-pipe-clip.png",
  },
  {
    id: 13,
    slug: "female-threaded-elbow",
    category: "CPVC",
    name: "Female Threaded Elbow",
    description: "CPVC female-threaded elbow (BSP thread).",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '½×½"', price: 150 },
      { size: '¾×½"', price: 160 },
      { size: '¾×¾"', price: 232 },
      { size: '1×½"', price: 250 },
      { size: '1×1"', price: 675 },
    ],
    notes: "",
    img: "/images/female-threaded-elbow.png",
  },
  {
    id: 14,
    slug: "female-threaded-tee",
    category: "CPVC",
    name: "Female Threaded Tee",
    description: "CPVC female-threaded tee (BSP thread).",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '½×½"', price: 175 },
      { size: '¾×½"', price: 185 },
      { size: '¾×¾"', price: 270 },
      { size: '1×½"', price: 360 },
      { size: '1×1"', price: 465 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 15,
    slug: "female-threaded-socket",
    category: "CPVC",
    name: "Female Threaded Socket",
    description: "CPVC female-threaded socket (BSP thread).",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '¾×½"', price: 180 },
      { size: '¾×¾"', price: 310 },
      { size: '1×½"', price: 280 },
      { size: '¾×¾"', price: 315 },
      { size: '1×1"', price: 530 },
      { size: '1-¼×1"', price: 1237 },
      { size: '1-½×1"', price: 1615 },
      { size: '2"', price: 2825 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 16,
    slug: "male-threaded-socket",
    category: "CPVC",
    name: "Male Threaded Socket",
    description: "CPVC male-threaded socket (BSP thread).",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '¾×½"', price: 260 },
      { size: '¾×¾"', price: 360 },
      { size: '1×½"', price: 277 },
      { size: '1×¾"', price: 287 },
      { size: '1×1"', price: 550 },
      { size: '1-¼×1"', price: 1490 },
      { size: '1-½×1"', price: 1955 },
      { size: '2"', price: 3220 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 17,
    slug: "hexa-female-socket",
    category: "CPVC",
    name: "Hexa Female Socket",
    description: "Hexagonal female socket for CPVC (BSP thread).",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '½×½"', price: 300 },
      { size: '¾×½"', price: 415 },
      { size: '¾×¾"', price: 435 },
      { size: '1×1"', price: 757 },
      { size: '1-¼×1"', price: 1660 },
      { size: '1-½×1"', price: 1970 },
      { size: '2"', price: 3220 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 18,
    slug: "hexa-male-socket",
    category: "CPVC",
    name: "Hexa Male Socket",
    description: "Hexagonal male socket for CPVC (BSP thread).",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '½×½"', price: 315 },
      { size: '¾×½"', price: 340 },
      { size: '¾×¾"', price: 425 },
      { size: '1×1"', price: 710 },
      { size: '1-¼×1"', price: 1655 },
      { size: '1-½×1"', price: 2090 },
      { size: '2"', price: 3625 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 19,
    slug: "reducing-socket",
    category: "CPVC",
    name: "Reducing Socket",
    description: "CPVC reducing socket for size transition.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '¾×½"', price: 35 },
      { size: '1×½"', price: 48 },
      { size: '1×¾"', price: 50 },
      { size: '1-¼×½"', price: 127 },
      { size: '1-¼×¾"', price: 134 },
      { size: '1-¼×1"', price: 150 },
      { size: '1-½×½"', price: 218 },
      { size: '1-½×¾"', price: 190 },
      { size: '1-½×1"', price: 196 },
      { size: '1-½×1-¼"', price: 215 },
      { size: '2×¾"', price: 318 },
      { size: '2×1"', price: 325 },
      { size: '2×1-¼"', price: 336 },
      { size: '2×1-½"', price: 330 },
    ],
    notes: "",
    img: "/images/reducing-socket.png",
  },
  {
    id: 20,
    slug: "reducing-tee",
    category: "CPVC",
    name: "Reducing Tee",
    description: "CPVC reducing tee for branching with size reduction.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '¾×½"', price: 70 },
      { size: '1×½"', price: 101 },
      { size: '1×¾"', price: 107 },
      { size: '1-¼×½"', price: 231 },
      { size: '1-¼×¾"', price: 248 },
      { size: '1-¼×1"', price: 176 },
      { size: '1-½×½"', price: 359 },
      { size: '1-½×¾"', price: 385 },
      { size: '1-½×1"', price: 270 },
      { size: '1-½×1-¼"', price: 332 },
      { size: '2×¾"', price: 516 },
      { size: '2×1"', price: 536 },
      { size: '2×1-¼"', price: 543 },
      { size: '2×1-½"', price: 567 },
    ],
    notes: "",
    img: "/images/reducing-tee.png",
  },
  {
    id: 21,
    slug: "reducing-bush",
    category: "CPVC",
    name: "Reducing Bush",
    description: "CPVC reducing bush for pipe size reduction.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '¾×½"', price: 19 },
      { size: '1×½"', price: 50 },
      { size: '1×¾"', price: 36 },
      { size: '1-¼×½"', price: 106 },
      { size: '1-¼×¾"', price: 86 },
      { size: '1-¼×1"', price: 65 },
      { size: '1-½×½"', price: 168 },
      { size: '1-½×¾"', price: 106 },
      { size: '1-½×1"', price: 111 },
      { size: '1-½×1-¼"', price: 84 },
      { size: '2×¾"', price: 297 },
      { size: '2×1"', price: 286 },
      { size: '2×1-¼"', price: 308 },
      { size: '2×1-½"', price: 286 },
    ],
    notes: "",
    img: "/images/reducing-bush.png",
  },
  {
    id: 22,
    slug: "cpvc-hanging-clamp",
    category: "CPVC",
    name: "CPVC Hanging Clamp",
    description: "Hanging clamp/support for CPVC pipes.",
    specs: ["Material: CPVC/Metal", "Price: per piece"],
    variants: [
      { size: '¾"', price: 111 },
      { size: '1"', price: 127 },
      { size: '1-¼"', price: 135 },
      { size: '1-½"', price: 163 },
      { size: '2"', price: 196 },
    ],
    notes: "",
    img: "/images/cpvc/-hanging-clamp.png",
  },
  {
    id: 23,
    slug: "reducing-elbow",
    category: "CPVC",
    name: "Reducing Elbow",
    description: "CPVC reducing elbow for directional size change.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '¾×½"', price: 56 },
      { size: '1×¾"', price: 100 },
    ],
    notes: "",
    img: "/images/reducing-elbow.png",
  },
  {
    id: 24,
    slug: "long-plug",
    category: "CPVC",
    name: "Long Plug",
    description: "CPVC long plug/cap.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [{ size: '½" (15mm)', price: 28 }],
    notes: "",
    img: "",
  },
  {
    id: 25,
    slug: "plain-male-socket",
    category: "CPVC",
    name: "Plain Male Socket",
    description: "CPVC plain male socket fitting.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '½×½"', price: 40 },
      { size: '¾×½"', price: 88 },
      { size: '¾×¾"', price: 50 },
      { size: '1×1"', price: 70 },
      { size: '1-¼×1"', price: 135 },
      { size: '1-½×1"', price: 205 },
    ],
    notes: "",
    img: "/images/plain-male-socket.png",
  },
  {
    id: 26,
    slug: "plain-female-socket",
    category: "CPVC",
    name: "Plain Female Socket",
    description: "CPVC plain female socket fitting.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '½×½"', price: 50 },
      { size: '¾×½"', price: 116 },
      { size: '¾×¾"', price: 66 },
      { size: '1×1"', price: 105 },
      { size: '1-¼×1"', price: 210 },
      { size: '1-½×1"', price: 270 },
    ],
    notes: "",
    img: "/images/plain-female-socket.png",
  },
  {
    id: 27,
    slug: "triple-female-elbow",
    category: "CPVC",
    name: "Triple Female Elbow",
    description: "CPVC triple female elbow fitting.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [{ size: '¾×½" (20×15mm)', price: 820 }],
    notes: "",
    img: "/images/triple-female-elbow.png",
  },
  {
    id: 28,
    slug: "double-female-elbow",
    category: "CPVC",
    name: "Double Female Elbow",
    description: "CPVC double female elbow fitting.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [{ size: '¾×½" (20×15mm)', price: 435 }],
    notes: "",
    img: "/images/double-female-elbow.png",
  },
  {
    id: 29,
    slug: "cpvc-solvent-cement",
    category: "CPVC",
    name: "CPVC Solvent Cement",
    description: "Solvent cement for CPVC pipe joining.",
    specs: ["Type: CPVC Solvent Cement", "Price: per piece"],
    variants: [
      { size: "59 ml", price: 336 },
      { size: "118 ml", price: 556 },
      { size: "237 ml", price: 825 },
    ],
    notes: "",
    img: "/images/cpvc/-solvent-cement.png",
  },
  {
    id: 30,
    slug: "ball-valve",
    category: "CPVC",
    name: "Ball Valve",
    description: "CPVC ball valve for flow control.",
    specs: [
      "Material: CPVC",
      "Standard: NS-570",
      "Price: per piece",
      "Inclusive of 13% VAT",
    ],
    variants: [
      { size: '½" (15mm)', price: 308 },
      { size: '¾" (20mm)', price: 500 },
      { size: '1" (25mm)', price: 760 },
      { size: '1-¼" (32mm)', price: 1485 },
      { size: '1-½" (40mm)', price: 2290 },
      { size: '2" (50mm)', price: 3650 },
    ],
    notes: "",
    img: "/images/ball-valve.png",
  },
  {
    id: 114,
    slug: "ppr-3-layer-rolled-pipe",
    category: "PPR",
    name: "PPR 3 Layer Rolled Pipe",
    description:
      "3-layer PPR Rolled pipe, standard PN10/SDR11 rated for hot & cold water.",
    specs: [
      "Material: 3-Layer PPR",
      "Standard: NS-552",
      "Price per metre",
      "Comes in roll pipe in 50m and 100m lengths",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { group: "PN 10", size: "20mm – 50m roll", price: 120 },
      { group: "PN 10", size: "20mm – 100m roll", price: 120 },
      { group: "PN 10", size: "25mm – 50m roll", price: 180 },
      { group: "PN 10", size: "25mm – 100m roll", price: 180 },
      { group: "PN 10", size: "32mm – 50m roll", price: 300 },
      { group: "PN 10", size: "32mm – 100m roll", price: 300 },
      { group: "PN 10", size: "40mm – 50m roll", price: 410 },
      { group: "PN 10", size: "40mm – 100m roll", price: 410 },
      { group: "PN 10", size: "50mm – 50m roll", price: 630 },
      { group: "PN 10", size: "50mm – 100m roll", price: 630 },
      { group: "PN 10", size: "63mm – 50m roll", price: 990 },
      { group: "PN 10", size: "63mm – 100m roll", price: 990 },
      { group: "PN 10", size: "75mm – 50m roll", price: 1395 },
      { group: "PN 10", size: "75mm – 100m roll", price: 1395 },
      { group: "PN 10", size: "90mm – 50m roll", price: 2280 },
      { group: "PN 10", size: "90mm – 100m roll", price: 2280 },
      { group: "PN 12.5", size: "20mm – 50m roll", price: 130 },
      { group: "PN 12.5", size: "20mm – 100m roll", price: 130 },
      { group: "PN 16", size: "20mm – 50m roll", price: 140 },
      { group: "PN 16", size: "20mm – 100m roll", price: 140 },
    ],
    notes: "",
    img: "/images/ppr-3-layer-rolled-pipe.png",
  },
  {
    id: 600,
    slug: "ppr-ns552-3layer-pipe-20mm",
    category: "PPR",
    name: "PPR NS-552 3 Layer Pipe – 20mm",
    description:
      "3-layer PPR pipe, 20mm size, as per NS-552. Choose pressure rating (PN).",
    specs: [
      "Material: 3-Layer PPR",
      "Standard: NS-552",
      "Size: 20mm",
      "Price per metre",
      "Available in 3m lengths",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 16 / SDR 7.4", price: 140 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 601,
    slug: "ppr-ns552-3layer-pipe-25mm",
    category: "PPR",
    name: "PPR NS-552 3 Layer Pipe – 25mm",
    description:
      "3-layer PPR pipe, 25mm size, as per NS-552. Choose pressure rating (PN).",
    specs: [
      "Material: 3-Layer PPR",
      "Standard: NS-552",
      "Size: 25mm",
      "Price per metre",
      "Available in 3m lengths",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 16 / SDR 7.4", price: 227 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 602,
    slug: "ppr-ns552-3layer-pipe-32mm",
    category: "PPR",
    name: "PPR NS-552 3 Layer Pipe – 32mm",
    description:
      "3-layer PPR pipe, 32mm size, as per NS-552. Choose pressure rating (PN).",
    specs: [
      "Material: 3-Layer PPR",
      "Standard: NS-552",
      "Size: 32mm",
      "Price per metre",
      "Available in 3m lengths",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 16 / SDR 7.4", price: 366 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 603,
    slug: "ppr-ns552-3layer-pipe-40mm",
    category: "PPR",
    name: "PPR NS-552 3 Layer Pipe – 40mm",
    description:
      "3-layer PPR pipe, 40mm size, as per NS-552. Choose pressure rating (PN).",
    specs: [
      "Material: 3-Layer PPR",
      "Standard: NS-552",
      "Size: 40mm",
      "Price per metre",
      "Available in 3m lengths",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 16 / SDR 7.4", price: 570 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 604,
    slug: "ppr-ns552-3layer-pipe-50mm",
    category: "PPR",
    name: "PPR NS-552 3 Layer Pipe – 50mm",
    description:
      "3-layer PPR pipe, 50mm size, as per NS-552. Choose pressure rating (PN).",
    specs: [
      "Material: 3-Layer PPR",
      "Standard: NS-552",
      "Size: 50mm",
      "Price per metre",
      "Available in 3m lengths",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 10 / SDR 11", price: 630 },
      { size: "PN 16 / SDR 7.4", price: 890 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 605,
    slug: "ppr-ns552-3layer-pipe-63mm",
    category: "PPR",
    name: "PPR NS-552 3 Layer Pipe – 63mm",
    description:
      "3-layer PPR pipe, 63mm size, as per NS-552. Choose pressure rating (PN).",
    specs: [
      "Material: 3-Layer PPR",
      "Standard: NS-552",
      "Size: 63mm",
      "Price per metre",
      "Available in 3m lengths",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 10 / SDR 11", price: 990 },
      { size: "PN 16 / SDR 7.4", price: 1385 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 606,
    slug: "ppr-ns552-3layer-pipe-75mm",
    category: "PPR",
    name: "PPR NS-552 3 Layer Pipe – 75mm",
    description:
      "3-layer PPR pipe, 75mm size, as per NS-552. Choose pressure rating (PN).",
    specs: [
      "Material: 3-Layer PPR",
      "Standard: NS-552",
      "Size: 75mm",
      "Price per metre",
      "Available in 3m lengths",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 10 / SDR 11", price: 1395 },
      { size: "PN 16 / SDR 7.4", price: 1915 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 607,
    slug: "ppr-ns552-3layer-pipe-90mm",
    category: "PPR",
    name: "PPR NS-552 3 Layer Pipe – 90mm",
    description:
      "3-layer PPR pipe, 90mm size, as per NS-552. Choose pressure rating (PN).",
    specs: [
      "Material: 3-Layer PPR",
      "Standard: NS-552",
      "Size: 90mm",
      "Price per metre",
      "Available in 3m lengths",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 10 / SDR 11", price: 2280 },
      { size: "PN 16 / SDR 7.4", price: 2680 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 608,
    slug: "ppr-ns552-3layer-pipe-110mm",
    category: "PPR",
    name: "PPR NS-552 3 Layer Pipe – 110mm",
    description:
      "3-layer PPR pipe, 110mm size, as per NS-552. Choose pressure rating (PN).",
    specs: [
      "Material: 3-Layer PPR",
      "Standard: NS-552",
      "Size: 110mm",
      "Price per metre",
      "Available in 3m lengths",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 10 / SDR 11", price: 3380 },
      { size: "PN 16 / SDR 7.4", price: 4095 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 37,
    slug: "brass-ball-valve",
    category: "PPR",
    name: "Brass Ball Valve",
    description: "PPR brass ball valve for reliable flow control.",
    specs: ["Material: PPR with Brass", "Price: per piece", "Inclusive of VAT"],
    variants: [
      { size: "20mm", price: 380 },
      { size: "25mm", price: 535 },
      { size: "32mm", price: 845 },
      { size: "40mm", price: 1970 },
      { size: "50mm", price: 2655 },
      { size: "63mm", price: 3500 },
      { size: "75mm", price: 4250 },
      { size: "90mm", price: 7250 },
      { size: "110mm", price: 9520 },
    ],
    notes: "",
    img: "/images/brass-ball-valve.png",
  },
  {
    id: 38,
    slug: "stop-valve",
    category: "PPR",
    name: "Stop Valve",
    description: "PPR stop valve for flow shut-off.",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "20mm", price: 525 },
      { size: "25mm", price: 685 },
      { size: "32mm", price: 835 },
      { size: "40mm", price: 1550 },
      { size: "50mm", price: 2050 },
      { size: "63mm", price: 2750 },
    ],
    notes: "",
    img: "/images/stop-valve.png",
  },
  {
    id: 39,
    slug: "concealed-stop-valve",
    category: "PPR",
    name: "Concealed Stop Valve",
    description: "PPR concealed stop valve for wall installation.",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "20mm", price: 1385 },
      { size: "25mm", price: 1535 },
      { size: "32mm", price: 1795 },
    ],
    notes: "",
    img: "/images/concealed-stop-valve.png",
  },
  {
    id: 40,
    slug: "plastic-ball-valve",
    category: "PPR",
    name: "Plastic Ball Valve",
    description: "PPR plastic body ball valve.",
    specs: ["Material: PPR Plastic", "Price: per piece", "Inclusive of VAT"],
    variants: [
      { size: "20mm", price: 207 },
      { size: "25mm", price: 295 },
      { size: "32mm", price: 470 },
      { size: "40mm", price: 1247 },
      { size: "50mm", price: 1580 },
      { size: "63mm", price: 2786 },
      { size: "75mm", price: 3045 },
      { size: "90mm", price: 5966 },
      { size: "110mm", price: 8080 },
    ],
    notes: "",
    img: "/images/plastic-ball-valve.png",
  },
  {
    id: 41,
    slug: "ball-valve-metal-body",
    category: "PPR",
    name: "Ball Valve Metal Body",
    description: "PPR ball valve with metal body.",
    specs: ["Material: PPR/Metal Body", "Price: per piece", "Inclusive of VAT"],
    variants: [
      { size: "20mm", price: 1100 },
      { size: "25mm", price: 1410 },
      { size: "32mm", price: 1820 },
    ],
    notes: "",
    img: "/images/ball-valve-metal-body.png",
  },
  {
    id: 42,
    slug: "elbow-90",
    category: "PPR",
    name: "Elbow 90°",
    description: "PPR 90-degree elbow fitting.",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "20mm", price: 22 },
      { size: "25mm", price: 40 },
      { size: "32mm", price: 70 },
      { size: "40mm", price: 140 },
      { size: "50mm", price: 230 },
      { size: "63mm", price: 450 },
      { size: "75mm", price: 795 },
      { size: "90mm", price: 1320 },
      { size: "110mm", price: 2370 },
    ],
    notes: "",
    img: "/images/elbow-90.png",
  },
  {
    id: 43,
    slug: "elbow-45",
    category: "PPR",
    name: "Elbow 45°",
    description: "PPR 45-degree elbow fitting.",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "20mm", price: 24 },
      { size: "25mm", price: 40 },
      { size: "32mm", price: 65 },
      { size: "40mm", price: 125 },
      { size: "50mm", price: 220 },
      { size: "63mm", price: 355 },
      { size: "75mm", price: 805 },
      { size: "90mm", price: 1280 },
      { size: "110mm", price: 2200 },
    ],
    notes: "",
    img: "/images/elbow-45.png",
  },
  {
    id: 44,
    slug: "socket-coupler",
    category: "PPR",
    name: "Socket (Coupler)",
    description: "PPR straight socket/coupling fitting.",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "20mm", price: 16 },
      { size: "25mm", price: 24 },
      { size: "32mm", price: 40 },
      { size: "40mm", price: 77 },
      { size: "50mm", price: 118 },
      { size: "63mm", price: 226 },
      { size: "75mm", price: 384 },
      { size: "90mm", price: 650 },
      { size: "110mm", price: 1145 },
    ],
    notes: "",
    img: "/images/socket-coupler.png",
  },
  {
    id: 45,
    slug: "tee",
    category: "PPR",
    name: "Tee",
    description: "PPR equal tee fitting.",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "20mm", price: 25 },
      { size: "25mm", price: 46 },
      { size: "32mm", price: 80 },
      { size: "40mm", price: 162 },
      { size: "50mm", price: 267 },
      { size: "63mm", price: 495 },
      { size: "75mm", price: 945 },
      { size: "90mm", price: 1555 },
      { size: "110mm", price: 2690 },
    ],
    notes: "",
    img: "/images/tee.png",
  },
  {
    id: 46,
    slug: "ppr-cross-tee",
    category: "PPR",
    name: "Cross Tee",
    description: "PPR cross/4-way tee fitting.",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "20mm", price: 33 },
      { size: "25mm", price: 66 },
      { size: "32mm", price: 120 },
      { size: "40mm", price: 230 },
    ],
    notes: "",
    img: "/images/cross-tee.png",
  },
  {
    id: 47,
    slug: "crossover",
    category: "PPR",
    name: "Crossover",
    description: "PPR crossover fitting.",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "20mm", price: 137 },
      { size: "25mm", price: 190 },
      { size: "32mm", price: 275 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 48,
    slug: "metal-clamp",
    category: "PPR",
    name: "Metal Clamp",
    description: "Metal clamp for PPR pipe support.",
    specs: ["Material: Metal", "Price: per piece"],
    variants: [
      { size: "20mm", price: 24 },
      { size: "25mm", price: 29 },
      { size: "32mm", price: 35 },
      { size: "40mm", price: 52 },
      { size: "50mm", price: 67 },
      { size: "63mm", price: 75 },
    ],
    notes: "",
    img: "/images/metal-clamp.png",
  },
  {
    id: 49,
    slug: "wall-clamp",
    category: "PPR",
    name: "Wall Clamp",
    description: "Wall clamp for PPR pipe support.",
    specs: ["Material: Plastic/Metal", "Price: per piece"],
    variants: [
      { size: "20mm", price: 17 },
      { size: "25mm", price: 22 },
      { size: "32mm", price: 25 },
      { size: "40mm", price: 36 },
      { size: "50mm", price: 55 },
      { size: "63mm", price: 65 },
    ],
    notes: "",
    img: "/images/wall-clamp.png",
  },
  {
    id: 50,
    slug: "end-cap",
    category: "PPR",
    name: "End Cap",
    description: "PPR pipe end cap.",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "20mm", price: 25 },
      { size: "25mm", price: 40 },
      { size: "32mm", price: 60 },
      { size: "40mm", price: 100 },
      { size: "50mm", price: 165 },
      { size: "63mm", price: 320 },
      { size: "75mm", price: 475 },
      { size: "90mm", price: 515 },
      { size: "110mm", price: 1055 },
    ],
    notes: "",
    img: "/images/end-cap.png",
  },
  {
    id: 51,
    slug: "union",
    category: "PPR",
    name: "Union",
    description: "PPR union for easy disconnection.",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "20mm", price: 95 },
      { size: "25mm", price: 160 },
      { size: "32mm", price: 256 },
      { size: "40mm", price: 445 },
      { size: "50mm", price: 725 },
      { size: "63mm", price: 950 },
    ],
    notes: "",
    img: "/images/union.png",
  },
  {
    id: 52,
    slug: "shot-plug",
    category: "PPR",
    name: "Shot Plug",
    description: "PPR shot plug/cap.",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "20mm", price: 14 },
      { size: "25mm", price: 20 },
      { size: "32mm", price: 24 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 53,
    slug: "tank-nipple",
    category: "PPR",
    name: "Tank Nipple",
    description: "PPR tank nipple fitting.",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "20mm", price: 136 },
      { size: "25mm", price: 215 },
      { size: "32mm", price: 245 },
      { size: "40mm", price: 270 },
      { size: "50mm", price: 595 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 54,
    slug: "ppr-long-plug",
    category: "PPR",
    name: "Long Plug",
    description: "PPR long plug/cap.",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [{ size: "20mm", price: 25 }],
    notes: "",
    img: "/images/long-plug.png",
  },
  {
    id: 55,
    slug: "female-socket",
    category: "PPR",
    name: "Female Socket",
    description: "PPR female threaded socket (BSP thread).",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: '20mm×½"', price: 189 },
      { size: '25mm×½"', price: 224 },
      { size: '25mm×¾"', price: 230 },
      { size: '32mm×½"', price: 220 },
      { size: '32mm×¾"', price: 240 },
      { size: '32mm×1"', price: 515 },
      { size: '40mm×5/4"', price: 950 },
      { size: '50mm×¾"', price: 1220 },
      { size: '63mm×2"', price: 1805 },
      { size: '75mm×2.5"', price: 3855 },
      { size: '90mm×3"', price: 6375 },
      { size: '101mm×4"', price: 10045 },
    ],
    notes: "",
    img: "/images/female-socket.png",
  },
  {
    id: 56,
    slug: "male-socket",
    category: "PPR",
    name: "Male Socket",
    description: "PPR male threaded socket (BSP thread).",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: '20mm×½"', price: 250 },
      { size: '25mm×½"', price: 255 },
      { size: '25mm×¾"', price: 306 },
      { size: '32mm×½"', price: 336 },
      { size: '32mm×¾"', price: 347 },
      { size: '32mm×1"', price: 658 },
      { size: '40mm×5/4"', price: 1070 },
      { size: '50mm×¾"', price: 1800 },
      { size: '63mm×2"', price: 2325 },
      { size: '75mm×2.5"', price: 5965 },
      { size: '90mm×3"', price: 8415 },
      { size: '101mm×4"', price: 16575 },
    ],
    notes: "",
    img: "/images/male-socket.png",
  },
  {
    id: 57,
    slug: "male-elbow",
    category: "PPR",
    name: "Male Elbow",
    description: "PPR male threaded elbow (BSP thread).",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: '20mm×½"', price: 270 },
      { size: '25mm×½"', price: 286 },
      { size: '25mm×¾"', price: 336 },
      { size: '32mm×½"', price: 540 },
      { size: '32mm×¾"', price: 418 },
      { size: '32mm×1"', price: 765 },
      { size: '40mm×5/4"', price: 1402 },
    ],
    notes: "",
    img: "/images/male-elbow.png",
  },
  {
    id: 58,
    slug: "female-elbow",
    category: "PPR",
    name: "Female Elbow",
    description: "PPR female threaded elbow (BSP thread).",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: '20mm×½"', price: 209 },
      { size: '25mm×½"', price: 290 },
      { size: '25mm×¾"', price: 300 },
      { size: '32mm×½"', price: 393 },
      { size: '32mm×¾"', price: 444 },
      { size: '32mm×1"', price: 551 },
      { size: '40mm×5/4"', price: 1270 },
    ],
    notes: "",
    img: "/images/female-elbow.png",
  },
  {
    id: 59,
    slug: "male-tee",
    category: "PPR",
    name: "Male Tee",
    description: "PPR male threaded tee (BSP thread).",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: '20mm×½"', price: 281 },
      { size: '25mm×½"', price: 286 },
      { size: '25mm×¾"', price: 342 },
      { size: '32mm×½"', price: 428 },
      { size: '32mm×¾"', price: 438 },
      { size: '32mm×1"', price: 795 },
      { size: '40mm×5/4"', price: 1490 },
    ],
    notes: "",
    img: "/images/male-tee.png",
  },
  {
    id: 60,
    slug: "female-tee",
    category: "PPR",
    name: "Female Tee",
    description: "PPR female threaded tee (BSP thread).",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: '20mm×½"', price: 219 },
      { size: '25mm×½"', price: 245 },
      { size: '25mm×¾"', price: 316 },
      { size: '32mm×½"', price: 357 },
      { size: '32mm×¾"', price: 393 },
      { size: '32mm×1"', price: 626 },
      { size: '40mm×5/4"', price: 1285 },
    ],
    notes: "",
    img: "/images/female-tee.png",
  },
  {
    id: 61,
    slug: "male-elbow-with-disk",
    category: "PPR",
    name: "Male Elbow with Disk",
    description: "PPR male elbow with backing disk (wall-mounted).",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: '20mm×½"', price: 286 },
      { size: '25mm×½"', price: 367 },
      { size: '25mm×¾"', price: 423 },
    ],
    notes: "",
    img: "/images/male-elbow-with-disk.png",
  },
  {
    id: 62,
    slug: "female-elbow-with-disk",
    category: "PPR",
    name: "Female Elbow with Disk",
    description: "PPR female elbow with backing disk (wall-mounted).",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: '20mm×½"', price: 230 },
      { size: '25mm×½"', price: 388 },
      { size: '25mm×¾"', price: 469 },
    ],
    notes: "",
    img: "/images/female-elbow-with-disk.png",
  },
  {
    id: 63,
    slug: "male-union",
    category: "PPR",
    name: "Male Union",
    description: "PPR male threaded union.",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: '20mm×½"', price: 474 },
      { size: '25mm×½"', price: 683 },
      { size: '32mm×1"', price: 1010 },
      { size: '40mm×5/4"', price: 1887 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 64,
    slug: "female-union",
    category: "PPR",
    name: "Female Union",
    description: "PPR female threaded union.",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: '20mm×½"', price: 459 },
      { size: '25mm×½"', price: 673 },
      { size: '32mm×1"', price: 950 },
      { size: '40mm×5/4"', price: 1570 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 65,
    slug: "ppr-double-female-elbow",
    category: "PPR",
    name: "Double Female Elbow",
    description: "PPR double female threaded elbow.",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: '20mm×½"', price: 586 },
      { size: '25mm×½"', price: 765 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 66,
    slug: "ppr-reducing-socket",
    category: "PPR",
    name: "Reducing Socket",
    description: "PPR reducing socket for pipe size transition.",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "25-20", price: 30 },
      { size: "32-20", price: 40 },
      { size: "32-25", price: 45 },
      { size: "40-20", price: 62 },
      { size: "40-25", price: 70 },
      { size: "40-32", price: 85 },
      { size: "50-20", price: 108 },
      { size: "50-25", price: 121 },
      { size: "50-32", price: 125 },
      { size: "50-40", price: 151 },
      { size: "63-20", price: 216 },
      { size: "63-25", price: 220 },
      { size: "63-32", price: 228 },
      { size: "63-40", price: 230 },
      { size: "63-50", price: 237 },
      { size: "75-50", price: 356 },
      { size: "75-63", price: 476 },
      { size: "90-50", price: 580 },
      { size: "90-63", price: 1197 },
      { size: "110-63", price: 1315 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 67,
    slug: "ppr-reducing-tee",
    category: "PPR",
    name: "Reducing Tee",
    description: "PPR reducing tee for branching with size reduction.",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "25-20-25", price: 52 },
      { size: "32-20-32", price: 81 },
      { size: "32-25-32", price: 90 },
      { size: "40-20-40", price: 126 },
      { size: "40-25-40", price: 137 },
      { size: "40-32-40", price: 147 },
      { size: "50-20-50", price: 288 },
      { size: "50-25-50", price: 295 },
      { size: "50-32-50", price: 312 },
      { size: "50-40-50", price: 320 },
      { size: "63-20-63", price: 370 },
      { size: "63-25-63", price: 375 },
      { size: "63-32-63", price: 380 },
      { size: "63-40-63", price: 382 },
      { size: "63-50-63", price: 420 },
      { size: "90-63-90", price: 1608 },
      { size: "90-75-90", price: 1845 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 68,
    slug: "ppr-reducing-elbow",
    category: "PPR",
    name: "Reducing Elbow",
    description: "PPR reducing elbow for directional pipe size change.",
    specs: [
      "Material: PPR",
      "Standard: NS-552",
      "Price per piece",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "25-20", price: 40 },
      { size: "32-20", price: 60 },
      { size: "32-25", price: 77 },
      { size: "40-32", price: 192 },
      { size: "50-40", price: 214 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 69,
    slug: "pipe-scissor",
    category: "PPR",
    name: "Pipe Scissor",
    description: "PPR pipe cutting scissor/cutter.",
    specs: ["Type: Pipe Tool", "Price: per piece"],
    variants: [{ size: "Standard", price: 963 }],
    notes: "",
    img: "",
  },
  {
    id: 70,
    slug: "welding-kit",
    category: "PPR",
    name: "Welding Kit",
    description: "PPR pipe welding kit.",
    specs: ["Type: PPR Welding Tool", "Price: per piece"],
    variants: [
      { size: "20-40mm", price: 6086 },
      { size: "50-120mm", price: 8437 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 71,
    slug: "wireless-heating-machine",
    category: "PPR",
    name: "Wireless Heating Machine",
    description: "Wireless PPR pipe heating/welding machine.",
    specs: ["Type: PPR Welding Tool", "Price: per piece"],
    variants: [
      { size: "4AH", price: 15500 },
      { size: "6AH", price: 17000 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 72,
    slug: "upvc-pipe-ns-206-50mm",
    category: "PVC",
    name: "uPVC Pipe NS-206 – 50mm",
    description: "ITPF Brand uPVC NS Pipe manufactured as per NS-206, 50mm size.",
    specs: [
      "Standard: NS-206 ITPF Brand",
      "Material: uPVC",
      "Size: 50mm",
      "Price per metre",
      "Inclusive of VAT",
    ],
    variants: [{ size: "6 kg", price: null }],
    notes: "Pricing pending — please confirm rates.",
    img: "",
  },
  {
    id: 73,
    slug: "upvc-pipe-ns-206-75mm",
    category: "PVC",
    name: "uPVC Pipe NS-206 – 75mm",
    description: "ITPF Brand uPVC NS Pipe manufactured as per NS-206, 75mm size.",
    specs: [
      "Standard: NS-206 ITPF Brand",
      "Material: uPVC",
      "Size: 75mm",
      "Price per metre",
      "Inclusive of VAT",
    ],
    variants: [
      { size: "4 kg", price: null },
      { size: "6 kg", price: null },
    ],
    notes: "Pricing pending — please confirm rates.",
    img: "",
  },
  {
    id: 74,
    slug: "upvc-pipe-ns-206-110mm",
    category: "PVC",
    name: "uPVC Pipe NS-206 – 110mm",
    description: "ITPF Brand uPVC NS Pipe manufactured as per NS-206, 110mm size.",
    specs: [
      "Standard: NS-206 ITPF Brand",
      "Material: uPVC",
      "Size: 110mm",
      "Price per metre",
      "Inclusive of VAT",
    ],
    variants: [
      { size: "4 kg", price: null },
      { size: "6 kg", price: null },
    ],
    notes: "Pricing pending — please confirm rates.",
    img: "",
  },
  {
    id: 76,
    slug: "upvc-pipe-ns-206-160mm",
    category: "PVC",
    name: "uPVC Pipe NS-206 – 160mm",
    description: "ITPF Brand uPVC NS Pipe manufactured as per NS-206, 160mm size.",
    specs: [
      "Standard: NS-206 ITPF Brand",
      "Material: uPVC",
      "Size: 160mm",
      "Price per metre",
      "Inclusive of VAT",
    ],
    variants: [{ size: "4 kg", price: null }],
    notes: "Pricing pending — please confirm rates.",
    img: "",
  },
  {
    id: 500,
    slug: "upvc-commercial-pipe-50mm",
    category: "PVC",
    name: "uPVC Commercial Pipe – 50mm",
    description: "uPVC Commercial-grade pipe, 50mm size.",
    specs: [
      "Type: Commercial Pipe",
      "Material: uPVC",
      "Size: 50mm",
      "Price per metre",
      "Inclusive of VAT",
    ],
    variants: [
      { size: "6 kg", price: 181 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 501,
    slug: "upvc-commercial-pipe-63mm",
    category: "PVC",
    name: "uPVC Commercial Pipe – 63mm",
    description: "uPVC Commercial-grade pipe, 63mm size.",
    specs: [
      "Type: Commercial Pipe",
      "Material: uPVC",
      "Size: 63mm",
      "Price per metre",
      "Inclusive of VAT",
    ],
    variants: [
      { size: "4 kg", price: 216 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 502,
    slug: "upvc-commercial-pipe-75mm",
    category: "PVC",
    name: "uPVC Commercial Pipe – 75mm",
    description: "uPVC Commercial-grade pipe, 75mm size.",
    specs: [
      "Type: Commercial Pipe",
      "Material: uPVC",
      "Size: 75mm",
      "Price per metre",
      "Inclusive of VAT",
    ],
    variants: [
      { size: "4 kg", price: 282 },
      { size: "6 kg", price: 405 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 504,
    slug: "upvc-commercial-pipe-110mm",
    category: "PVC",
    name: "uPVC Commercial Pipe – 110mm",
    description: "uPVC Commercial-grade pipe, 110mm size.",
    specs: [
      "Type: Commercial Pipe",
      "Material: uPVC",
      "Size: 110mm",
      "Price per metre",
      "Inclusive of VAT",
    ],
    variants: [
      { size: "4 kg", price: 540 },
      { size: "6 kg", price: 852 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 85,
    slug: "cuppler-swr",
    category: "PVC",
    name: "Cuppler (SWR)",
    description: "uPVC SWR straight coupler.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [
      { size: "50mm", price: 67 },
      { size: "75mm", price: 148 },
      { size: "110mm", price: 274 },
      { size: "160mm", price: 664 },
    ],
    notes: "",
    img: "/images/cuppler-swr.png",
  },
  {
    id: 86,
    slug: "bend-45-d-swr",
    category: "PVC",
    name: "Bend 45°D (SWR)",
    description: "uPVC SWR 45-degree bend.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [
      { size: "50mm", price: 74 },
      { size: "75mm", price: 206 },
      { size: "110mm", price: 361 },
      { size: "160mm", price: 945 },
    ],
    notes: "",
    img: "/images/bend-45-d-swr.png",
  },
  {
    id: 87,
    slug: "bend-87-5-d-swr",
    category: "PVC",
    name: "Bend 87.5°D (SWR)",
    description: "uPVC SWR 87.5-degree bend.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [
      { size: "50mm", price: 78 },
      { size: "75mm", price: 238 },
      { size: "110mm", price: 427 },
      { size: "160mm", price: 1035 },
    ],
    notes: "",
    img: "/images/bend-87-5-d-swr.png",
  },
  {
    id: 88,
    slug: "single-tee-swr",
    category: "PVC",
    name: "Single Tee (SWR)",
    description: "uPVC SWR single tee fitting.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [
      { size: "50mm", price: 130 },
      { size: "75mm", price: 321 },
      { size: "110mm", price: 580 },
      { size: "160mm", price: 1334 },
    ],
    notes: "160mm price approximate",
    img: "/images/single-tee-swr.png",
  },
  {
    id: 89,
    slug: "door-bend-swr",
    category: "PVC",
    name: "Door Bend (SWR)",
    description: "uPVC SWR door bend fitting.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [
      { size: "75mm", price: 296 },
      { size: "110mm", price: 538 },
      { size: "160mm", price: 1242 },
    ],
    notes: "160mm price approximate",
    img: "",
  },
  {
    id: 90,
    slug: "door-tee-swr",
    category: "PVC",
    name: "Door Tee (SWR)",
    description: "uPVC SWR door tee fitting.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [
      { size: "75mm", price: 437 },
      { size: "110mm", price: 773 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 91,
    slug: "reducer-socket-swr",
    category: "PVC",
    name: "Reducer Socket (SWR)",
    description: "uPVC SWR reducer socket.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [
      { size: "75×50mm", price: 127 },
      { size: "110×75mm", price: 306 },
      { size: "160×110mm", price: 668 },
    ],
    notes: "",
    img: "/images/reducer-socket-swr.png",
  },
  {
    id: 92,
    slug: "reducer-tee-swr",
    category: "PVC",
    name: "Reducer Tee (SWR)",
    description: "uPVC SWR reducer tee.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [
      { size: "110×75mm", price: 569 },
      { size: "160×110mm", price: 1262 },
    ],
    notes: "160mm price approximate",
    img: "",
  },
  {
    id: 93,
    slug: "multi-floor-trap-with-square-jali",
    category: "PVC",
    name: "Multi Floor Trap with Square Jali",
    description: "uPVC SWR multi-floor trap with square jali.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [{ size: "110mm", price: 679 }],
    notes: "",
    img: "/images/multi-floor-trap-with-square-jali.png",
  },
  {
    id: 94,
    slug: "p-trap-swr",
    category: "PVC",
    name: "P Trap (SWR)",
    description: "uPVC SWR P-trap for drainage.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [
      { size: "75×75mm", price: 601 },
      { size: "110×110mm", price: 1060 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 95,
    slug: "hanging-clamp",
    category: "PVC",
    name: "Hanging Clamp",
    description: "uPVC pipe hanging clamp/support.",
    specs: ["Material: uPVC/Metal", "Price per piece"],
    variants: [
      { size: "75mm", price: 263 },
      { size: "110mm", price: 311 },
      { size: "160mm", price: 412 },
      { size: "200mm", price: 597 },
    ],
    notes: "",
    img: "/images/hanging-clamp.png",
  },
  {
    id: 96,
    slug: "pipe-clip-pvc-clamp",
    category: "PVC",
    name: "Pipe Clip (PVC Clamp)",
    description: "uPVC pipe clip — PVC clamp type.",
    specs: ["Material: PVC", "Price per piece"],
    variants: [
      { size: "50mm", price: 37 },
      { size: "75mm", price: 74 },
      { size: "110mm", price: 106 },
    ],
    notes: "",
    img: "/images/pipe-clip-pvc-clamp.png",
  },
  {
    id: 97,
    slug: "pipe-clip-metal-clamp",
    category: "PVC",
    name: "Pipe Clip (Metal Clamp)",
    description: "uPVC pipe clip — metal clamp type.",
    specs: ["Material: Metal", "Price per piece"],
    variants: [
      { size: "50mm", price: 52 },
      { size: "75mm", price: 70 },
      { size: "110mm", price: 100 },
      { size: "160mm", price: 210 },
    ],
    notes: "",
    img: "/images/pipe-clip-metal-clamp.png",
  },
  {
    id: 98,
    slug: "double-y-plain",
    category: "PVC",
    name: "Double Y Plain",
    description: "uPVC SWR double Y plain fitting.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [
      { size: "75mm", price: 469 },
      { size: "110mm", price: 929 },
    ],
    notes: "Prices approximate",
    img: "/images/double-y-plain.png",
  },
  {
    id: 99,
    slug: "double-y-with-door",
    category: "PVC",
    name: "Double Y with Door",
    description: "uPVC SWR double Y with door fitting.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [
      { size: "75mm", price: 619 },
      { size: "110mm", price: 968 },
    ],
    notes: "Prices approximate",
    img: "/images/double-y-with-door.png",
  },
  {
    id: 100,
    slug: "cross-tee-plain-door",
    category: "PVC",
    name: "Cross Tee Plain (Door)",
    description: "uPVC SWR cross tee plain with door.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [
      { size: "75mm", price: 780 },
      { size: "110mm", price: 1218 },
    ],
    notes: "",
    img: "/images/cross-tee-plain-door.png",
  },
  {
    id: 101,
    slug: "round-jali",
    category: "PVC",
    name: "Round Jali",
    description: "uPVC SWR round jali/strainer.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [{ size: "110mm", price: 71 }],
    notes: "",
    img: "/images/round-jali.png",
  },
  {
    id: 102,
    slug: "nahani-trap",
    category: "PVC",
    name: "Nahani Trap",
    description: "uPVC SWR Nahani trap for floor drain.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [{ size: "110mm", price: 439 }],
    notes: "Price approximate",
    img: "/images/nahani-trap.png",
  },
  {
    id: 103,
    slug: "cleansing-pipe",
    category: "PVC",
    name: "Cleansing Pipe",
    description: "uPVC SWR cleansing pipe for access.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [
      { size: "75mm", price: 421 },
      { size: "110mm", price: 707 },
    ],
    notes: "Prices approximate",
    img: "/images/cleansing-pipe.png",
  },
  {
    id: 104,
    slug: "pvc-solvent-cement",
    category: "PVC",
    name: "PVC Solvent Cement",
    description: "PVC solvent cement for pipe joining.",
    specs: ["Type: PVC Solvent Cement", "Price per piece", "Inclusive of VAT"],
    variants: [
      { size: "100ml", price: 167 },
      { size: "250ml", price: 293 },
      { size: "500ml", price: 587 },
      { size: "1000ml", price: 1093 },
    ],
    notes: "",
    img: "/images/pvc-solvent-cement.png",
  },
  {
    id: 105,
    slug: "single-y-plain",
    category: "PVC",
    name: "Single Y Plain",
    description: "uPVC SWR single Y plain fitting.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [
      { size: "75mm", price: 359 },
      { size: "110mm", price: 677 },
      { size: "160mm", price: 2936 },
    ],
    notes: "Prices approximate",
    img: "/images/single-y-plain.png",
  },
  {
    id: 106,
    slug: "door-single-y",
    category: "PVC",
    name: "Door Single Y",
    description: "uPVC SWR door single Y fitting.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [
      { size: "75mm", price: 437 },
      { size: "110mm", price: 774 },
    ],
    notes: "Prices approximate",
    img: "/images/door-single-y.png",
  },
  {
    id: 107,
    slug: "cross-tee-plain",
    category: "PVC",
    name: "Cross Tee Plain",
    description: "uPVC SWR cross tee plain fitting.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [
      { size: "75mm", price: 708 },
      { size: "110mm", price: 1114 },
    ],
    notes: "110mm price approximate",
    img: "/images/cross-tee-plain.png",
  },
  {
    id: 108,
    slug: "vent-cowl",
    category: "PVC",
    name: "Vent Cowl",
    description: "uPVC SWR vent cowl for drainage vent.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [
      { size: "75mm", price: 82 },
      { size: "110mm", price: 153 },
    ],
    notes: "",
    img: "/images/vent-cowl.png",
  },
  {
    id: 109,
    slug: "square-tile-with-jali",
    category: "PVC",
    name: "Square Tile with Jali",
    description: "uPVC SWR square tile trap with jali.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [{ size: "110mm", price: 158 }],
    notes: "",
    img: "",
  },
  {
    id: 110,
    slug: "socket-plug",
    category: "PVC",
    name: "Socket Plug",
    description: "uPVC SWR socket plug/cap.",
    specs: ["Material: uPVC SWR", "Standard: NS-206 / SWR", "Price per piece"],
    variants: [
      { size: "50mm", price: 66 },
      { size: "75mm", price: 127 },
      { size: "110mm", price: 202 },
      { size: "160mm", price: 437 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 111,
    slug: "washer-lubricant",
    category: "PVC",
    name: "Washer Lubricant",
    description: "Washer lubricant for PVC pipe joints.",
    specs: ["Type: Lubricant", "Price per piece"],
    variants: [
      { size: "100ml", price: 90 },
      { size: "250ml", price: 153 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 112,
    slug: "metal-grip",
    category: "PVC",
    name: "Metal Grip",
    description: "Metal grip tool for pipe handling.",
    specs: ["Type: Pipe Tool", "Price: per piece"],
    variants: [{ size: "Standard", price: 35 }],
    notes: "",
    img: "",
  },
  {
    id: 113,
    slug: "threaded-rod-10mm",
    category: "PVC",
    name: "Threaded Rod 10mm",
    description: "10mm threaded rod for pipe support.",
    specs: ["Material: Metal", "Diameter: 10mm", "Price per piece"],
    variants: [{ size: "Standard", price: 477 }],
    notes: "",
    img: "",
  },
  {
    id: 350,
    slug: "boring-pipe",
    category: "BoringPipe",
    name: "Boring Pipe",
    description: "Boring pipe for borewell and drilling applications, sold by weight and OD.",
    specs: ["Type: Boring Pipe", "Price per piece"],
    variants: [
      { size: "5kg x 110mm", price: 1823 },
      { size: "6kg x 110mm", price: 2110 },
      { size: "6kg x 110mm NS", price: 2300 },
      { size: "7kg x 114mm", price: 2513 },
      { size: "8kg x 114mm", price: 2875 },
      { size: "12kg x 160mm", price: 4600 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 400,
    slug: "hdpe-pe100-16mm",
    category: "NSHDPE",
    name: "HDPE Pipe 16mm (PE100)",
    description:
      "HDPE PE100 pipe, 16mm size, as per NS 40:2079. Choose pressure rating (PN).",
    specs: [
      "Material: HDPE (PE100)",
      "Standard: NS 40:2079",
      "Size: 16mm",
      "Price per metre",
      "Effective from 1st Chaitra 2082",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 16 / SDR 9", price: 37 },
      { size: "PN 20 / SDR 7.4", price: 44 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 401,
    slug: "hdpe-pe100-20mm",
    category: "NSHDPE",
    name: "HDPE Pipe 20mm (PE100)",
    description:
      "HDPE PE100 pipe, 20mm size, as per NS 40:2079. Choose pressure rating (PN).",
    specs: [
      "Material: HDPE (PE100)",
      "Standard: NS 40:2079",
      "Size: 20mm",
      "Price per metre",
      "Effective from 1st Chaitra 2082",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 12.5 / SDR 11", price: 50 },
      { size: "PN 16 / SDR 9", price: 58 },
      { size: "PN 20 / SDR 7.4", price: 67 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 402,
    slug: "hdpe-pe100-25mm",
    category: "NSHDPE",
    name: "HDPE Pipe 25mm (PE100)",
    description:
      "HDPE PE100 pipe, 25mm size, as per NS 40:2079. Choose pressure rating (PN).",
    specs: [
      "Material: HDPE (PE100)",
      "Standard: NS 40:2079",
      "Size: 25mm",
      "Price per metre",
      "Effective from 1st Chaitra 2082",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 10 / SDR 13.6", price: 64 },
      { size: "PN 12.5 / SDR 11", price: 75 },
      { size: "PN 16 / SDR 9", price: 90 },
      { size: "PN 20 / SDR 7.4", price: 105 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 403,
    slug: "hdpe-pe100-32mm",
    category: "NSHDPE",
    name: "HDPE Pipe 32mm (PE100)",
    description:
      "HDPE PE100 pipe, 32mm size, as per NS 40:2079. Choose pressure rating (PN).",
    specs: [
      "Material: HDPE (PE100)",
      "Standard: NS 40:2079",
      "Size: 32mm",
      "Price per metre",
      "Effective from 1st Chaitra 2082",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 8 / SDR 17", price: 83 },
      { size: "PN 10 / SDR 13.6", price: 103 },
      { size: "PN 12.5 / SDR 11", price: 121 },
      { size: "PN 16 / SDR 9", price: 147 },
      { size: "PN 20 / SDR 7.4", price: 172 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 404,
    slug: "hdpe-pe100-40mm",
    category: "NSHDPE",
    name: "HDPE Pipe 40mm (PE100)",
    description:
      "HDPE PE100 pipe, 40mm size, as per NS 40:2079. Choose pressure rating (PN).",
    specs: [
      "Material: HDPE (PE100)",
      "Standard: NS 40:2079",
      "Size: 40mm",
      "Price per metre",
      "Effective from 1st Chaitra 2082",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 6 / SDR 21", price: 106 },
      { size: "PN 8 / SDR 17", price: 130 },
      { size: "PN 10 / SDR 13.6", price: 160 },
      { size: "PN 12.5 / SDR 11", price: 193 },
      { size: "PN 16 / SDR 9", price: 232 },
      { size: "PN 20 / SDR 7.4", price: 265 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 405,
    slug: "hdpe-pe100-50mm",
    category: "NSHDPE",
    name: "HDPE Pipe 50mm (PE100)",
    description:
      "HDPE PE100 pipe, 50mm size, as per NS 40:2079. Choose pressure rating (PN).",
    specs: [
      "Material: HDPE (PE100)",
      "Standard: NS 40:2079",
      "Size: 50mm",
      "Price per metre",
      "Effective from 1st Chaitra 2082",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 5 / SDR 26", price: 140 },
      { size: "PN 6 / SDR 21", price: 164 },
      { size: "PN 8 / SDR 17", price: 203 },
      { size: "PN 10 / SDR 13.6", price: 247 },
      { size: "PN 12.5 / SDR 11", price: 300 },
      { size: "PN 16 / SDR 9", price: 356 },
      { size: "PN 20 / SDR 7.4", price: 418 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 406,
    slug: "hdpe-pe100-63mm",
    category: "NSHDPE",
    name: "HDPE Pipe 63mm (PE100)",
    description:
      "HDPE PE100 pipe, 63mm size, as per NS 40:2079. Choose pressure rating (PN).",
    specs: [
      "Material: HDPE (PE100)",
      "Standard: NS 40:2079",
      "Size: 63mm",
      "Price per metre",
      "Effective from 1st Chaitra 2082",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 5 / SDR 26", price: 221 },
      { size: "PN 6 / SDR 21", price: 259 },
      { size: "PN 8 / SDR 17", price: 316 },
      { size: "PN 10 / SDR 13.6", price: 393 },
      { size: "PN 12.5 / SDR 11", price: 474 },
      { size: "PN 16 / SDR 9", price: 563 },
      { size: "PN 20 / SDR 7.4", price: 665 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 407,
    slug: "hdpe-pe100-75mm",
    category: "NSHDPE",
    name: "HDPE Pipe 75mm (PE100)",
    description:
      "HDPE PE100 pipe, 75mm size, as per NS 40:2079. Choose pressure rating (PN).",
    specs: [
      "Material: HDPE (PE100)",
      "Standard: NS 40:2079",
      "Size: 75mm",
      "Price per metre",
      "Effective from 1st Chaitra 2082",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 3 / SDR 41", price: 203 },
      { size: "PN 4 / SDR 33", price: 241 },
      { size: "PN 5 / SDR 26", price: 302 },
      { size: "PN 6 / SDR 21", price: 371 },
      { size: "PN 8 / SDR 17", price: 457 },
      { size: "PN 10 / SDR 13.6", price: 561 },
      { size: "PN 12.5 / SDR 11", price: 670 },
      { size: "PN 16 / SDR 9", price: 803 },
      { size: "PN 20 / SDR 7.4", price: 937 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 408,
    slug: "hdpe-pe100-90mm",
    category: "NSHDPE",
    name: "HDPE Pipe 90mm (PE100)",
    description:
      "HDPE PE100 pipe, 90mm size, as per NS 40:2079. Choose pressure rating (PN).",
    specs: [
      "Material: HDPE (PE100)",
      "Standard: NS 40:2079",
      "Size: 90mm",
      "Price per metre",
      "Effective from 1st Chaitra 2082",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 3 / SDR 41", price: 279 },
      { size: "PN 4 / SDR 33", price: 354 },
      { size: "PN 5 / SDR 26", price: 439 },
      { size: "PN 6 / SDR 21", price: 527 },
      { size: "PN 8 / SDR 17", price: 641 },
      { size: "PN 10 / SDR 13.6", price: 798 },
      { size: "PN 12.5 / SDR 11", price: 957 },
      { size: "PN 16 / SDR 9", price: 1150 },
      { size: "PN 20 / SDR 7.4", price: 1345 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 409,
    slug: "hdpe-pe100-110mm",
    category: "NSHDPE",
    name: "HDPE Pipe 110mm (PE100)",
    description:
      "HDPE PE100 pipe, 110mm size, as per NS 40:2079. Choose pressure rating (PN).",
    specs: [
      "Material: HDPE (PE100)",
      "Standard: NS 40:2079",
      "Size: 110mm",
      "Price per metre",
      "Effective from 1st Chaitra 2082",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 3 / SDR 41", price: 421 },
      { size: "PN 4 / SDR 33", price: 519 },
      { size: "PN 5 / SDR 26", price: 650 },
      { size: "PN 6 / SDR 21", price: 799 },
      { size: "PN 8 / SDR 17", price: 964 },
      { size: "PN 10 / SDR 13.6", price: 1176 },
      { size: "PN 12.5 / SDR 11", price: 1423 },
      { size: "PN 16 / SDR 9", price: 1704 },
      { size: "PN 20 / SDR 7.4", price: 2008 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 410,
    slug: "hdpe-pe100-125mm",
    category: "NSHDPE",
    name: "HDPE Pipe 125mm (PE100)",
    description:
      "HDPE PE100 pipe, 125mm size, as per NS 40:2079. Choose pressure rating (PN).",
    specs: [
      "Material: HDPE (PE100)",
      "Standard: NS 40:2079",
      "Size: 125mm",
      "Price per metre",
      "Effective from 1st Chaitra 2082",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 3 / SDR 41", price: 545 },
      { size: "PN 4 / SDR 33", price: 664 },
      { size: "PN 5 / SDR 26", price: 829 },
      { size: "PN 6 / SDR 21", price: 1022 },
      { size: "PN 8 / SDR 17", price: 1240 },
      { size: "PN 10 / SDR 13.6", price: 1523 },
      { size: "PN 12.5 / SDR 11", price: 1846 },
      { size: "PN 16 / SDR 9", price: 2212 },
      { size: "PN 20 / SDR 7.4", price: 2588 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 411,
    slug: "hdpe-pe100-140mm",
    category: "NSHDPE",
    name: "HDPE Pipe 140mm (PE100)",
    description:
      "HDPE PE100 pipe, 140mm size, as per NS 40:2079. Choose pressure rating (PN).",
    specs: [
      "Material: HDPE (PE100)",
      "Standard: NS 40:2079",
      "Size: 140mm",
      "Price per metre",
      "Effective from 1st Chaitra 2082",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 3 / SDR 41", price: 693 },
      { size: "PN 4 / SDR 33", price: 836 },
      { size: "PN 5 / SDR 26", price: 1038 },
      { size: "PN 6 / SDR 21", price: 1279 },
      { size: "PN 8 / SDR 17", price: 1557 },
      { size: "PN 10 / SDR 13.6", price: 1908 },
      { size: "PN 12.5 / SDR 11", price: 2362 },
      { size: "PN 16 / SDR 9", price: 2774 },
      { size: "PN 20 / SDR 7.4", price: 3255 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 412,
    slug: "hdpe-pe100-160mm",
    category: "NSHDPE",
    name: "HDPE Pipe 160mm (PE100)",
    description:
      "HDPE PE100 pipe, 160mm size, as per NS 40:2079. Choose pressure rating (PN).",
    specs: [
      "Material: HDPE (PE100)",
      "Standard: NS 40:2079",
      "Size: 160mm",
      "Price per metre",
      "Effective from 1st Chaitra 2082",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 3 / SDR 41", price: 877 },
      { size: "PN 4 / SDR 33", price: 1091 },
      { size: "PN 5 / SDR 26", price: 1363 },
      { size: "PN 6 / SDR 21", price: 1678 },
      { size: "PN 8 / SDR 17", price: 2043 },
      { size: "PN 10 / SDR 13.6", price: 2491 },
      { size: "PN 12.5 / SDR 11", price: 3020 },
      { size: "PN 16 / SDR 9", price: 3624 },
      { size: "PN 20 / SDR 7.4", price: 4250 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 413,
    slug: "hdpe-pe100-180mm",
    category: "NSHDPE",
    name: "HDPE Pipe 180mm (PE100)",
    description:
      "HDPE PE100 pipe, 180mm size, as per NS 40:2079. Choose pressure rating (PN).",
    specs: [
      "Material: HDPE (PE100)",
      "Standard: NS 40:2079",
      "Size: 180mm",
      "Price per metre",
      "Effective from 1st Chaitra 2082",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 3 / SDR 41", price: 1106 },
      { size: "PN 4 / SDR 33", price: 1381 },
      { size: "PN 5 / SDR 26", price: 1732 },
      { size: "PN 6 / SDR 21", price: 2109 },
      { size: "PN 8 / SDR 17", price: 2564 },
      { size: "PN 10 / SDR 13.6", price: 3158 },
      { size: "PN 12.5 / SDR 11", price: 3807 },
      { size: "PN 16 / SDR 9", price: 4578 },
      { size: "PN 20 / SDR 7.4", price: 5370 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 414,
    slug: "hdpe-pe100-200mm",
    category: "NSHDPE",
    name: "HDPE Pipe 200mm (PE100)",
    description:
      "HDPE PE100 pipe, 200mm size, as per NS 40:2079. Choose pressure rating (PN).",
    specs: [
      "Material: HDPE (PE100)",
      "Standard: NS 40:2079",
      "Size: 200mm",
      "Price per metre",
      "Effective from 1st Chaitra 2082",
      "Inclusive of VAT and taxes",
    ],
    variants: [
      { size: "PN 3 / SDR 41", price: 1373 },
      { size: "PN 4 / SDR 33", price: 1692 },
      { size: "PN 5 / SDR 26", price: 2120 },
      { size: "PN 6 / SDR 21", price: 2612 },
      { size: "PN 8 / SDR 17", price: 3165 },
      { size: "PN 10 / SDR 13.6", price: 3886 },
      { size: "PN 12.5 / SDR 11", price: 4695 },
      { size: "PN 16 / SDR 9", price: 5651 },
      { size: "PN 20 / SDR 7.4", price: 6628 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 420,
    slug: "nsq-hdpe-pipe-pcs",
    category: "NSQHDPE",
    name: "NSQ HDPE Pipe (Pcs)",
    description: "NSQ HDPE pipe sold by piece, priced per kg, available in 2\" to 12\" sizes.",
    specs: [
      "Material: HDPE",
      "Type: NSQ",
      "Price: Rs. 170/kg",
    ],
    variants: [
      { size: "2\"", price: 170 },
      { size: "3\"", price: 170 },
      { size: "4\"", price: 170 },
      { size: "6\"", price: 170 },
      { size: "8\"", price: 170 },
      { size: "10\"", price: 170 },
      { size: "12\"", price: 170 },
    ],
    notes: "Price is per kg (Rs. 170/kg) across all sizes.",
    img: "",
  },
  {
    id: 421,
    slug: "nsq-hdpe-roll",
    category: "NSQHDPE",
    name: "NSQ HDPE Roll",
    description: "NSQ HDPE roll pipe, priced per kg, available in 16mm to 32mm sizes.",
    specs: [
      "Material: HDPE",
      "Type: NSQ Roll",
      "Price: Rs. 200/kg",
    ],
    variants: [
      { size: "16mm", price: 200 },
      { size: "20mm", price: 200 },
      { size: "25mm", price: 200 },
      { size: "32mm", price: 200 },
    ],
    notes: "Price is per kg (Rs. 200/kg) across all sizes.",
    img: "",
  },
  {
    id: 200,
    slug: "hilltake-eheavy-tank",
    category: "Tank",
    name: "Hilltake E.Heavy Tank",
    description: "Extra heavy-duty water storage tank by Hilltake.",
    specs: ["Brand: Hilltake", "Type: E.Heavy", "Price per unit"],
    variants: [
      { size: "200 L", price: 3100 },
      { size: "300 L", price: 4350 },
      { size: "500 L", price: 7250 },
      { size: "750 L", price: 10875 },
      { size: "1000 L", price: 14500 },
      { size: "1500 L", price: 21750 },
      { size: "2000 L", price: 29000 },
      { size: "3000 L", price: 43500 },
      { size: "4000 L", price: 58000 },
      { size: "5000 L", price: 72500 },
      { size: "7500 L", price: 116250 },
      { size: "10000 L", price: 155000 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 201,
    slug: "hilltake-eheavy-tank-color",
    category: "Tank",
    name: "Hilltake E.Heavy Tank (Color)",
    description: "Extra heavy-duty coloured water storage tank by Hilltake.",
    specs: ["Brand: Hilltake", "Type: E.Heavy (Color)", "Price per unit"],
    variants: [
      { size: "500 L", price: 7500 },
      { size: "750 L", price: 11250 },
      { size: "1000 L", price: 15000 },
      { size: "1500 L", price: 22500 },
      { size: "2000 L", price: 30000 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 202,
    slug: "hilltake-extra-thermocol-tank",
    category: "Tank",
    name: "Hilltake Extra Thermocol Tank",
    description: "Thermocol-insulated water storage tank by Hilltake.",
    specs: ["Brand: Hilltake", "Type: Extra Thermocol", "Price per unit"],
    variants: [
      { size: "500 L", price: 8500 },
      { size: "750 L", price: 12750 },
      { size: "1000 L", price: 17000 },
      { size: "1500 L", price: 25500 },
      { size: "2000 L", price: 34000 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 203,
    slug: "hilltake-extra-thermocol-tank-color",
    category: "Tank",
    name: "Hilltake Extra Thermocol Tank (Color)",
    description:
      "Thermocol-insulated coloured water storage tank by Hilltake.",
    specs: [
      "Brand: Hilltake",
      "Type: Extra Thermocol (Color)",
      "Price per unit",
    ],
    variants: [
      { size: "500 L", price: 8750 },
      { size: "750 L", price: 13125 },
      { size: "1000 L", price: 17500 },
      { size: "1500 L", price: 26250 },
      { size: "2000 L", price: 35000 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 204,
    slug: "hilltake-eheavy-horizontal-tank",
    category: "Tank",
    name: "Hilltake E.Heavy Horizontal Tank",
    description: "Extra heavy-duty horizontal water storage tank by Hilltake.",
    specs: ["Brand: Hilltake", "Type: E.Heavy Horizontal", "Price per unit"],
    variants: [{ size: "1000 L", price: 16500 }],
    notes: "",
    img: "",
  },
  {
    id: 205,
    slug: "hilltake-plain-tank",
    category: "Tank",
    name: "Hilltake Plain Tank",
    description: "Plain water storage tank by Hilltake.",
    specs: ["Brand: Hilltake", "Type: Plain", "Price per unit"],
    variants: [
      { size: "100 L", price: 1550 },
      { size: "500 L", price: 6750 },
      { size: "750 L", price: 10125 },
      { size: "1000 L", price: 13500 },
      { size: "1500 L", price: 20250 },
      { size: "2000 L", price: 27000 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 206,
    slug: "hilltake-plain-tank-color",
    category: "Tank",
    name: "Hilltake Plain Tank (Color)",
    description: "Plain coloured water storage tank by Hilltake.",
    specs: ["Brand: Hilltake", "Type: Plain (Color)", "Price per unit"],
    variants: [
      { size: "500 L", price: 7000 },
      { size: "750 L", price: 10500 },
      { size: "1000 L", price: 14000 },
      { size: "1500 L", price: 21000 },
      { size: "2000 L", price: 28000 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 207,
    slug: "hilltop-heavy-extra-tank",
    category: "Tank",
    name: "Hilltop Heavy Extra Tank",
    description: "Heavy-duty water storage tank by Hilltop.",
    specs: ["Brand: Hilltop", "Type: Heavy Extra", "Price per unit"],
    variants: [
      { size: "200 L", price: 2800 },
      { size: "300 L", price: 4200 },
      { size: "500 L", price: 6500 },
      { size: "750 L", price: 9750 },
      { size: "1000 L", price: 13000 },
      { size: "1500 L", price: 19500 },
      { size: "2000 L", price: 26000 },
      { size: "3000 L", price: 39000 },
      { size: "4000 L", price: 52000 },
      { size: "5000 L", price: 65000 },
      { size: "7500 L", price: 105000 },
      { size: "10000 L", price: 140000 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 208,
    slug: "hilltop-heavy-extra-tank-color",
    category: "Tank",
    name: "Hilltop Heavy Extra Tank (Color)",
    description: "Heavy-duty coloured water storage tank by Hilltop.",
    specs: ["Brand: Hilltop", "Type: Heavy Extra (Color)", "Price per unit"],
    variants: [
      { size: "500 L", price: 6750 },
      { size: "750 L", price: 10125 },
      { size: "1000 L", price: 13500 },
      { size: "1500 L", price: 20250 },
      { size: "2000 L", price: 27000 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 209,
    slug: "hilltake-ss304-horizontal-tank",
    category: "Tank",
    name: "Hilltake Steel Tank – SS304 Horizontal",
    description: "Stainless steel SS304 horizontal water storage tank by Hilltake.",
    specs: ["Brand: Hilltake", "Material: SS304", "Type: Horizontal", "Price per unit"],
    variants: [
      { size: "1000 L", price: 35000 },
      { size: "1500 L", price: 46000 },
      { size: "2000 L", price: 56000 },
      { size: "3000 L", price: 81000 },
      { size: "5000 L", price: 137000 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 210,
    slug: "hilltake-ss304-vertical-tank",
    category: "Tank",
    name: "Hilltake Steel Tank – SS304 Vertical",
    description: "Stainless steel SS304 vertical water storage tank by Hilltake.",
    specs: ["Brand: Hilltake", "Material: SS304", "Type: Vertical", "Price per unit"],
    variants: [
      { size: "200 L", price: 11500 },
      { size: "300 L", price: 13000 },
      { size: "500 L", price: 17500 },
      { size: "1000 L", price: 27000 },
      { size: "1500 L", price: 37500 },
      { size: "2000 L", price: 45000 },
      { size: "3000 L", price: 72500 },
      { size: "5000 L", price: 127000 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 211,
    slug: "jagadamba-future-eheavy-tank",
    category: "Tank",
    name: "Jagadamba Future E.Heavy Tank",
    description: "Extra heavy-duty water storage tank by Jagadamba.",
    specs: ["Brand: Jagadamba", "Type: Future E.Heavy", "Price per unit"],
    variants: [
      { size: "200 L", price: 2600 },
      { size: "300 L", price: 3900 },
      { size: "500 L", price: 6500 },
      { size: "750 L", price: 9750 },
      { size: "1000 L", price: 13000 },
      { size: "1500 L", price: 19500 },
      { size: "2000 L", price: 26000 },
      { size: "3000 L", price: 39000 },
      { size: "4000 L", price: 52000 },
      { size: "5000 L", price: 65000 },
      { size: "7500 L", price: 97500 },
      { size: "10000 L", price: 130000 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 212,
    slug: "jagadamba-future-blow-tank",
    category: "Tank",
    name: "Jagadamba Future Blow Tank",
    description: "Blow-moulded water storage tank by Jagadamba.",
    specs: ["Brand: Jagadamba", "Type: Future Blow", "Price per unit"],
    variants: [
      { size: "500 L", price: 6000 },
      { size: "750 L", price: 9000 },
      { size: "1000 L", price: 12000 },
      { size: "1500 L", price: 18000 },
      { size: "2000 L", price: 24000 },
    ],
    notes: "",
    img: "",
  },
  {
    id: 300,
    slug: "itpf-tp-zebra",
    category: "Garden",
    name: "ITPF TP Zebra",
    description: "Garden pipe, sold by weight.",
    specs: ["Type: Garden Pipe", "Price per kg"],
    variants: [{ size: "Per Kg", price: 300 }],
    notes: "",
    img: "",
  },
  {
    id: 301,
    slug: "tp-zebra-red",
    category: "Garden",
    name: "TP Zebra (Red)",
    description: "Garden pipe, sold by weight.",
    specs: ["Type: Garden Pipe", "Colour: Red", "Price per kg"],
    variants: [{ size: "Per Kg", price: 270 }],
    notes: "",
    img: "",
  },
  {
    id: 302,
    slug: "label-pipe",
    category: "Garden",
    name: "Label Pipe",
    description: "Garden pipe, sold by weight.",
    specs: ["Type: Garden Pipe", "Price per kg"],
    variants: [{ size: "Per Kg", price: 300 }],
    notes: "",
    img: "",
  },
  {
    id: 303,
    slug: "jali-zebra",
    category: "Garden",
    name: "Jali Zebra",
    description: "Garden pipe, sold by weight.",
    specs: ["Type: Garden Pipe", "Price per kg"],
    variants: [{ size: "Per Kg", price: 350 }],
    notes: "",
    img: "",
  },
  {
    id: 304,
    slug: "thunche",
    category: "OtherItems",
    name: "Thunche",
    description: "General hardware item, sold by piece.",
    specs: ["Type: Other Item", "Price per piece"],
    variants: [{ size: "Per Piece", price: 500 }],
    notes: "",
    img: "",
  },
  {
    id: 305,
    slug: "jutt-dori-9ft",
    category: "OtherItems",
    name: "Jutt Dori (9ft)",
    description: "Jute rope, 9 feet length.",
    specs: ["Type: Rope", "Length: 9 ft", "Price per piece"],
    variants: [{ size: "Per Piece", price: 8.8 }],
    notes: "",
    img: "",
  },
  {
    id: 306,
    slug: "jutt-dori-14ft",
    category: "OtherItems",
    name: "Jutt Dori (14ft)",
    description: "Jute rope, 14 feet length.",
    specs: ["Type: Rope", "Length: 14 ft", "Price per piece"],
    variants: [{ size: "Per Piece", price: 13.5 }],
    notes: "",
    img: "",
  },
  {
    id: 307,
    slug: "nailon-dori",
    category: "PlasticProducts",
    name: "Nailon Dori",
    description: "Nylon rope, sold by weight.",
    specs: ["Type: Rope", "Material: Nylon", "Price per kg"],
    variants: [{ size: "Per Kg", price: 400 }],
    notes: "",
    img: "",
  },
  {
    id: 308,
    slug: "seto-plastic",
    category: "PlasticProducts",
    name: "Seto Plastic",
    description: "White plastic sheeting, sold by weight.",
    specs: ["Type: Plastic Sheeting", "Colour: White", "Price per kg"],
    variants: [{ size: "Per Kg", price: 600 }],
    notes: "",
    img: "",
  },
  {
    id: 309,
    slug: "kalo-plastic",
    category: "PlasticProducts",
    name: "Kalo Plastic",
    description: "Black plastic sheeting, sold by weight.",
    specs: ["Type: Plastic Sheeting", "Colour: Black", "Price per kg"],
    variants: [{ size: "Per Kg", price: 300 }],
    notes: "",
    img: "",
  },
  {
    id: 310,
    slug: "dhalan-plastic",
    category: "PlasticProducts",
    name: "Dhalan Plastic",
    description: "Dhalan (casting) plastic sheeting, sold by weight.",
    specs: ["Type: Plastic Sheeting", "Price per kg"],
    variants: [{ size: "Per Kg", price: 250 }],
    notes: "",
    img: "",
  },
  {
    id: 311,
    slug: "ob-tripal-orange-blue",
    category: "PlasticProducts",
    name: "O/B Tripal (Orange Blue)",
    description:
      "Orange/Blue tripal sheet, available in a range of sizes from small covers to extra-large industrial tarpaulins.",
    specs: [
      "Type: Tripal Sheet",
      "Colour: Orange / Blue",
      "Small (6x9 ft, 9x12 ft): bikes, small tents, patio furniture covers",
      "Medium (12x15 ft, 15x18 ft): small cars, small roofs, camping",
      "Large (18x24 ft, 20x40 ft): boats, large roofs, farm use",
      "Extra Large (up to 60x40 ft): large tents, big industrial use",
    ],
    variants: [
      { size: "6x9 ft", price: 297 },
      { size: "9x12 ft", price: 594 },
      { size: "12x15 ft", price: 990 },
      { size: "15x18 ft", price: 1485 },
      { size: "18x24 ft", price: 2376 },
      { size: "20x40 ft", price: 4400 },
      { size: "60x40 ft", price: 13200 },
    ],
    notes: "Price is per sq. ft. (Rs. 5.5/sq ft).",
    img: "",
  },
  {
    id: 312,
    slug: "check-tripal",
    category: "PlasticProducts",
    name: "Check Tripal",
    description:
      "Check-pattern tripal sheet, available in a range of sizes from small covers to extra-large industrial tarpaulins.",
    specs: [
      "Type: Tripal Sheet",
      "Pattern: Check",
      "Small (6x9 ft, 9x12 ft): bikes, small tents, patio furniture covers",
      "Medium (12x15 ft, 15x18 ft): small cars, small roofs, camping",
      "Large (18x24 ft, 20x40 ft): boats, large roofs, farm use",
      "Extra Large (up to 60x40 ft): large tents, big industrial use",
    ],
    variants: [
      { size: "6x9 ft", price: 243 },
      { size: "9x12 ft", price: 486 },
      { size: "12x15 ft", price: 810 },
      { size: "15x18 ft", price: 1215 },
      { size: "18x24 ft", price: 1944 },
      { size: "20x40 ft", price: 3600 },
      { size: "60x40 ft", price: 10800 },
    ],
    notes: "Price is per sq. ft. (Rs. 4.5/sq ft).",
    img: "",
  },
];

const catLabels = {
  All: "All products",
  CPVC: "CPVC pipes & fittings",
  PPR: "PPR pipes & fittings",
  PVC: "PVC / uPVC pipes & fittings",
  BoringPipe: "Boring pipes",
  HDPE: "HDPE pipes",
  Tank: "Water storage tanks",
  Garden: "Garden pipes",
  PlasticProducts: "Plastic products",
  OtherItems: "Other products",
};
const catTags = {
  CPVC: "CPVC Solutions",
  PPR: "PPR Solutions",
  PVC: "PVC / uPVC Solutions",
  BoringPipe: "Boring Pipe Solutions",
  HDPE: "HDPE Solutions",
  NSHDPE: "NS HDPE Solutions",
  NSQHDPE: "NSQ HDPE Solutions",
  Tank: "Water Storage Solutions",
  Garden: "Garden Pipes",
  PlasticProducts: "Plastic Products",
  OtherItems: "Other Products",
};
let currentCat = "All",
  currentView = "grid",
  searchQ = "",
  selectedProductId = null,
  currentHdpeSub = "All";

function getFiltered() {
  return PRODUCTS.filter((p) => {
    let catOk;
    if (currentCat === "All") {
      catOk = true;
    } else if (currentCat === "HDPE") {
      catOk = p.category === "NSHDPE" || p.category === "NSQHDPE";
      if (catOk && currentHdpeSub !== "All") catOk = p.category === currentHdpeSub;
    } else {
      catOk = p.category === currentCat;
    }
    const q = searchQ.toLowerCase();
    return (
      catOk &&
      (!q ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.specs.some((s) => s.toLowerCase().includes(q)))
    );
  });
}

function pipeSVG() {
  return `<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/></svg>`;
}

function fmtPrice(v) {
  return v ? "NPR " + v.toLocaleString() : "Call for price";
}

function sizeOptionsHTML(p, selectedIdx) {
  if (p.variants.some((v) => v.group)) {
    let html = "";
    let lastGroup = null;
    p.variants.forEach((v, i) => {
      if (v.group !== lastGroup) {
        if (lastGroup !== null) html += "</optgroup>";
        html += `<optgroup label="${v.group}">`;
        lastGroup = v.group;
      }
      html += `<option value="${i}" ${i === selectedIdx ? "selected" : ""}>${v.size}${v.price ? " – NPR " + v.price.toLocaleString() : ""}</option>`;
    });
    html += "</optgroup>";
    return html;
  }
  return p.variants
    .map(
      (v, i) =>
        `<option value="${i}" ${i === selectedIdx ? "selected" : ""}>${v.size}${v.price ? " – NPR " + v.price.toLocaleString() : ""}</option>`,
    )
    .join("");
}

function renderGrid(list) {
  return list
    .map((p) => {
      const price = p.variants[0] ? p.variants[0].price : null;
      return `
    <div class="product-card" data-action="select-product" data-id="${p.id}">
      <div class="product-img-wrap"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <div class="product-body">
        <div class="product-cat">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.description}</div>
        <div class="size-row" data-action="stop">
          <select class="size-select" id="gsel-${p.id}" data-action="update-grid-price" data-id="${p.id}">
            ${sizeOptionsHTML(p, 0)}
          </select>
        </div>
        <div class="product-footer">
          <span class="price-badge" id="gprice-${p.id}">${fmtPrice(price)}</span>
          <button class="enquire-btn" data-action="enquire-from-card" data-id="${p.id}">Send Quote</button>
        </div>
      </div>
    </div>`;
    })
    .join("");
}

function renderList(list) {
  return list
    .map((p) => {
      const price = p.variants[0] ? p.variants[0].price : null;
      return `
    <div class="product-list-card" data-action="select-product" data-id="${p.id}">
      <div class="list-img-wrap"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
      <div class="list-body">
        <div class="list-info">
          <div class="list-cat">${p.category}</div>
          <div class="list-name">${p.name}</div>
          <div class="list-desc">${p.description}</div>
        </div>
        <div class="list-actions" data-action="stop">
          <select class="size-select" id="lsel-${p.id}" data-action="update-list-price" data-id="${p.id}">
            ${sizeOptionsHTML(p, 0)}
          </select>
          <span class="price-badge" id="lprice-${p.id}">${fmtPrice(price)}</span>
          <button class="enquire-btn" data-action="enquire-from-card" data-id="${p.id}">Send Quote</button>
        </div>
      </div>
    </div>`;
    })
    .join("");
}

const SECTION_DEFS = [
  { key: "CPVC", label: "CPVC", match: (p) => p.category === "CPVC" },
  { key: "PVC", label: "PVC / uPVC", match: (p) => p.category === "PVC" },
  { key: "PPR", label: "PPR", match: (p) => p.category === "PPR" },
  {
    key: "BoringPipe",
    label: "Boring Pipe",
    match: (p) => p.category === "BoringPipe",
  },
  {
    key: "HDPE",
    label: "HDPE",
    match: (p) => p.category === "NSHDPE" || p.category === "NSQHDPE",
  },
  { key: "Tank", label: "Tanks", match: (p) => p.category === "Tank" },
  {
    key: "Garden",
    label: "Garden Pipes",
    match: (p) => p.category === "Garden",
  },
  {
    key: "PlasticProducts",
    label: "Plastic Products",
    match: (p) => p.category === "PlasticProducts",
  },
  {
    key: "OtherItems",
    label: "Other Products",
    match: (p) => p.category === "OtherItems",
  },
];

function getSectionLimit() {
  return window.innerWidth <= 600 ? 3 : 5;
}

function renderSectioned(list, view) {
  const limit = getSectionLimit();
  return SECTION_DEFS.map((sec) => {
    const items = list.filter(sec.match);
    if (!items.length) return "";
    const shown = items.slice(0, limit);
    const inner = view === "grid" ? renderGrid(shown) : renderList(shown);
    const viewAllCat = sec.key === "HDPE" ? "HDPE" : sec.key;
    return `
      <div class="product-section">
        <div class="product-section-header">
          <h3 class="product-section-title">${sec.label}</h3>
          <span class="product-section-count">${items.length} product${items.length !== 1 ? "s" : ""}</span>
        </div>
        <div class="${view === "grid" ? "products-grid" : "products-list"}">${inner}</div>
        ${
          items.length > limit
            ? `<button class="section-viewall" data-action="filter-chip" data-cat="${viewAllCat}">View all ${sec.label} (${items.length}) →</button>`
            : ""
        }
      </div>`;
  }).join("");
}

function updateGridPrice(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  const idx = +document.getElementById("gsel-" + id).value;
  document.getElementById("gprice-" + id).textContent = fmtPrice(
    p.variants[idx].price,
  );
}
function updateListPrice(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  const idx = +document.getElementById("lsel-" + id).value;
  document.getElementById("lprice-" + id).textContent = fmtPrice(
    p.variants[idx].price,
  );
}

function enquireFromCard(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  const sel =
    document.getElementById("gsel-" + id) ||
    document.getElementById("lsel-" + id);
  const idx = sel ? +sel.value : 0;
  openEnquiry(id, idx);
}

/* ============================================================
   Dedicated product URLs: /product/<section>/<slug>
   Each product has a stable "slug" field (see PRODUCTS above),
   and its category maps to a URL "section" segment (see
   categoryUrlSegment below) — e.g. /product/hdpe/hdpe-pe100-16mm.
   We use the History API so every product gets its own real,
   bookmarkable, shareable address without reloading the page or
   re-fetching data. Old flat links (/product/<slug>, no section)
   still resolve correctly — pathPartsAfterBase() always reads the LAST
   path segment as the product slug, so both formats work.
   NOTE: for these URLs to load correctly on a direct hit (typed
   URL, refresh, shared link, Google), the server must be
   configured to serve product.html for any path under /product/*,
   the same way it already does for /product itself. See the
   .htaccess / Nginx notes provided alongside this file.
   ============================================================ */
const BASE_PATH = "/product";
const defaultTitle = document.title;
const metaDescEl = document.querySelector('meta[name="description"]');
const defaultDesc = metaDescEl ? metaDescEl.getAttribute("content") : "";
let canonicalEl = document.querySelector('link[rel="canonical"]');
if (!canonicalEl) {
  canonicalEl = document.createElement("link");
  canonicalEl.setAttribute("rel", "canonical");
  document.head.appendChild(canonicalEl);
}
const defaultCanonical = window.location.origin + BASE_PATH;

function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}

const categoryUrlSegment = {
  CPVC: "cpvc",
  PPR: "ppr",
  PVC: "pvc",
  BoringPipe: "boring-pipe",
  NSHDPE: "hdpe",
  NSQHDPE: "hdpe",
  HDPE: "hdpe",
  Tank: "tanks",
  Garden: "garden",
  PlasticProducts: "plastic-products",
  OtherItems: "other-products",
};

function getProductSectionSlug(p) {
  return categoryUrlSegment[p.category] || p.category.toLowerCase();
}

function getCurrentCatForProduct(p) {
  return (
    sectionToCurrentCat[getProductSectionSlug(p)] || p.category || "All"
  );
}

// Reverse map: URL section segment -> the sidebar-level category used
// for browsing (currentCat). Used to resolve /product/<section> URLs.
const sectionToCurrentCat = {
  cpvc: "CPVC",
  ppr: "PPR",
  pvc: "PVC",
  "boring-pipe": "BoringPipe",
  hdpe: "HDPE",
  tanks: "Tank",
  garden: "Garden",
  "plastic-products": "PlasticProducts",
  "other-products": "OtherItems",
};

const hashCategoryMap = {
  cpvc: "CPVC",
  upvc: "PVC",
  ppr: "PPR",
  hdpe: "HDPE",
  tpzebra: "Garden",
  borewell: "BoringPipe",
  tripal: "OtherItems",
  tanks: "Tank",
};

function setSEOForProduct(p) {
  document.title = p.name + " | JK House and Suppliers";
  const desc =
    (p.description ? p.description + " " : "") +
    (catLabels[p.category] || p.category) +
    " with live MRP pricing — order from JK House and Suppliers, Nepal.";
  if (metaDescEl) metaDescEl.setAttribute("content", desc.slice(0, 160));
  canonicalEl.setAttribute(
    "href",
    window.location.origin + BASE_PATH + "/" + getProductSectionSlug(p) + "/" + p.slug,
  );
}
function setSEOForCatalog() {
  document.title =
    currentCat === "All"
      ? defaultTitle
      : (catLabels[currentCat] || currentCat) + " | JK House and Suppliers";
  if (metaDescEl) metaDescEl.setAttribute("content", defaultDesc);
  const url =
    currentCat === "All"
      ? defaultCanonical
      : window.location.origin +
        BASE_PATH +
        "/" +
        (categoryUrlSegment[currentCat] || currentCat.toLowerCase());
  canonicalEl.setAttribute("href", url);
}

function syncURLForProduct(p) {
  const url = BASE_PATH + "/" + getProductSectionSlug(p) + "/" + p.slug;
  if (window.location.pathname.replace(/\/+$/, "") !== url) {
    history.pushState({ slug: p.slug }, "", url);
  }
  setSEOForProduct(p);
}
function syncURLForCatalog() {
  const url =
    currentCat === "All"
      ? BASE_PATH
      : BASE_PATH + "/" + (categoryUrlSegment[currentCat] || currentCat.toLowerCase());
  if (window.location.pathname.replace(/\/+$/, "") !== url) {
    history.pushState({}, "", url);
  }
  setSEOForCatalog();
}

function pathPartsAfterBase(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === BASE_PATH) return [];
  if (path.indexOf(BASE_PATH + "/") === 0) {
    return path
      .slice(BASE_PATH.length + 1)
      .split("/")
      .filter(Boolean)
      .map(decodeURIComponent);
  }
  return null;
}

function applyRouteFromLocation() {
  const parts = pathPartsAfterBase(window.location.pathname);
  selectedProductId = null;
  currentCat = "All";

  if (parts && parts.length) {
    const lastSlug = parts[parts.length - 1];
    const p = getProductBySlug(lastSlug);
    if (p) {
      selectedProductId = p.id;
      currentCat = getCurrentCatForProduct(p);
      setSEOForProduct(p);
      return;
    }
    if (parts.length === 1 && sectionToCurrentCat[parts[0]]) {
      // Direct hit on a section/category URL, e.g. /product/hdpe
      currentCat = sectionToCurrentCat[parts[0]];
    } else {
      // Unknown / removed slug or section — fall back to the catalogue.
      history.replaceState({}, "", BASE_PATH);
    }
  }

  const hash = window.location.hash.replace("#", "").toLowerCase();
  if (hash && hashCategoryMap[hash]) {
    currentCat = hashCategoryMap[hash];
  }
  setSEOForCatalog();
}

window.addEventListener("popstate", function () {
  applyRouteFromLocation();
  document
    .querySelectorAll(".cat-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.cat === currentCat));
  render();
});

function selectProduct(id) {
  selectedProductId = id;
  const p = PRODUCTS.find((x) => x.id === id);
  if (p) {
    currentCat = getCurrentCatForProduct(p);
    syncURLForProduct(p);
    document
      .querySelectorAll(".cat-btn")
      .forEach((b) =>
        b.classList.toggle("active", b.dataset.cat === currentCat),
      );
  }
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function closeDetail() {
  selectedProductId = null;
  syncURLForCatalog();
  render();
}
function goHome(e) {
  e.preventDefault();
  selectedProductId = null;
  currentCat = "All";
  currentHdpeSub = "All";
  searchQ = "";
  document
    .querySelectorAll(".cat-btn")
    .forEach((b) => b.classList.remove("active"));
  document.querySelector('.cat-btn[data-cat="All"]').classList.add("active");
  syncURLForCatalog();
  render();
}

function generateSpecsRows(specs) {
  return specs
    .map((s) => {
      const parts = s.split(":");
      if (parts.length > 1) {
        const k = parts[0].trim();
        const v = parts.slice(1).join(":").trim();
        return `<tr><th>${k}</th><td>${v}</td></tr>`;
      }
      return `<tr><th colspan="2">${s}</th></tr>`;
    })
    .join("");
}

function priceTableRows(variants) {
  return variants
    .map(
      (v) =>
        `<tr><td>${v.size}</td><td class="price-col">${v.price ? "NPR " + v.price.toLocaleString() : "—"}</td></tr>`,
    )
    .join("");
}

function updateDetailPrice(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  const idx = +document.getElementById("detail-size-select").value;
  document.getElementById("detail-price").textContent = fmtPrice(
    p.variants[idx].price,
  );
}

function renderRelated(p) {
  const pool = PRODUCTS.filter(
    (x) => x.category === p.category && x.id !== p.id,
  );
  const sample = pool
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 4);
  if (!sample.length) return "";
  return `
    <div class="related-section">
      <div class="related-title">You may also like</div>
      <div class="related-grid">
        ${sample
          .map(
            (r) => `
          <div class="related-card" data-action="select-product" data-id="${r.id}">
            <div class="related-img-wrap"><img src="${r.img}" alt="${r.name}" loading="lazy"></div>
            <div class="related-body">
              <div class="related-cat">${r.category}</div>
              <div class="related-name">${r.name}</div>
              <div class="related-price">${fmtPrice(r.variants[0]?.price)}</div>
            </div>
          </div>`,
          )
          .join("")}
      </div>
    </div>`;
}

function render() {
  const wrapper = document.getElementById("main-content-wrapper");

  if (selectedProductId) {
    const product = PRODUCTS.find((p) => p.id === selectedProductId);
    wrapper.innerHTML = `
      <div class="topbar">
        <button class="back-btn" data-action="close-detail">
          <svg style="width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"/></svg>
          Back to catalogue
        </button>
        <div class="topbar-title" style="margin-left:20px">${product.name}</div>
      </div>

      <div class="detail-view">
        <div class="detail-img-box">
          <img src="${product.img}" alt="${product.name}">
        </div>
        <div>
          <div class="detail-cat">${catTags[product.category] || product.category}</div>
          <h2 class="detail-name">${product.name}</h2>
          <p class="detail-desc">${product.description}</p>
          ${product.notes ? `<p class="detail-notes">${product.notes}</p>` : ""}

          <table class="specs-table">${generateSpecsRows(product.specs)}</table>

          <div class="variant-section">
            <div class="variant-label">Choose size / variant</div>
            <div class="variant-picker">
              <select id="detail-size-select" data-action="update-detail-price" data-id="${product.id}">
                ${sizeOptionsHTML(product, 0)}
              </select>
              <div class="variant-price" id="detail-price">${fmtPrice(product.variants[0]?.price)}</div>
            </div>
          </div>

          <div class="action-box">
            <div class="action-text">
              <strong>MRP inclusive of 13% VAT</strong>
              Get instant pricing quotes for hardware outlets or sites across Nepal.
            </div>
            <button class="enquire-btn" style="padding:12px 24px;font-size:13px;border-radius:8px" data-action="open-enquiry" data-id="${product.id}">Send Quote</button>
          </div>
        </div>
      </div>
      ${renderRelated(product)}
    `;
    return;
  }

  wrapper.innerHTML = `
    <div class="topbar">
      <div class="topbar-title" id="page-title">All products</div>
      <div class="search-wrap">
        <svg class="search-icon" fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803z"/></svg>
        <input type="text" id="search-input" value="${searchQ}" placeholder="Search products..." data-action="search-input">
      </div>
      <div class="view-toggle">
        <button class="vbtn ${currentView === "grid" ? "active" : ""}" id="vbtn-grid" data-action="set-view" data-view="grid">
          <svg fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"/></svg>
        </button>
        <button class="vbtn ${currentView === "list" ? "active" : ""}" id="vbtn-list" data-action="set-view" data-view="list">
          <svg fill="none" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/></svg>
        </button>
      </div>
    </div>

    <div class="hero-bar">
      <div class="hero-bar-text">
        <div class="hero-tag">Nepal's trusted supplier</div>
        <h2 id="hero-title">${currentCat === "All" ? "Quality pipes &amp; fittings<br>for every project" : catLabels[currentCat] || currentCat}</h2>
        <p>Explore CPVC, PPR, PVC / uPVC, Boring Pipe, HDPE, water tanks, garden pipes and other hardware items from ITPF and partner brands for plumbing, drainage and construction across Nepal.</p>
      </div>
      <div class="hero-stats">
        <div class="hstat">
          <div class="hstat-num">${PRODUCTS.length}</div>
          <div class="hstat-label">Products listed</div>
        </div>
        <div class="hstat">
          <div class="hstat-num">${Object.keys(catLabels).length - 1}</div>
          <div class="hstat-label">Product lines</div>
        </div>
      </div>
    </div>

    ${
      currentCat === "HDPE"
        ? `
    <div class="filter-bar">
      <button class="filter-chip ${currentHdpeSub === "All" ? "active" : ""}" data-action="filter-hdpe-sub" data-sub="All">All HDPE</button>
      <button class="filter-chip ${currentHdpeSub === "NSHDPE" ? "active" : ""}" data-action="filter-hdpe-sub" data-sub="NSHDPE">NS HDPE</button>
      <button class="filter-chip ${currentHdpeSub === "NSQHDPE" ? "active" : ""}" data-action="filter-hdpe-sub" data-sub="NSQHDPE">NSQ HDPE</button>
    </div>`
        : ""
    }

    <div class="filter-bar">
      <button class="filter-chip ${currentCat === "All" ? "active" : ""}" data-action="filter-chip" data-cat="All">All</button>
      <button class="filter-chip ${currentCat === "CPVC" ? "active" : ""}" data-action="filter-chip" data-cat="CPVC">CPVC</button>
      <button class="filter-chip ${currentCat === "PPR" ? "active" : ""}" data-action="filter-chip" data-cat="PPR">PPR</button>
      <button class="filter-chip ${currentCat === "PVC" ? "active" : ""}" data-action="filter-chip" data-cat="PVC">PVC / uPVC</button>
      <button class="filter-chip ${currentCat === "BoringPipe" ? "active" : ""}" data-action="filter-chip" data-cat="BoringPipe">Boring Pipe</button>
      <button class="filter-chip ${currentCat === "HDPE" ? "active" : ""}" data-action="filter-chip" data-cat="HDPE">HDPE</button>
      <button class="filter-chip ${currentCat === "Tank" ? "active" : ""}" data-action="filter-chip" data-cat="Tank">Tanks</button>
      <button class="filter-chip ${currentCat === "Garden" ? "active" : ""}" data-action="filter-chip" data-cat="Garden">Garden Pipes</button>
      <button class="filter-chip ${currentCat === "PlasticProducts" ? "active" : ""}" data-action="filter-chip" data-cat="PlasticProducts">Plastic Products</button>
      <button class="filter-chip ${currentCat === "OtherItems" ? "active" : ""}" data-action="filter-chip" data-cat="OtherItems">Other Products</button>
      <span class="result-count" id="result-count">0 products</span>
    </div>

    <div class="products-area">
      <div class="products-grid" id="products-container"></div>
    </div>
  `;

  const list = getFiltered();
  const c = document.getElementById("products-container");

  if (currentCat === "All") {
    c.className = "products-sections";
    c.innerHTML = list.length
      ? renderSectioned(list, currentView)
      : `<div class="empty">${pipeSVG()}<p>No products found</p></div>`;
  } else if (currentView === "grid") {
    c.className = "products-grid";
    c.innerHTML = list.length
      ? renderGrid(list)
      : `<div class="empty">${pipeSVG()}<p>No products found</p></div>`;
  } else {
    c.className = "products-list";
    c.innerHTML = list.length
      ? renderList(list)
      : `<div class="empty">${pipeSVG()}<p>No products found</p></div>`;
  }

  document.getElementById("result-count").textContent =
    list.length + " product" + (list.length !== 1 ? "s" : "");
  const t =
    currentCat === "All" ? "All products" : catLabels[currentCat] || currentCat;
  document.getElementById("page-title").textContent = t;
  updateSidebarCounts();
}

function updateSidebarCounts() {
  document.getElementById("cnt-All").textContent = "(" + PRODUCTS.length + ")";
  document.getElementById("cnt-CPVC").textContent =
    "(" + PRODUCTS.filter((p) => p.category === "CPVC").length + ")";
  document.getElementById("cnt-PPR").textContent =
    "(" + PRODUCTS.filter((p) => p.category === "PPR").length + ")";
  document.getElementById("cnt-PVC").textContent =
    "(" + PRODUCTS.filter((p) => p.category === "PVC").length + ")";
  document.getElementById("cnt-BoringPipe").textContent =
    "(" + PRODUCTS.filter((p) => p.category === "BoringPipe").length + ")";
  document.getElementById("cnt-HDPE").textContent =
    "(" +
    PRODUCTS.filter(
      (p) => p.category === "NSHDPE" || p.category === "NSQHDPE",
    ).length +
    ")";
  document.getElementById("cnt-Tank").textContent =
    "(" + PRODUCTS.filter((p) => p.category === "Tank").length + ")";
  document.getElementById("cnt-Garden").textContent =
    "(" + PRODUCTS.filter((p) => p.category === "Garden").length + ")";
  document.getElementById("cnt-PlasticProducts").textContent =
    "(" + PRODUCTS.filter((p) => p.category === "PlasticProducts").length + ")";
  document.getElementById("cnt-OtherItems").textContent =
    "(" + PRODUCTS.filter((p) => p.category === "OtherItems").length + ")";
}

function filterCat(btn, cat) {
  selectedProductId = null;
  currentCat = cat;
  currentHdpeSub = "All";
  document
    .querySelectorAll(".cat-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  syncURLForCatalog();
  render();
}
function filterHdpeSub(chip, sub) {
  currentHdpeSub = sub;
  render();
}

function filterChip(chip, cat) {
  currentCat = cat;
  currentHdpeSub = "All";
  selectedProductId = null;
  syncURLForCatalog();
  render();
  document
    .querySelectorAll(".cat-btn")
    .forEach((b) => b.classList.toggle("active", b.dataset.cat === cat));
}
function setView(v) {
  currentView = v;
  render();
}
function handleSearch() {
  searchQ = document.getElementById("search-input").value;
  const list = getFiltered();
  const c = document.getElementById("products-container");
  if (currentCat === "All") {
    c.className = "products-sections";
    c.innerHTML = list.length
      ? renderSectioned(list, currentView)
      : `<div class="empty">${pipeSVG()}<p>No products found</p></div>`;
  } else if (currentView === "grid") {
    c.className = "products-grid";
    c.innerHTML = list.length
      ? renderGrid(list)
      : `<div class="empty">${pipeSVG()}<p>No products found</p></div>`;
  } else {
    c.className = "products-list";
    c.innerHTML = list.length
      ? renderList(list)
      : `<div class="empty">${pipeSVG()}<p>No products found</p></div>`;
  }
  document.getElementById("result-count").textContent =
    list.length + " product" + (list.length !== 1 ? "s" : "");
}

/* ---- Enquiry / Send Quote modal ---- */
function openEnquiry(id, variantIdx) {
  const p = PRODUCTS.find((x) => x.id === id);
  let idx = variantIdx;
  if (idx === undefined) {
    const sel = document.getElementById("detail-size-select");
    idx = sel ? +sel.value : 0;
  }
  const v = p.variants[idx] || p.variants[0];
  document.getElementById("eqTitle").textContent = "Enquire: " + p.name;
  document.getElementById("eqProduct").value =
    p.name + " – " + (v ? v.size : "");
  document.getElementById("eqMessage").value = "";
  document.getElementById("eqName").value = "";
  document.getElementById("eqPhone").value = "";
  document.getElementById("eqEmail").value = "";
  document.getElementById("enquiryModal").classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeEnqModal(e) {
  if (e === true || (e && e.target && e.target.id === "enquiryModal")) {
    document.getElementById("enquiryModal").classList.remove("open");
    document.body.style.overflow = "";
  }
}
function submitEnquiry() {
  const name = document.getElementById("eqName").value.trim();
  const phone = document.getElementById("eqPhone").value.trim();
  const product = document.getElementById("eqProduct").value.trim();
  const msg = document.getElementById("eqMessage").value.trim();
  const email = document.getElementById("eqEmail").value.trim();
  if (!name || !phone) {
    alert("Please enter your name and phone number.");
    return;
  }
  const subject = encodeURIComponent("Quote Request: " + product);
  const body = encodeURIComponent(
    "Quote Request\n\nName: " +
      name +
      "\nPhone: " +
      phone +
      "\nEmail: " +
      email +
      "\n\nProduct: " +
      product +
      "\n\nMessage:\n" +
      msg +
      "\n\n---\nSent from ITPF Catalogue",
  );
  window.location.href =
    "mailto:jkhouseandsuppliers7@gmail.com?subject=" + subject + "&body=" + body;
  closeEnqModal(true);
}

/* ============================================================
   Centralized event delegation (CSP-safe — no inline handlers)
   Every interactive element in the static HTML and in the
   dynamically-rendered templates carries a data-action attribute
   (plus data-id / data-cat / data-view / data-sub as needed)
   instead of an inline onclick/onchange/oninput attribute. These
   three listeners on `document` read that attribute and dispatch
   to the right function. Using .closest("[data-action]") means a
   click that starts on an inner element (e.g. the size <select>
   inside a product card) resolves to the NEAREST data-action
   ("stop" / "update-grid-price"), not the outer card's
   "select-product" — this reproduces the old event.stopPropagation()
   behaviour without relying on real DOM bubbling through the
   delegated listener.
   ============================================================ */
document.addEventListener("click", function (e) {
  const target = e.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;
  const id = target.dataset.id ? +target.dataset.id : null;

  switch (action) {
    case "go-home":
      goHome(e);
      break;
    case "filter-cat":
      filterCat(target, target.dataset.cat);
      break;
    case "filter-chip":
      filterChip(target, target.dataset.cat);
      break;
    case "filter-hdpe-sub":
      filterHdpeSub(target, target.dataset.sub);
      break;
    case "set-view":
      setView(target.dataset.view);
      break;
    case "select-product":
      selectProduct(id);
      break;
    case "close-detail":
      closeDetail();
      break;
    case "enquire-from-card":
      enquireFromCard(id);
      break;
    case "open-enquiry":
      openEnquiry(id);
      break;
    case "close-enq-modal-backdrop":
    case "close-enq-modal-btn":
      closeEnqModal(true);
      break;
    case "submit-enquiry":
      submitEnquiry();
      break;
    case "stop":
      // Absorbs the click so it doesn't resolve to an outer
      // data-action (e.g. clicking inside the modal shouldn't
      // close it; clicking the size dropdown shouldn't open the
      // product page).
      break;
    default:
      break;
  }
});

document.addEventListener("change", function (e) {
  const target = e.target.closest("[data-action]");
  if (!target) return;
  const id = target.dataset.id ? +target.dataset.id : null;

  switch (target.dataset.action) {
    case "update-grid-price":
      updateGridPrice(id);
      break;
    case "update-list-price":
      updateListPrice(id);
      break;
    case "update-detail-price":
      updateDetailPrice(id);
      break;
    default:
      break;
  }
});

document.addEventListener("input", function (e) {
  const target = e.target.closest("[data-action]");
  if (!target) return;
  if (target.dataset.action === "search-input") {
    handleSearch();
  }
});

applyRouteFromLocation();
document
  .querySelectorAll(".cat-btn")
  .forEach((b) => b.classList.toggle("active", b.dataset.cat === currentCat));
render();

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (currentCat === "All" && !selectedProductId) render();
  }, 200);
});
