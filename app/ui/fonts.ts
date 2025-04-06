  import { Inter, Lusitana, Stalinist_One, Rubik_Lines } from "next/font/google";

  export const inter = Inter({ subsets: ["latin"] });

  export const lusitana = Lusitana({
    subsets: ["latin"],
    weight: ["400", "700"], // Menggunakan array untuk konsistensi
  });

  export const stalinistOne = Stalinist_One({
    subsets: ["latin"],
    weight: ["400"], // Konsisten dengan array meskipun satu nilai
  });
  
  export const rubikLines = Rubik_Lines({
    subsets: ["latin"],
    weight: ["400"], // Konsisten dengan array meskipun satu nilai
  });
