#!/usr/bin/env ts-node-esm
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var pelanggan1, pelanggan2, pelanggan3, pelanggan4, pelanggan5, produk1, produk2, produk3, produk4, produk5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // Hapus data lama dulu agar seed bisa diulang tanpa error
                return [4 /*yield*/, prisma.transaksi.deleteMany()];
                case 1:
                    // Hapus data lama dulu agar seed bisa diulang tanpa error
                    _a.sent();
                    return [4 /*yield*/, prisma.produk.deleteMany()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, prisma.pelanggan.deleteMany()
                        // Buat data pelanggan
                    ];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, prisma.pelanggan.create({
                            data: {
                                nama_pelanggan: 'Andi',
                                umur_pelanggan: 25,
                                alamat_pelanggan: 'Jl. Merdeka No.10',
                                email_pelanggan: 'andi@gmail.com',
                            },
                        })];
                case 4:
                    pelanggan1 = _a.sent();
                    return [4 /*yield*/, prisma.pelanggan.create({
                            data: {
                                nama_pelanggan: 'Budi',
                                umur_pelanggan: 30,
                                alamat_pelanggan: 'Jl. Sudirman No.5',
                                email_pelanggan: 'budi@gmail.com',
                            },
                        })];
                case 5:
                    pelanggan2 = _a.sent();
                    return [4 /*yield*/, prisma.pelanggan.create({
                            data: {
                                nama_pelanggan: 'Citra',
                                umur_pelanggan: 22,
                                alamat_pelanggan: 'Jl. Gatot Subroto No.3',
                                email_pelanggan: 'citra@yahoo.com',
                            },
                        })];
                case 6:
                    pelanggan3 = _a.sent();
                    return [4 /*yield*/, prisma.pelanggan.create({
                            data: {
                                nama_pelanggan: 'Dina',
                                umur_pelanggan: 28,
                                alamat_pelanggan: 'Jl. Thamrin No.8',
                                email_pelanggan: 'dina@mail.com',
                            },
                        })];
                case 7:
                    pelanggan4 = _a.sent();
                    return [4 /*yield*/, prisma.pelanggan.create({
                            data: {
                                nama_pelanggan: 'Eko',
                                umur_pelanggan: 35,
                                alamat_pelanggan: 'Jl. Diponegoro No.15',
                                email_pelanggan: 'eko@gmail.com',
                            },
                        })
                        // Buat data produk
                    ];
                case 8:
                    pelanggan5 = _a.sent();
                    return [4 /*yield*/, prisma.produk.create({
                            data: {
                                nama_produk: 'Laptop Lenovo IdeaPad',
                                harga: 9000000,
                                stok: 7,
                                foto: '/images/lenovo.jpg',
                                deskripsi: 'Laptop ringan dan cepat untuk pekerjaan kantor',
                                kategori: 'laptop',
                            },
                        })];
                case 9:
                    produk1 = _a.sent();
                    return [4 /*yield*/, prisma.produk.create({
                            data: {
                                nama_produk: 'Keyboard Logitech K380',
                                harga: 450000,
                                stok: 10,
                                foto: '/images/logitech.jpg',
                                deskripsi: 'Keyboard Bluetooth portable dan stylish',
                                kategori: 'keyboard',
                            },
                        })];
                case 10:
                    produk2 = _a.sent();
                    return [4 /*yield*/, prisma.produk.create({
                            data: {
                                nama_produk: 'Mouse Razer Viper Mini',
                                harga: 500000,
                                stok: 12,
                                foto: '/images/razer.jpg',
                                deskripsi: 'Mouse gaming dengan sensor presisi tinggi',
                                kategori: 'mouse',
                            },
                        })];
                case 11:
                    produk3 = _a.sent();
                    return [4 /*yield*/, prisma.produk.create({
                            data: {
                                nama_produk: 'Laptop ASUS Vivobook',
                                harga: 11000000,
                                stok: 5,
                                foto: '/images/asus.jpg',
                                deskripsi: 'Laptop dengan layar OLED dan performa tinggi',
                                kategori: 'laptop',
                            },
                        })];
                case 12:
                    produk4 = _a.sent();
                    return [4 /*yield*/, prisma.produk.create({
                            data: {
                                nama_produk: 'Keyboard Mechanical ROG',
                                harga: 320000,
                                stok: 20,
                                foto: '/images/rog.jpg',
                                deskripsi: 'Keyboard mechanical murah berkualitas',
                                kategori: 'keyboard',
                            },
                        })
                        // Buat data transaksi dengan relasi ke produk dan pelanggan
                    ];
                case 13:
                    produk5 = _a.sent();
                    // Buat data transaksi dengan relasi ke produk dan pelanggan
                    return [4 /*yield*/, prisma.transaksi.create({
                            data: {
                                id_produk: produk1.id_produk,
                                id_pelanggan: pelanggan1.id_pelanggan,
                                tanggal_transaksi: new Date('2025-05-01'),
                                total_harga: 9000000,
                            },
                        })];
                case 14:
                    // Buat data transaksi dengan relasi ke produk dan pelanggan
                    _a.sent();
                    return [4 /*yield*/, prisma.transaksi.create({
                            data: {
                                id_produk: produk2.id_produk,
                                id_pelanggan: pelanggan2.id_pelanggan,
                                tanggal_transaksi: new Date('2025-05-02'),
                                total_harga: 450000,
                            },
                        })];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, prisma.transaksi.create({
                            data: {
                                id_produk: produk3.id_produk,
                                id_pelanggan: pelanggan3.id_pelanggan,
                                tanggal_transaksi: new Date('2025-05-03'),
                                total_harga: 500000,
                            },
                        })];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, prisma.transaksi.create({
                            data: {
                                id_produk: produk4.id_produk,
                                id_pelanggan: pelanggan4.id_pelanggan,
                                tanggal_transaksi: new Date('2025-05-04'),
                                total_harga: 11000000,
                            },
                        })];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, prisma.transaksi.create({
                            data: {
                                id_produk: produk5.id_produk,
                                id_pelanggan: pelanggan5.id_pelanggan,
                                tanggal_transaksi: new Date('2025-05-05'),
                                total_harga: 320000,
                            },
                        })];
                case 18:
                    _a.sent();
                    console.log('✅ Data berhasil di-seed!');
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
