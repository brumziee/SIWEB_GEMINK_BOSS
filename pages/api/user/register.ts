// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({ message: 'Email dan password wajib diisi' });
//   }

//   // Simulasi simpan user ke DB
//   // const user = await prisma.user.create({ data: { email, password } });

//   return res.status(201).json({ message: 'Registrasi berhasil' });
// }
