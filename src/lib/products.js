import HPi5 from "../assets/products/hpi5.1.jpg";
import delli5 from "../assets/products/delli5.1.webp";
import delli7 from "../assets/products/delli7.webp";
import lenovoi5 from "../assets/products/lenovoi5.jpg";
import lenovoi7 from "../assets/products/lenovoi7.webp";
import macm2 from "../assets/products/macm2.webp";
import DELLi512th from "../assets/desktop/DELLi512th.webp";
import DELLi712th from "../assets/desktop/DELLi712th.jpg";
import HPi513th from "../assets/desktop/HPi513th.webp";
import HPi713th from "../assets/desktop/HPi713th.jpg";
import LENOVOi712th from "../assets/desktop/LENOVOi712th.jpg";
import imac25m4 from "../assets/macbook/imac25m4.jpg";
import mac13m4 from "../assets/macbook/mac13m4.jpg";
import macm216 from "../assets/macbook/macm216.webp";
import macm316 from "../assets/macbook/macm316.jpg";
import macm416 from "../assets/macbook/macm416.jpg";
import macm513 from "../assets/macbook/macm513.avif";

// export type ProductCategory =
//   | "Laptops"
//   | "Desktops"
//   | "Servers"
//   | "Workstations"
//   | "Apple"
//   | "Power"

// export type Product = {
//   name: string
//   category: ProductCategory
//   image: string
//   specs: string[]
// }

export const categories = [
  "Laptops",
  "Desktops",
  "Servers",
  "Workstations",
  "Apple",
  "Power",
]

