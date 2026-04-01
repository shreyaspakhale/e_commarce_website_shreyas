import { Product, Review } from './types';

export const PRODUCTS: Product[] = [
  // MICE (10)
  {
    id: 'm1',
    name: 'Viper V3 Pro Wireless',
    description: 'Ultra-lightweight gaming mouse with 30K DPI optical sensor and 8KHz polling.',
    price: 159.99,
    category: 'mouse',
    image: 'https://m.media-amazon.com/images/I/71tuAoPh-LL._AC_.jpg',
    features: ['30K DPI', '95h Battery', 'Focus Pro 30K Sensor'],
    specs: [{ label: 'Weight', value: '54g' }, { label: 'Polling', value: '8000Hz' }],
    relatedIds: ['k1', 'mon4'],
    inStock: true
  },
  {
    id: 'm2',
    name: 'G Pro X Superlight 2',
    description: 'The next generation of our championship-winning wireless mouse.',
    price: 159.00,
    category: 'mouse',
    image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6556/6556759cv16d.jpg',
    features: ['LIGHTFORCE Switches', 'HERO 2 Sensor', '95h Battery'],
    specs: [{ label: 'Weight', value: '60g' }, { label: 'Sensor', value: 'HERO 2' }],
    relatedIds: ['k2', 'mon7'],
    inStock: true
  },
  {
    id: 'm3',
    name: 'DeathAdder V3 Pro',
    description: 'Refined ergonomic shape for the ultimate competitive edge.',
    price: 149.99,
    category: 'mouse',
    image: 'https://cdn.mos.cms.futurecdn.net/q52BzRARSogJQ43DX3noBV.jpg',
    features: ['Ultra-lightweight', 'Optical Switches Gen-3', 'HyperPolling 8KHz'],
    specs: [{ label: 'Polling Rate', value: '8000Hz' }, { label: 'Shape', value: 'Ergonomic' }],
    relatedIds: ['k4', 'mon1'],
    inStock: false
  },
  {
    id: 'm4',
    name: 'SteelSeries Rival 600',
    description: 'Dual sensor system for true 1-to-1 tracking.',
    price: 79.99,
    category: 'mouse',
    image: 'https://brain-images-ssl.cdn.dixons.com/1/4/10176441/u_10176441.jpg',
    features: ['TrueMove3+ Sensor', 'Weight Tuning', 'Silicone Side Grips'],
    specs: [{ label: 'DPI', value: '12000' }, { label: 'Buttons', value: '7' }],
    relatedIds: ['k6', 'c1'],
    inStock: true
  },
  {
    id: 'm5',
    name: 'Glorious Model O Wireless',
    description: 'Honeycomb shell for maximum speed and comfort.',
    price: 79.99,
    category: 'mouse',
    image: 'https://m.media-amazon.com/images/I/71NIDI1+nRL._AC_.jpg',
    features: ['BAMF Sensor', '69g Weight', 'G-Skates Feet'],
    specs: [{ label: 'Battery', value: '71h' }, { label: 'Shell', value: 'Honeycomb' }],
    relatedIds: ['k5', 'mon3'],
    inStock: true
  },
  {
    id: 'm6',
    name: 'Corsair Dark Core RGB Pro',
    description: 'High-performance wireless gaming mouse with Qi charging.',
    price: 89.99,
    category: 'mouse',
    image: 'https://devicetuning.com/wp-content/uploads/2025/product/155-dark-core-rgb-pro-wireless-gaming-mouse-6.jpg',
    features: ['SLIPSTREAM Wireless', '18K DPI Sensor', 'Qi Charging'],
    specs: [{ label: 'RGB', value: '9-Zone' }, { label: 'Charging', value: 'Qi Wireless' }],
    relatedIds: ['k9', 'c4'],
    inStock: true
  },
  {
    id: 'm7',
    name: 'Zowie EC2-C',
    description: 'The gold standard for ergonomic competitive gaming.',
    price: 69.99,
    category: 'mouse',
    image: 'https://image.benq.com/is/image/benqco/01-ec2-cw-top?$ResponsivePreset$&fmt=png-alpha',
    features: ['Plug & Play', 'Paracord Cable', '3360 Sensor'],
    specs: [{ label: 'Weight', value: '73g' }, { label: 'Cable', value: 'Paracord' }],
    relatedIds: ['k3', 'mon9'],
    inStock: true
  },
  {
    id: 'm8',
    name: 'Finalmouse Starlight-12',
    description: 'Magnesium alloy chassis for extreme lightweight performance.',
    price: 189.00,
    category: 'mouse',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800',
    features: ['Magnesium Alloy', '42g Weight', 'Godspeed Wireless'],
    specs: [{ label: 'Material', value: 'Magnesium' }, { label: 'Weight', value: '42g' }],
    relatedIds: ['k10', 'mon7'],
    inStock: true
  },
  {
    id: 'm9',
    name: 'Roccat Kone XP Air',
    description: 'Stunning 3D RGB lighting with multi-button versatility.',
    price: 129.99,
    category: 'mouse',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800',
    features: ['3D RGB', 'Owl-Eye 19K', 'Rapid Charge'],
    specs: [{ label: 'Buttons', value: '15' }, { label: 'RGB', value: '22 LEDs' }],
    relatedIds: ['k5', 'c2'],
    inStock: true
  },
  {
    id: 'm10',
    name: 'Asus ROG Spatha X',
    description: 'Massive wireless gaming mouse for MMO dominance.',
    price: 149.99,
    category: 'mouse',
    image: 'https://m.media-amazon.com/images/I/31FA8aduWCL.jpg',
    features: ['12 Buttons', 'Magnetic Stand', '19K DPI'],
    specs: [{ label: 'Type', value: 'MMO' }, { label: 'Connectivity', value: 'Dual-Mode' }],
    relatedIds: ['k1', 'mon10'],
    inStock: true
  },

  // MONITORS (10)
  {
    id: 'mon1',
    name: 'Odyssey Neo G9',
    description: '49-inch curved gaming monitor with Quantum Mini LED and 240Hz refresh rate.',
    price: 1799.00,
    category: 'monitor',
    image: 'https://laptopmedia.com/wp-content/uploads/2024/01/uk-odyssey-neo-g9-g95na-394414-ls49ag950npxxu-536424042-1000x1072.jpg',
    features: ['Quantum HDR 2000', '240Hz', '1000R Curve'],
    specs: [{ label: 'Size', value: '49"' }, { label: 'Refresh', value: '240Hz' }],
    relatedIds: ['g1', 'c1'],
    inStock: true
  },
  {
    id: 'mon2',
    name: 'LG UltraGear 27GP950-B',
    description: '4K Nano IPS gaming monitor with HDMI 2.1.',
    price: 799.00,
    category: 'monitor',
    image: 'https://i.ebayimg.com/images/g/8B4AAOSwADtkjIBT/s-l225.jpg',
    features: ['4K UHD', '144Hz (160Hz OC)', 'Nano IPS'],
    specs: [{ label: 'Resolution', value: '3840x2160' }, { label: 'HDMI', value: '2.1' }],
    relatedIds: ['g3', 'c4'],
    inStock: true
  },
  {
    id: 'mon3',
    name: 'Alienware AW3423DW OLED',
    description: 'The world\'s first QD-OLED gaming monitor.',
    price: 1299.00,
    category: 'monitor',
    image: 'https://nationalpc.in/image/cache/catalog/product/Monitor/Dell/Alienware/AW3423DWF/3-560x560.jpg.webp',
    features: ['QD-OLED', '175Hz', '0.1ms GtG'],
    specs: [{ label: 'Panel', value: 'QD-OLED' }, { label: 'Curve', value: '1800R' }],
    relatedIds: ['g5', 'c2'],
    inStock: true
  },
  {
    id: 'mon4',
    name: 'ASUS ROG Swift PG279QM',
    description: '240Hz WQHD gaming monitor with NVIDIA Reflex.',
    price: 749.00,
    category: 'monitor',
    image: 'https://c1.neweggimages.com/productimage/nb640/24-281-148-V81.jpg',
    features: ['240Hz', 'G-SYNC Processor', 'Reflex Analyzer'],
    specs: [{ label: 'Resolution', value: '2560x1440' }, { label: 'Size', value: '27"' }],
    relatedIds: ['g1', 'c1'],
    inStock: true
  },
  {
    id: 'mon5',
    name: 'BenQ ZOWIE XL2546K',
    description: 'The preferred monitor for CS:GO pro players.',
    price: 499.00,
    category: 'monitor',
    image: 'https://i.ebayimg.com/images/g/VzIAAeSwOBtov1wB/s-l500.jpg',
    features: ['240Hz', 'DyAc+ Technology', 'S-Switch'],
    specs: [{ label: 'Panel', value: 'TN' }, { label: 'Size', value: '24.5"' }],
    relatedIds: ['g2', 'm7'],
    inStock: true
  },
  {
    id: 'mon6',
    name: 'Gigabyte M27Q',
    description: 'The world\'s first gaming monitor with KVM.',
    price: 299.00,
    category: 'monitor',
    image: 'https://shwetacomputers.com/cdn/shop/files/GigabyteM27QGamingMonitor1.webp?v=1740761847&width=1600',
    features: ['170Hz', 'KVM Switch', 'SuperSpeed IPS'],
    specs: [{ label: 'Resolution', value: '1440p' }, { label: 'KVM', value: 'Built-in' }],
    relatedIds: ['m5', 'k2'],
    inStock: true
  },
  {
    id: 'mon7',
    name: 'MSI Optix MAG274QRF-QD',
    description: 'Quantum Dot technology for incredible color accuracy.',
    price: 419.00,
    category: 'monitor',
    image: 'https://i0.wp.com/images10.newegg.com/BizIntell/item/24/475/24-475-096/MSI%20Gaming%20Monitor-Optix%20MAG274QRF-QD-a15.jpg?w=1200&ssl=1',
    features: ['Quantum Dot', '165Hz', 'Rapid IPS'],
    specs: [{ label: 'Color', value: '97% DCI-P3' }, { label: 'Size', value: '27"' }],
    relatedIds: ['g4', 'c1'],
    inStock: true
  },
  {
    id: 'mon8',
    name: 'Acer Predator X38',
    description: 'Massive 37.5-inch curved ultra-wide gaming monitor.',
    price: 1499.00,
    category: 'monitor',
    image: 'https://i.ebayimg.com/thumbs/images/g/BisAAOSwFG9kU0bQ/s-l300.jpg',
    features: ['UWQHD+', '175Hz OC', 'G-SYNC'],
    specs: [{ label: 'Size', value: '37.5"' }, { label: 'Curve', value: '2300R' }],
    relatedIds: ['g7', 'c8'],
    inStock: true
  },
  {
    id: 'mon9',
    name: 'Dell S2721DGF',
    description: 'Fast IPS gaming monitor with 165Hz refresh rate.',
    price: 329.00,
    category: 'monitor',
    image: 'https://cdn.mos.cms.futurecdn.net/ZWM8nhTZT3wDJKf5Prxnn7.jpg',
    features: ['165Hz', 'IPS Panel', 'AMD FreeSync Premium'],
    specs: [{ label: 'Resolution', value: '1440p' }, { label: 'Response', value: '1ms' }],
    relatedIds: ['m2', 'k2'],
    inStock: true
  },
  {
    id: 'mon10',
    name: 'ViewSonic Elite XG270QG',
    description: 'Nano IPS panel with 1ms response and G-SYNC.',
    price: 599.00,
    category: 'monitor',
    image: 'https://m.media-amazon.com/images/I/71dZw9G2TOL.jpg',
    features: ['Nano IPS', '165Hz', 'ELITE Design Enhancements'],
    specs: [{ label: 'Panel', value: 'Nano IPS' }, { label: 'Size', value: '27"' }],
    relatedIds: ['g3', 'c4'],
    inStock: true
  },

  //  // PC CABINETS (10)
  {
    id: 'c1',
    name: 'Lian Li O11 Dynamic EVO',
    description: 'The legendary dual-chamber chassis, evolved for ultimate hardware visibility.',
    price: 169.99,
    category: 'cabinet',
    image: 'https://img.modxcomputers.com/modx/1753705134096-Lian-Li-O11-Dynamic-EVO-RGB-White-3.webp',
    features: ['Dual Chamber', 'Tempered Glass', 'Modular Design'],
    specs: [
      { label: 'Type', value: 'Mid-Tower' },
      { label: 'Material', value: 'Steel / Aluminum' },
      { label: 'GPU Clearance', value: '422mm' }
    ],
    relatedIds: ['g1', 'mon1'],
    inStock: true
  },
  {
    id: 'c2',
    name: 'NZXT H9 Elite',
    description: 'A stunning showcase for your high-end components with seamless glass panels.',
    price: 239.99,
    category: 'cabinet',
    image: 'https://pausehardware.com/wp-content/uploads/2024/03/fractal-design-north-xl-facade-arriere-1024x1024.jpg',
    features: ['Seamless Glass', 'RGB Fans Included', 'High Airflow'],
    specs: [
      { label: 'Type', value: 'Dual-Chamber Mid-Tower' },
      { label: 'Fans', value: '3x 120mm RGB' },
      { label: 'Radiator Support', value: 'Up to 360mm' }
    ],
    relatedIds: ['g7', 'mon10'],
    inStock: true
  },
  {
    id: 'c3',
    name: 'Fractal Design North',
    description: 'Natural materials meet high-performance engineering for a sophisticated setup.',
    price: 149.99,
    category: 'cabinet',
    image: 'https://gzhls.at/pix/c5/fe/c5fe01966aaaf1e2-n.webp',
    features: ['Real Walnut/Oak', 'Open Front', 'Compact Footprint'],
    specs: [
      { label: 'Type', value: 'Mid-Tower' },
      { label: 'Front Panel', value: 'Genuine Wood' },
      { label: 'Airflow', value: 'High-Performance' }
    ],
    relatedIds: ['mon9', 'm10'],
    inStock: true
  },
  {
    id: 'c4',
    name: 'Hyte Y60',
    description: 'Panoramic 3-piece tempered glass design for a truly unique perspective.',
    price: 199.99,
    category: 'cabinet',
    image: 'https://c1.neweggimages.com/productimage/nb640/11-854-122-09.jpg',
    features: ['Panoramic Glass', 'Vertical GPU Mount', 'Cold Floor Cooling'],
    specs: [
      { label: 'Type', value: 'Mid-Tower' },
      { label: 'GPU Mount', value: 'PCIe 4.0 Riser Included' },
      { label: 'Glass', value: '3-Piece Tempered' }
    ],
    relatedIds: ['g3', 'mon5'],
    inStock: true
  },
  {
    id: 'c5',
    name: 'Phanteks NV7',
    description: 'A near-seamless glass chassis designed for clean cable management.',
    price: 219.99,
    category: 'cabinet',
    image: 'https://i.redd.it/ev6g7pctmbb61.png',
    features: ['Near-Seamless Glass', 'Cable Management Door', 'D-RGB Lighting'],
    specs: [
      { label: 'Type', value: 'Full-Tower' },
      { label: 'Fan Support', value: 'Up to 12x 120mm' },
      { label: 'Motherboard', value: 'Up to E-ATX' }
    ],
    relatedIds: ['m7', 'k3'],
    inStock: true
  },
  {
    id: 'c6',
    name: 'Corsair 5000D Airflow',
    description: 'Optimized high-airflow front panel for maximum cooling potential.',
    price: 154.99,
    category: 'cabinet',
    image: 'https://m.media-amazon.com/images/I/61A7UpvahjL.jpg',
    features: ['High-Airflow Panel', 'RapidRoute Cable Management', 'Spacious Interior'],
    specs: [
      { label: 'Type', value: 'Mid-Tower' },
      { label: 'Fans', value: '2x 120mm Included' },
      { label: 'Radiator', value: 'Up to 360mm' }
    ],
    relatedIds: ['mon6', 'm6'],
    inStock: true
  },
  {
    id: 'c7',
    name: 'Cooler Master HAF 700 EVO',
    description: 'The ultimate high-airflow flagship with an integrated LCD display.',
    price: 499.99,
    category: 'cabinet',
    image: 'https://www.enostech.com/wp-content/uploads/2024/03/be-quiet-Dark-Base-901-Featured-1280x640.jpg',
    features: ['Iris LCD Display', 'Tool-less Design', 'Extreme Cooling'],
    specs: [
      { label: 'Type', value: 'Full-Tower' },
      { label: 'Display', value: 'Iris LCD' },
      { label: 'Fans', value: '2x 200mm SickleFlow' }
    ],
    relatedIds: ['m9', 'k8'],
    inStock: true
  },
  {
    id: 'c8',
    name: 'Be Quiet! Dark Base Pro 901',
    description: 'The pinnacle of silent performance and modular flexibility.',
    price: 299.99,
    category: 'cabinet',
    image: 'https://mdcomputers.in/image/catalog/cabinet/thermaltake/ca-1g4-00m1wn-09/ca-1g4-00m1wn-09-image-4.jpg',
    features: ['Silent Wings 4 Fans', 'Wireless Charging', 'Invertible Layout'],
    specs: [
      { label: 'Type', value: 'Full-Tower' },
      { label: 'Noise Control', value: 'Sound Dampening Mats' },
      { label: 'Charger', value: '15W Wireless' }
    ],
    relatedIds: ['mon8', 'g7'],
    inStock: true
  },
  {
    id: 'c9',
    name: 'Thermaltake Core P3 TG',
    description: 'Open-frame chassis for the ultimate custom water-cooling showcase.',
    price: 139.99,
    category: 'cabinet',
    image: 'https://gzhls.at/pix/07/37/0737a6386d553ba4-m.webp',
    features: ['Open Frame', 'Wall Mountable', 'DMD Design'],
    specs: [
      { label: 'Type', value: 'Mid-Tower' },
      { label: 'Mounting', value: '3-Way Placement' },
      { label: 'Glass', value: '5mm Tempered' }
    ],
    relatedIds: ['m3', 'k4'],
    inStock: true
  },
  {
    id: 'c10',
    name: 'SSUPD Meshlicious',
    description: 'A small form factor case with full mesh panels for incredible cooling.',
    price: 109.99,
    category: 'cabinet',
    image: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&q=80&w=800',
    features: ['Full Mesh', 'SFF Layout', 'PCIe 4.0 Support'],
    specs: [
      { label: 'Type', value: 'Mini-ITX' },
      { label: 'Volume', value: '14.6 Liters' },
      { label: 'GPU Support', value: 'Up to 4-Slot' }
    ],
    relatedIds: ['g5', 'mon2'],
    inStock: true
  },

  // GRAPHICS (10)
  {
    id: 'g1',
    name: 'GeForce RTX 4090',
    description: 'The ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics.',
    price: 1599.99,
    category: 'graphics',
    image: 'https://wallpapercave.com/wp/wp12175244.jpg',
    features: ['24GB G6X', 'DLSS 3.5', 'Ray Tracing'],
    specs: [
      { label: 'VRAM', value: '24GB GDDR6X' },
      { label: 'TDP', value: '450W' },
      { label: 'Cores', value: '16384 CUDA' }
    ],
    relatedIds: ['c1', 'mon1'],
    inStock: true
  },
  {
    id: 'g2',
    name: 'AMD Radeon RX 7900 XTX',
    description: 'Experience unprecedented performance, visuals, and efficiency at 4K.',
    price: 949.99,
    category: 'graphics',
    image: 'https://cdn.mos.cms.futurecdn.net/r7pbFioMSessdwVRGBFWYe.jpg',
    features: ['24GB GDDR6', 'FSR 3', 'RDNA 3 Architecture'],
    specs: [
      { label: 'VRAM', value: '24GB GDDR6' },
      { label: 'TDP', value: '355W' },
      { label: 'Bus', value: '384-bit' }
    ],
    relatedIds: ['c1', 'mon3'],
    inStock: true
  },
  {
    id: 'g3',
    name: 'ASUS ROG Strix RTX 4080 Super',
    description: 'Overclocked performance with the most advanced cooling system.',
    price: 1249.99,
    category: 'graphics',
    image: 'https://cdn.videocardz.com/1/2022/03/EVGA-GeForce-RTX-3090-Ti-24GB-FTW3-ULTRA2.jpg',
    features: ['16GB G6X', 'Axial-tech Fans', 'Aura Sync'],
    specs: [
      { label: 'VRAM', value: '16GB GDDR6X' },
      { label: 'Boost Clock', value: '2670 MHz' },
      { label: 'Slots', value: '3.5-Slot' }
    ],
    relatedIds: ['c4', 'mon5'],
    inStock: true
  },
  {
    id: 'g4',
    name: 'MSI Suprim X RTX 4070 Ti',
    description: 'Premium design and high-end performance for demanding gamers.',
    price: 849.99,
    category: 'graphics',
    image: 'https://www.alktech.co/hs-fs/hubfs/MSI%20GeForce%20RTX%204070%20Ti%20SUPRIM%20X%2012G/Aesthetics%20(2).jpg?width=1920&height=1080&name=Aesthetics%20(2).jpg',
    features: ['12GB G6X', 'TRI FROZR 3S', 'Dual BIOS'],
    specs: [
      { label: 'VRAM', value: '12GB GDDR6X' },
      { label: 'Memory Speed', value: '21 Gbps' },
      { label: 'Output', value: '3x DP, 1x HDMI' }
    ],
    relatedIds: ['c1', 'mon1'],
    inStock: true
  },
  {
    id: 'g5',
    name: 'Sapphire Nitro+ RX 7800 XT',
    description: 'High-performance cooling and build quality for the RDNA 3 flagship.',
    price: 549.99,
    category: 'graphics',
    image: 'https://cdn.videocardz.com/1/2022/03/EVGA-GeForce-RTX-3090-Ti-24GB-FTW3-ULTRA2.jpg',
    features: ['16GB GDDR6', 'Vapor-X Cooling', 'Quick Connect Fan'],
    specs: [
      { label: 'VRAM', value: '16GB GDDR6' },
      { label: 'Memory Bus', value: '256-bit' },
      { label: 'Cores', value: '3840 Stream' }
    ],
    relatedIds: ['c2', 'mon2'],
    inStock: true
  },
  {
    id: 'g6',
    name: 'EVGA RTX 3090 Ti FTW3',
    description: 'The ultimate Ampere GPU, built for extreme performance.',
    price: 1099.99,
    category: 'graphics',
    image: 'https://cdn.thefpsreview.com/wp-content/uploads/2022/08/4-1-1024x575.jpg',
    features: ['24GB G6X', 'iCX3 Technology', 'ARGB Lighting'],
    specs: [
      { label: 'VRAM', value: '24GB GDDR6X' },
      { label: 'Memory Bandwidth', value: '1008 GB/s' },
      { label: 'Cores', value: '10752 CUDA' }
    ],
    relatedIds: ['c2', 'mon1'],
    inStock: true
  },
  {
    id: 'g7',
    name: 'Gigabyte AORUS Master RTX 4090',
    description: 'Featuring the WINDFORCE cooling system and an LCD Edge View.',
    price: 1799.99,
    category: 'graphics',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1064/10646858/1241-gigabyte-aorus-geforce-rtx-4090-master-24gb-gddr6x.jpg',
    features: ['LCD Edge View', 'WINDFORCE Cooling', 'RGB Fusion'],
    specs: [
      { label: 'VRAM', value: '24GB GDDR6X' },
      { label: 'Display', value: 'Integrated LCD' },
      { label: 'Power', value: '16-pin 12VHPWR' }
    ],
    relatedIds: ['c2', 'mon10'],
    inStock: true
  },
  {
    id: 'g8',
    name: 'PowerColor Red Devil RX 7900 XT',
    description: 'Unleash the devil within with extreme cooling and power delivery.',
    price: 849.99,
    category: 'graphics',
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=800',
    features: ['20GB GDDR6', 'Triple Fan', 'Metal Backplate'],
    specs: [
      { label: 'VRAM', value: '20GB GDDR6' },
      { label: 'Memory Bus', value: '320-bit' },
      { label: 'Cores', value: '5376 Stream' }
    ],
    relatedIds: ['c6', 'mon6'],
    inStock: true
  },
  {
    id: 'g9',
    name: 'ZOTAC Gaming RTX 4060 Ti',
    description: 'Compact design with powerful performance for 1080p gaming.',
    price: 399.99,
    category: 'graphics',
    image: 'https://cdn.mos.cms.futurecdn.net/r7pbFioMSessdwVRGBFWYe.jpg',
    features: ['8GB G6', 'IceStorm 2.0', 'Compact Size'],
    specs: [
      { label: 'VRAM', value: '8GB GDDR6' },
      { label: 'Memory Speed', value: '18 Gbps' },
      { label: 'Length', value: '225.5mm' }
    ],
    relatedIds: ['c3', 'mon9'],
    inStock: true
  },
  {
    id: 'g10',
    name: 'Intel Arc A770 Limited Edition',
    description: 'High-performance gaming with Intel Xe HPG architecture.',
    price: 349.99,
    category: 'graphics',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1064/10646858/1241-gigabyte-aorus-geforce-rtx-4090-master-24gb-gddr6x.jpg',
    features: ['16GB GDDR6', 'XeSS Support', 'Ray Tracing'],
    specs: [
      { label: 'VRAM', value: '16GB GDDR6' },
      { label: 'Memory Bandwidth', value: '560 GB/s' },
      { label: 'Cores', value: '32 Xe-cores' }
    ],
    relatedIds: ['c8', 'mon8'],
    inStock: true
  },

  // KEYBOARDS (10)
  {
    id: 'k1',
    name: 'Wooting 60HE+',
    description: 'The world\'s fastest gaming keyboard with analog Hall Effect switches.',
    price: 174.99,
    category: 'keyboard',
    image: 'https://reviewed-com-res.cloudinary.com/image/fetch/s--W_KJL3fa--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_792/https://reviewed-production.s3.amazonaws.com/attachment/6b2305f0047f441b/Wooting-60he_H6.png',
    features: ['Analog Input', 'Rapid Trigger', 'Lekker Switches'],
    specs: [
      { label: 'Layout', value: '60%' },
      { label: 'Switches', value: 'Hall Effect' },
      { label: 'Latency', value: '< 1ms' }
    ],
    relatedIds: ['m1', 'mon1'],
    inStock: true
  },
  {
    id: 'k2',
    name: 'Logitech G Pro X TKL',
    description: 'Designed with pros, engineered to win. The ultimate TKL.',
    price: 199.99,
    category: 'keyboard',
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/1077/10772985/3439-logitech-g-pro-x-tkl-lightspeed-teclado-inalambrico-gaming-negro-rgb-lightsync-gx-brown-mejor-precio.jpg',
    features: ['LIGHTSPEED Wireless', 'GX Switches', 'PBT Keycaps'],
    specs: [
      { label: 'Layout', value: 'TKL' },
      { label: 'Connectivity', value: 'Wireless/BT/USB' },
      { label: 'Battery', value: 'Up to 50h' }
    ],
    relatedIds: ['m2', 'mon3'],
    inStock: true
  },
  {
    id: 'k3',
    name: 'SteelSeries Apex Pro TKL',
    description: 'The fastest mechanical keyboard with adjustable actuation.',
    price: 189.99,
    category: 'keyboard',
    image: 'https://www.lttstore.com/cdn/shop/files/apex_pro_tkl_wl_us_top.png?v=1756248376&width=1445',
    features: ['OmniPoint 2.0', 'OLED Display', 'Aircraft Grade Aluminum'],
    specs: [
      { label: 'Layout', value: 'TKL' },
      { label: 'Actuation', value: '0.2mm to 3.8mm' },
      { label: 'Display', value: 'OLED Smart Display' }
    ],
    relatedIds: ['m7', 'c5'],
    inStock: true
  },
  {
    id: 'k4',
    name: 'Razer Huntsman V3 Pro',
    description: 'The pro-grade analog optical gaming keyboard.',
    price: 249.99,
    category: 'keyboard',
    image: 'https://assets2.razerzone.com/images/pnx.assets/01f8c876a372b59ee3f5778ea3f61524/razer-huntsman-v3-pro-mini-hero-desktop-v2.webp',
    features: ['Analog Optical Switches', 'Rapid Trigger', 'Magnetic Wrist Rest'],
    specs: [
      { label: 'Layout', value: 'Full-Size' },
      { label: 'Switches', value: 'Razer Analog Optical' },
      { label: 'Polling', value: '8000Hz' }
    ],
    relatedIds: ['m3', 'c9'],
    inStock: true
  },
  {
    id: 'k5',
    name: 'Keychron Q1 Pro',
    description: 'A fully customizable wireless mechanical keyboard.',
    price: 199.99,
    category: 'keyboard',
    image: 'https://images.unsplash.com/photo-1618384881928-220556c636df?auto=format&fit=crop&q=80&w=800',
    features: ['CNC Aluminum Body', 'QMK/VIA Support', 'Gasket Mount'],
    specs: [
      { label: 'Layout', value: '75%' },
      { label: 'Connectivity', value: 'Bluetooth 5.1 / Wired' },
      { label: 'Switches', value: 'KSA PBT Keycaps' }
    ],
    relatedIds: ['m6', 'mon6'],
    inStock: true
  },
  {
    id: 'k6',
    name: 'ASUS ROG Azoth',
    description: 'A 75% wireless custom gaming keyboard with OLED display.',
    price: 249.99,
    category: 'keyboard',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800',
    features: ['OLED Display', 'Tri-mode Connection', 'Hot-swappable'],
    specs: [
      { label: 'Layout', value: '75%' },
      { label: 'Display', value: '2-inch OLED' },
      { label: 'Mount', value: 'Silicone Gasket' }
    ],
    relatedIds: ['m8', 'mon5'],
    inStock: true
  },
  {
    id: 'k7',
    name: 'Ducky One 3 TKL',
    description: 'QUACK Mechanics for the ultimate typing experience.',
    price: 119.99,
    category: 'keyboard',
    image: 'https://assets2.razerzone.com/images/pnx.assets/01f8c876a372b59ee3f5778ea3f61524/razer-huntsman-v3-pro-mini-hero-desktop-v2.webp',
    features: ['Hot-swappable', 'PBT Double-Shot', 'Dual-layer PCB'],
    specs: [
      { label: 'Layout', value: 'TKL' },
      { label: 'Switches', value: 'Cherry MX' },
      { label: 'Keycaps', value: 'PBT Double-Shot' }
    ],
    relatedIds: ['m4', 'c3'],
    inStock: true
  },
  {
    id: 'k8',
    name: 'Corsair K100 RGB',
    description: 'The pinnacle of Corsair keyboards with AXON technology.',
    price: 249.99,
    category: 'keyboard',
    image: 'https://c1.neweggimages.com/productimage/nb640/23-816-164-10.jpg',
    features: ['AXON Hyper-Processing', 'OPX Optical Switches', 'iCUE Control Dial'],
    specs: [
      { label: 'Layout', value: 'Full-Size' },
      { label: 'Polling', value: '4000Hz' },
      { label: 'Switches', value: 'Corsair OPX Optical' }
    ],
    relatedIds: ['m9', 'c7'],
    inStock: true
  },
  {
    id: 'k9',
    name: 'NuPhy Air75 V2',
    description: 'The ultimate low-profile wireless mechanical keyboard.',
    price: 119.99,
    category: 'keyboard',
    image: 'https://tomeversley.com/wp-content/uploads/2024/03/nuphy-air75-v2-review-01-736x414.jpg',
    features: ['Low Profile', '1000Hz Polling', 'QMK/VIA Support'],
    specs: [
      { label: 'Layout', value: '75%' },
      { label: 'Thickness', value: '16mm' },
      { label: 'Switches', value: 'Gateron Low-Profile' }
    ],
    relatedIds: ['m5', 'mon8'],
    inStock: true
  },
  {
    id: 'k10',
    name: 'Glorious GMMK Pro',
    description: 'A premium gasket-mounted 75% mechanical keyboard.',
    price: 169.99,
    category: 'keyboard',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800',
    features: ['Gasket Mount', 'Rotary Encoder', 'Aluminum Case'],
    specs: [
      { label: 'Layout', value: '75%' },
      { label: 'Body', value: 'CNC Aluminum' },
      { label: 'Socket', value: '5-pin Hot-swap' }
    ],
    relatedIds: ['m1', 'c3'],
    inStock: true
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    productId: 'm1',
    userName: 'Ghost_Operator',
    rating: 5,
    comment: 'The Viper Pro V3 is insane. The weight distribution is perfect for flick shots.',
    date: '2024-03-15'
  },
  {
    id: 'r2',
    productId: 'mon1',
    userName: 'Neon_Knight',
    rating: 5,
    comment: 'The 240Hz OLED panel is a game changer. Colors are deep and response is instant.',
    date: '2024-03-10'
  },
  {
    id: 'r3',
    productId: 'g1',
    userName: 'Tech_Enthusiast',
    rating: 5,
    comment: 'The 4090 is a beast. 4K gaming at max settings is finally a reality.',
    date: '2024-03-12'
  }
];
