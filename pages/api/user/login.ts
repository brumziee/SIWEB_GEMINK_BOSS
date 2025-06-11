// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { email, password } = req.body;

//   // Validasi input
//   if (!email || !password) {
//     return res.status(400).json({ message: 'Email dan password wajib diisi' });
//   }

//   // Cek user di database (misal pakai Prisma)
//   // const user = await prisma.user.findUnique({ where: { email } });
//   const user = { email: 'admin@gemink.com', password: 'gemink123' }; // dummy

//   if (!user || user.password !== password) {
//     return res.status(401).json({ message: 'Email atau password salah' });
//   }

//   // Simulasi session / token (biasanya pakai JWT atau cookie)
//   return res.status(200).json({ message: 'Login berhasil', user });
// }