export const products = [
  // Laptops
  {
    name: "Branded Laptop –  HP i5 13th Generation",
    category: "Laptops",
    image: HPi5,
    specs: ["Processor – i5, 13th Generation", "RAM – 8 GB", "HDD – 250 GB SSD", 'Display – 14" Wide'],
  },
  {
    name: "Branded Laptop –  Dell i5 11th Generation",
    category: "Laptops",
    image: delli5,
    specs: ["Processor – i5 11th Generation", "RAM – 8 GB", "HDD – 250 GB SSD", 'Display – 14" Wide'],
  },
  {
    name: "Branded Laptop –  Dell i7 11th Generation",
    category: "Laptops",
    image: delli7,
    specs: ["Processor – i7 11th Generation", "RAM – 16 GB", "HDD – 512 GB SSD", 'Display – 14" Wide'],
  },
  {
    name: "Branded Laptop – Lenovo i5 13th Generation",
    category: "Laptops",
    image: lenovoi5,
    specs: ["Processor – i5 13th Generation", "RAM – 16 GB", "HDD – 512 GB SSD", 'Display – 14" Wide'],
  },
  {
    name: "Branded Laptop – Lenovo i7 6th Generation",
    category: "Laptops",
    image: lenovoi7,
    specs: ["Processor – i7 13th Generation", "RAM – 8 GB", "HDD – 512 GB SSD", 'Display – 14" Wide'],
  },
  {
    name: "Branded Laptop – MacBook Pro M2 2022",
    category: "Laptops",
    image: macm2,
    specs: ["Processor – M2", "RAM – 8 GB", "HDD – 512 GB SSD", 'Display – 14" Wide'],
  },
  // {
  //   name: "Branded Laptop – Lenovo / HP / Dell i7 10th Generation",
  //   category: "Laptops",
  //   image: "/images/product-laptop.png",
  //   specs: ["Processor – i7 10th Generation", "RAM – 16 GB", "HDD – 512 GB SSD", 'Display – 14" Wide'],
  // },
  // {
  //   name: "Branded Laptop – Acer Travelmate i7 13th Generation",
  //   category: "Laptops",
  //   image: "/images/product-laptop.png",
  //   specs: ["Processor – i7 13th Generation", "RAM – 16 GB", "HDD – 512 GB SSD", 'Display – 14" Wide'],
  // },

  // Desktops
  {
    name: "Branded Desktop –  Dell i5 12th Generation",
    category: "Desktops",
    image: DELLi512th,
    specs: ["Processor – i5, 12th Generation", "RAM – 8 GB", "HDD – 240 GB SSD", 'TFT – 19" TFT'],
  },
  {
    name: "Branded Desktop –  HP i5 13th Generation",
    category: "Desktops",
    image: HPi513th,
    specs: ["Processor – i5 13th Generation", "RAM – 8 GB", "HDD – 240 GB SSD", 'TFT – 19" TFT'],
  },
  {
    name: "Branded Desktop –  Dell i7 12th Generation",
    category: "Desktops",
    image: DELLi712th,
    specs: ["Processor – i7, 12th Generation", "RAM – 16 GB", "HDD – 512 GB SSD", 'TFT – 19" TFT'],
  },
  {
    name: "Branded Desktop –  HP i7 13th Generation",
    category: "Desktops",
    image: HPi713th,
    specs: ["Processor – i7 13th Generation", "RAM – 16 GB", "HDD – 512 GB SSD", 'TFT – 19" TFT'],
  },
  // {
  //   name: "Unbranded Desktop – Lenovo i7 12th Generation",
  //   category: "Desktops",
  //   image: LENOVOi712th,
  //   specs: [
  //     "Processor – AMD Ryzen 9 7950X",
  //     "RAM – 128 GB DDR5 5200MHz",
  //     "Graphics – RTX 4080 16GB Super Edition",
  //     "HDD – 1 TB NVME WD Blue",
  //     "Display – 21 Inch",
  //   ],
  // },
  {
    name: "Branded Desktop – Lenovo i7 12th Generation",
    category: "Desktops",
    image: LENOVOi712th,
    specs: [
      "Processor – i7 12th Gen.",
      "RAM – 64 GB DDR4",
      "Graphics – RTX 4070 12 GB",
      "HDD – 1 TB SSD",
      "Display – 21 Inch",
    ],
  },
  // {
  //   name: "Unbranded Desktop – i9 14th Generation",
  //   category: "Desktops",
  //   image: "/images/product-desktop.png",
  //   specs: [
  //     "Processor – i9 14th Gen.",
  //     "RAM – 32 GB DDR5",
  //     "HDD – 500 GB NVME + 1TB SSD",
  //     "Graphics – Gaming OC 3060 RTX 12 GB",
  //     "Display – 21 Inch",
  //   ],
  // },
  // {
  //   name: "Unbranded Desktop – AMD Ryzen 7 7700X",
  //   category: "Desktops",
  //   image: "/images/product-desktop.png",
  //   specs: [
  //     "Processor – AMD Ryzen 7 7700X",
  //     "RAM – 32 GB",
  //     "HDD – 1 TB NVME",
  //     "Graphics – GeForce RTX 3080 Galax",
  //     "Display – 21 Inch",
  //   ],
  // },

  // // Servers
  // {
  //   name: "Branded Server – Lenovo / HP / Dell",
  //   category: "Servers",
  //   image: "/images/product-server.png",
  //   specs: [
  //     "Processor – Quad Core x 2 No.",
  //     "RAM – 32 GB ECC",
  //     "HDD – 300 GB x 4 No. SAS HDD",
  //     "LAN – 2 x Gigabit Ethernet Port",
  //     "Power – Double Power Supply RPS",
  //   ],
  // },
  // {
  //   name: "Branded Server – Lenovo / HP / Dell (16-Core)",
  //   category: "Servers",
  //   image: "/images/product-server.png",
  //   specs: [
  //     "Processor – 16-Core x 4 No.",
  //     "RAM – 256 GB ECC",
  //     "HDD – 1.6 TB x 5 No. SSD HDD",
  //     "LAN – 2 x Gigabit Ethernet Port",
  //     "Power – Double Power Supply RPS",
  //   ],
  // },
  // {
  //   name: "Branded Server – Lenovo / HP / Dell (AMD 64-Core)",
  //   category: "Servers",
  //   image: "/images/product-server.png",
  //   specs: [
  //     "Processor – AMD 64-Core x 2 No.",
  //     "RAM – 256 GB ECC",
  //     "HDD – 900 GB SAS x 2 No.",
  //     "LAN – 2 x Gigabit Ethernet Port",
  //     "Power – Double Power Supply RPS",
  //   ],
  // },

  // // Workstations
  // {
  //   name: "Branded Workstation Laptop – Dell 5540",
  //   category: "Workstations",
  //   image: "/images/product-workstation.png",
  //   specs: [
  //     "Processor – i9 9th Gen.",
  //     "RAM – 32 GB",
  //     "Graphics – NVIDIA Quadro P2000 4GB",
  //     "HDD – 512 GB SSD",
  //     'Display – 16" FHD',
  //   ],
  // },
  // {
  //   name: "Branded Workstation Laptop – HP Omen",
  //   category: "Workstations",
  //   image: "/images/product-workstation.png",
  //   specs: [
  //     "Processor – i7 12th Gen.",
  //     "RAM – 32 GB",
  //     "Graphics – NVIDIA RTX 3070 8GB",
  //     "HDD – 1 TB SSD",
  //     'Display – 16" FHD',
  //   ],
  // },
  // {
  //   name: "Branded Workstation Laptop – Acer",
  //   category: "Workstations",
  //   image: "/images/product-workstation.png",
  //   specs: [
  //     "Processor – i9 13th Gen.",
  //     "RAM – 32 GB",
  //     "Graphics – 8GB NVIDIA RTX 4000",
  //     "HDD – 1 TB SSD NVME",
  //     'Display – 16" FHD',
  //   ],
  // },
  // {
  //   name: "Branded Workstation – Dell T3600",
  //   category: "Workstations",
  //   image: "/images/product-workstation.png",
  //   specs: [
  //     "Processor – Xeon Hexa Core x 2 No.",
  //     "RAM – 32 GB ECC",
  //     "HDD – 480 GB SSD HDD",
  //     "Graphics – NVIDIA GTX 1660 Super 6 GB",
  //     "Display – 21 Inch",
  //   ],
  // },

  // Apple
  {
    name: "MacBook Air 13 Inch [2021 & above]",
    category: "Apple",
    image: mac13m4,
    specs: ["Processor – M4", "RAM – 8 GB", "HDD – 256 GB SSD", 'Display – 13" Wide Screen'],
  },
  {
    name: "MacBook Pro 13 Inch",
    category: "Apple",
    image: macm513,
    specs: ["Processor – M5", "RAM – 18 GB", "HDD – 512 GB SSD", 'Display – 16" Wide'],
  },
  {
    name: "MacBook Pro 16 Inch – M2",
    category: "Apple",
    image: macm216,
    specs: ["Processor – M2", "RAM – 16 GB", "HDD – 512 GB SSD", 'Display – 15" Wide Screen'],
  },
  {
    name: "MacBook Pro 16 Inch – M3",
    category: "Apple",
    image: macm316,
    specs: ["Processor – M3", "RAM – 18 GB", "HDD – 512 GB SSD", 'Display – 16" Wide'],
  },
  {
    name: "MacBook Pro 16 Inch – M4",
    category: "Apple",
    image: macm416,
    specs: ["Processor – M4", "RAM – 18 GB", "HDD – 512 GB SSD", 'Display – 16" Wide'],
  },
  {
    name: "iMac 25 Inch",
    category: "Apple",
    image: imac25m4,
    specs: ["Processor – M4", "RAM – 8 GB", "HDD – 256 GB SSD", "Display – 25 Inch"],
  },

  // Power
  // {
  //   name: "600 VA UPS",
  //   category: "Power",
  //   image: "/images/product-ups.png",
  //   specs: ["600 VA UPS", "Reliable battery backup", "Surge protection"],
  // },
  // {
  //   name: "Online UPS",
  //   category: "Power",
  //   image: "/images/product-ups.png",
  //   specs: ["Starting from 10 KVA to 200 KVA available", "Zero transfer time", "For critical infrastructure"],
  // },
]
