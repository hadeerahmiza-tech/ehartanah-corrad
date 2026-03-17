/* ============================================================
   e-Hartanah Portal – Mock Data (loaded as global variables)
   All pages include this script to access data without a server.
   ============================================================ */

// ── ASSETS ──────────────────────────────────────────────────
window.mockAssets = [
  { id:"AST-001", name:"Wisma Tanah Negara",             type:"Bangunan Kerajaan",   ownershipType:"Persekutuan",    location:"Kuala Lumpur",   state:"WP Kuala Lumpur", address:"Jalan Raja Laut, 50604 KL",             fundSource:"Bajet Persekutuan",  status:"Aktif",            landArea:4200,  buildingArea:18500, yearAcquired:1985, floors:12, lastValuation:"2023-06-15", marketValue:62000000 },
  { id:"AST-002", name:"Bangunan JKPTG Putrajaya",       type:"Bangunan Kerajaan",   ownershipType:"Persekutuan",    location:"Putrajaya",      state:"WP Putrajaya",    address:"Presint 4, 62100 Putrajaya",            fundSource:"Bajet Persekutuan",  status:"Aktif",            landArea:8500,  buildingArea:32000, yearAcquired:2003, floors:20, lastValuation:"2023-09-20", marketValue:145000000 },
  { id:"AST-003", name:"Kompleks Sukan Tun Razak",       type:"Kemudahan Awam",      ownershipType:"Persekutuan",    location:"Kuala Lumpur",   state:"WP Kuala Lumpur", address:"Jalan Cheras, 56000 KL",                fundSource:"Bajet Persekutuan",  status:"Aktif",            landArea:25000, buildingArea:9500,  yearAcquired:1990, floors:3,  lastValuation:"2022-11-10", marketValue:38000000 },
  { id:"AST-004", name:"Lot 1234 Mukim Setapak",         type:"Tanah Simpan",        ownershipType:"Persekutuan",    location:"Setapak, KL",    state:"WP Kuala Lumpur", address:"Mukim Setapak, 53300 KL",               fundSource:"Amanah Tanah",       status:"Aktif",            landArea:15000, buildingArea:0,     yearAcquired:1967, floors:0,  lastValuation:"2023-01-05", marketValue:95000000 },
  { id:"AST-005", name:"Rumah Banglo Jabatan Petaling",  type:"Kuarters Kerajaan",   ownershipType:"Persekutuan",    location:"Petaling Jaya",  state:"Selangor",        address:"Jalan 21/11A, 46300 PJ",               fundSource:"Bajet Persekutuan",  status:"Aktif",            landArea:1200,  buildingArea:750,   yearAcquired:1978, floors:2,  lastValuation:"2022-08-22", marketValue:2800000 },
  { id:"AST-006", name:"Gudang Stor Persekutuan Shah Alam",type:"Gudang",             ownershipType:"Persekutuan",    location:"Shah Alam",      state:"Selangor",        address:"Seksyen 16, 40200 Shah Alam",           fundSource:"Bajet Persekutuan",  status:"Penyelenggaraan",  landArea:6000,  buildingArea:4200,  yearAcquired:1995, floors:1,  lastValuation:"2021-12-01", marketValue:12000000 },
  { id:"AST-007", name:"Bangunan JKPTG Sabah",           type:"Bangunan Kerajaan",   ownershipType:"Persekutuan",    location:"Kota Kinabalu",  state:"Sabah",           address:"Jalan Dewan, 88000 Kota Kinabalu",      fundSource:"Bajet Persekutuan",  status:"Aktif",            landArea:3800,  buildingArea:7200,  yearAcquired:1997, floors:5,  lastValuation:"2023-03-15", marketValue:28000000 },
  { id:"AST-008", name:"Lot 5678 Mukim Padawan",         type:"Tanah Simpan",        ownershipType:"Persekutuan",    location:"Kuching",        state:"Sarawak",         address:"Mukim Padawan, 93250 Kuching",          fundSource:"Amanah Tanah",       status:"Aktif",            landArea:42000, buildingArea:0,     yearAcquired:1972, floors:0,  lastValuation:"2022-06-30", marketValue:48000000 },
  { id:"AST-009", name:"Dewan Orang Ramai Batu Gajah",   type:"Kemudahan Awam",      ownershipType:"Persekutuan",    location:"Batu Gajah",     state:"Perak",           address:"Jalan Pasir Putih, 31400 Batu Gajah",  fundSource:"Bajet Persekutuan",  status:"Aktif",            landArea:3500,  buildingArea:1800,  yearAcquired:1988, floors:1,  lastValuation:"2022-04-18", marketValue:3500000 },
  { id:"AST-010", name:"Kompleks Perumahan Persekutuan Kuantan", type:"Kuarters Kerajaan", ownershipType:"Persekutuan", location:"Kuantan",      state:"Pahang",          address:"Jalan Gambut, 25000 Kuantan",           fundSource:"Bajet Persekutuan",  status:"Aktif",            landArea:9000,  buildingArea:6500,  yearAcquired:1992, floors:4,  lastValuation:"2023-07-10", marketValue:18500000 },
  { id:"AST-011", name:"Pusat Latihan Hartanah Ipoh",    type:"Bangunan Kerajaan",   ownershipType:"Persekutuan",    location:"Ipoh",           state:"Perak",           address:"Jalan Sultan Idris Shah, 30000 Ipoh",   fundSource:"Dana Latihan",       status:"Aktif",            landArea:5500,  buildingArea:4800,  yearAcquired:2008, floors:4,  lastValuation:"2023-05-22", marketValue:22000000 },
  { id:"AST-012", name:"Bangunan JKPTG Pulau Pinang",    type:"Bangunan Kerajaan",   ownershipType:"Persekutuan",    location:"George Town",    state:"Pulau Pinang",    address:"Jalan Penang, 10000 George Town",       fundSource:"Bajet Persekutuan",  status:"Aktif",            landArea:2800,  buildingArea:5100,  yearAcquired:2000, floors:6,  lastValuation:"2022-10-05", marketValue:32000000 },
  { id:"AST-013", name:"Lot 9012 Mukim Hulu Langat",     type:"Tanah Simpan",        ownershipType:"Persekutuan",    location:"Hulu Langat",    state:"Selangor",        address:"Mukim Hulu Langat, 43100 Selangor",     fundSource:"Amanah Tanah",       status:"Aktif",            landArea:78000, buildingArea:0,     yearAcquired:1963, floors:0,  lastValuation:"2021-08-14", marketValue:195000000 },
  { id:"AST-014", name:"Flat Pegawai Kerajaan Larkin",   type:"Kuarters Kerajaan",   ownershipType:"Persekutuan",    location:"Johor Bahru",    state:"Johor",           address:"Larkin, 80200 Johor Bahru",             fundSource:"Bajet Persekutuan",  status:"Penyelenggaraan",  landArea:4200,  buildingArea:8800,  yearAcquired:1999, floors:10, lastValuation:"2022-12-01", marketValue:15000000 },
  { id:"AST-015", name:"Kompleks Pejabat Wilayah Kota Bharu", type:"Bangunan Kerajaan", ownershipType:"Persekutuan", location:"Kota Bharu",     state:"Kelantan",        address:"Jalan Hamzah, 15000 Kota Bharu",        fundSource:"Bajet Persekutuan",  status:"Aktif",            landArea:4600,  buildingArea:6200,  yearAcquired:2005, floors:5,  lastValuation:"2023-02-28", marketValue:19000000 },
];

// ── TENANCY ──────────────────────────────────────────────────
window.mockTenancy = [
  { id:"TEN-001", assetId:"AST-001", assetName:"Wisma Tanah Negara",             tenantName:"Kementerian Kewangan",           tenantType:"Agensi Kerajaan",   unit:"Aras 10–15",       rentalRate:45000,  depositPaid:135000, leaseStart:"2021-01-01", leaseExpiry:"2025-12-31", status:"Aktif" },
  { id:"TEN-002", assetId:"AST-001", assetName:"Wisma Tanah Negara",             tenantName:"Jabatan Audit Negara",           tenantType:"Agensi Kerajaan",   unit:"Aras 7–9",         rentalRate:28000,  depositPaid:84000,  leaseStart:"2020-06-01", leaseExpiry:"2024-05-31", status:"Tamat Tempoh" },
  { id:"TEN-003", assetId:"AST-002", assetName:"Bangunan JKPTG Putrajaya",       tenantName:"JKPTG HQ",                       tenantType:"Agensi Kerajaan",   unit:"Keseluruhan",      rentalRate:0,      depositPaid:0,      leaseStart:"2003-01-01", leaseExpiry:"2033-12-31", status:"Aktif" },
  { id:"TEN-004", assetId:"AST-003", assetName:"Kompleks Sukan Tun Razak",       tenantName:"Syarikat Sukan Jaya Sdn Bhd",    tenantType:"Syarikat Swasta",   unit:"Padang & Dewan",   rentalRate:12000,  depositPaid:36000,  leaseStart:"2022-03-01", leaseExpiry:"2025-02-28", status:"Aktif" },
  { id:"TEN-005", assetId:"AST-007", assetName:"Bangunan JKPTG Sabah",           tenantName:"Jabatan Ukur & Pemetaan Sabah",  tenantType:"Agensi Kerajaan",   unit:"Aras 1–3",         rentalRate:8500,   depositPaid:25500,  leaseStart:"2019-07-01", leaseExpiry:"2024-06-30", status:"Hampir Tamat" },
  { id:"TEN-006", assetId:"AST-009", assetName:"Dewan Orang Ramai Batu Gajah",   tenantName:"Majlis Daerah Batu Gajah",       tenantType:"Badan Berkanun",    unit:"Keseluruhan",      rentalRate:3500,   depositPaid:10500,  leaseStart:"2020-01-01", leaseExpiry:"2025-12-31", status:"Aktif" },
  { id:"TEN-007", assetId:"AST-010", assetName:"Kompleks Perumahan Kuantan",     tenantName:"Pelbagai Pegawai Kerajaan",       tenantType:"Individu",         unit:"48 Unit Flat",     rentalRate:28800,  depositPaid:86400,  leaseStart:"2018-01-01", leaseExpiry:"2026-12-31", status:"Aktif" },
  { id:"TEN-008", assetId:"AST-011", assetName:"Pusat Latihan Hartanah Ipoh",    tenantName:"Institut Latihan Awam (INTAN)",  tenantType:"Badan Berkanun",    unit:"Blok A & B",       rentalRate:7500,   depositPaid:22500,  leaseStart:"2021-09-01", leaseExpiry:"2024-08-31", status:"Hampir Tamat" },
  { id:"TEN-009", assetId:"AST-012", assetName:"Bangunan JKPTG Pulau Pinang",    tenantName:"Pejabat Tanah & Galian Penang",  tenantType:"Agensi Kerajaan",   unit:"Aras 2–5",         rentalRate:15000,  depositPaid:45000,  leaseStart:"2022-01-01", leaseExpiry:"2026-12-31", status:"Aktif" },
  { id:"TEN-010", assetId:"AST-014", assetName:"Flat Pegawai Kerajaan Larkin",   tenantName:"Pelbagai Pegawai Kerajaan",       tenantType:"Individu",         unit:"80 Unit Flat",     rentalRate:40000,  depositPaid:120000, leaseStart:"2020-03-01", leaseExpiry:"2025-02-28", status:"Aktif" },
  { id:"TEN-011", assetId:"AST-015", assetName:"Kompleks Pejabat Wilayah KB",    tenantName:"Jabatan Hasil Dalam Negeri",     tenantType:"Agensi Kerajaan",   unit:"Aras 1–2",         rentalRate:9200,   depositPaid:27600,  leaseStart:"2023-01-01", leaseExpiry:"2027-12-31", status:"Aktif" },
  { id:"TEN-012", assetId:"AST-006", assetName:"Gudang Stor Persekutuan SA",     tenantName:"Perbadanan Logistik Malaysia",   tenantType:"GLC",               unit:"Bahagian Stor A",  rentalRate:6800,   depositPaid:20400,  leaseStart:"2021-06-01", leaseExpiry:"2024-05-31", status:"Hampir Tamat" },
];

// ── MAINTENANCE ──────────────────────────────────────────────
window.mockMaintenance = [
  { id:"MNT-001", assetId:"AST-001", assetName:"Wisma Tanah Negara",           type:"Berjadual",  category:"Elektrikal",   description:"Pemeriksaan & penggantian panel elektrik utama",     priority:"Tinggi",  status:"Dalam Proses",  scheduledDate:"2024-02-10", completedDate:null,         estimatedCost:18500, actualCost:null,  contractor:"Arif Elektrikal Sdn Bhd" },
  { id:"MNT-002", assetId:"AST-001", assetName:"Wisma Tanah Negara",           type:"Ad-hoc",     category:"Paip",         description:"Kebocoran paip di lantai B2 – perlu baiki segera",     priority:"Kritikal",status:"Selesai",       scheduledDate:"2024-01-22", completedDate:"2024-01-23", estimatedCost:3200,  actualCost:2900,  contractor:"Syarikat Paip Jaya" },
  { id:"MNT-003", assetId:"AST-002", assetName:"Bangunan JKPTG Putrajaya",    type:"Berjadual",  category:"HVAC",         description:"Servis penghawa dingin tahunan – semua unit",          priority:"Sederhana",status:"Belum Mula",    scheduledDate:"2024-03-01", completedDate:null,         estimatedCost:42000, actualCost:null,  contractor:"CoolAir Services Sdn Bhd" },
  { id:"MNT-004", assetId:"AST-003", assetName:"Kompleks Sukan Tun Razak",    type:"Berjadual",  category:"Sivil",        description:"Pengecatan semula bangunan & pembaikan fasad",         priority:"Rendah",  status:"Belum Mula",    scheduledDate:"2024-04-15", completedDate:null,         estimatedCost:28000, actualCost:null,  contractor:"Fajar Construction" },
  { id:"MNT-005", assetId:"AST-006", assetName:"Gudang Stor Shah Alam",       type:"Ad-hoc",     category:"Bumbung",      description:"Bumbung bocor – perlu tampalan kecemasan",            priority:"Kritikal",status:"Dalam Proses",  scheduledDate:"2024-01-28", completedDate:null,         estimatedCost:8500,  actualCost:null,  contractor:"Rooftech Malaysia" },
  { id:"MNT-006", assetId:"AST-007", assetName:"Bangunan JKPTG Sabah",        type:"Berjadual",  category:"Elektrikal",   description:"Pemeriksaan sistem penggera kebakaran tahunan",        priority:"Tinggi",  status:"Selesai",       scheduledDate:"2024-01-15", completedDate:"2024-01-16", estimatedCost:5500,  actualCost:5200,  contractor:"Sabah Fire Systems" },
  { id:"MNT-007", assetId:"AST-009", assetName:"Dewan Orang Ramai BG",        type:"Berjadual",  category:"Sivil",        description:"Pengecatan & pembersihan umum tahunan",               priority:"Rendah",  status:"Selesai",       scheduledDate:"2023-12-01", completedDate:"2023-12-05", estimatedCost:6000,  actualCost:5800,  contractor:"Local Contractors Batu Gajah" },
  { id:"MNT-008", assetId:"AST-010", assetName:"Kompleks Perumahan Kuantan",  type:"Ad-hoc",     category:"Lif",          description:"Lif Blok C rosak – perlu penggantian komponen",        priority:"Tinggi",  status:"Dalam Proses",  scheduledDate:"2024-01-30", completedDate:null,         estimatedCost:22000, actualCost:null,  contractor:"OTIS Malaysia" },
  { id:"MNT-009", assetId:"AST-011", assetName:"Pusat Latihan Ipoh",          type:"Berjadual",  category:"HVAC",         description:"Penggantian penapis HVAC & servis chiller",            priority:"Sederhana",status:"Belum Mula",    scheduledDate:"2024-03-15", completedDate:null,         estimatedCost:15500, actualCost:null,  contractor:"CoolAir Services Sdn Bhd" },
  { id:"MNT-010", assetId:"AST-012", assetName:"Bangunan JKPTG Penang",       type:"Ad-hoc",     category:"Paip",         description:"Penggantian sistem perpaipan usang di lantai 3",       priority:"Sederhana",status:"Belum Mula",    scheduledDate:"2024-02-20", completedDate:null,         estimatedCost:12000, actualCost:null,  contractor:"Penang Plumbing Works" },
  { id:"MNT-011", assetId:"AST-014", assetName:"Flat Pegawai Larkin",         type:"Berjadual",  category:"Sivil",        description:"Pemeriksaan dan pembaikan struktur bangunan",          priority:"Tinggi",  status:"Dalam Proses",  scheduledDate:"2024-02-05", completedDate:null,         estimatedCost:35000, actualCost:null,  contractor:"Johor Civil Eng. Sdn Bhd" },
  { id:"MNT-012", assetId:"AST-015", assetName:"Kompleks Pejabat KB",         type:"Berjadual",  category:"Elektrikal",   description:"Naik taraf sistem pencahayaan ke LED",                 priority:"Rendah",  status:"Selesai",       scheduledDate:"2024-01-08", completedDate:"2024-01-12", estimatedCost:9800,  actualCost:9500,  contractor:"KB Electrical Works" },
];

// ── VALUATIONS ───────────────────────────────────────────────
window.mockValuations = [
  { id:"VAL-001", assetId:"AST-001", assetName:"Wisma Tanah Negara",           valuationDate:"2023-06-15", marketValue:62000000,  forcedSaleValue:52700000, type:"Pasaran Terbuka",  valuator:"Rahim & Rakan Penilai",         nextDue:"2026-06-15", remarks:"Nilai meningkat 12% dari penilaian sebelumnya" },
  { id:"VAL-002", assetId:"AST-002", assetName:"Bangunan JKPTG Putrajaya",    valuationDate:"2023-09-20", marketValue:145000000, forcedSaleValue:123250000,type:"Pasaran Terbuka",  valuator:"Azmi & Rakan-Rakan",            nextDue:"2026-09-20", remarks:"Nilai premium lokasi Putrajaya" },
  { id:"VAL-003", assetId:"AST-003", assetName:"Kompleks Sukan Tun Razak",    valuationDate:"2022-11-10", marketValue:38000000,  forcedSaleValue:32300000, type:"Kaedah Kos",       valuator:"SKB Valuation Sdn Bhd",         nextDue:"2025-11-10", remarks:"Perlu penilaian semula – hampir jangka masa" },
  { id:"VAL-004", assetId:"AST-004", assetName:"Lot 1234 Mukim Setapak",      valuationDate:"2023-01-05", marketValue:95000000,  forcedSaleValue:80750000, type:"Kaedah Perbandingan",valuator:"Tan & Associates Valuers",      nextDue:"2026-01-05", remarks:"Nilai tanah meningkat akibat pembangunan persekitaran" },
  { id:"VAL-005", assetId:"AST-005", assetName:"Rumah Banglo Jabatan PJ",     valuationDate:"2022-08-22", marketValue:2800000,   forcedSaleValue:2380000,  type:"Pasaran Terbuka",  valuator:"Rahim & Rakan Penilai",         nextDue:"2025-08-22", remarks:"Nilai stabil, lokasi premium PJ" },
  { id:"VAL-006", assetId:"AST-007", assetName:"Bangunan JKPTG Sabah",        valuationDate:"2023-03-15", marketValue:28000000,  forcedSaleValue:23800000, type:"Pasaran Terbuka",  valuator:"Sabah Valuers Sdn Bhd",         nextDue:"2026-03-15", remarks:"Potensi pembangunan semula tinggi" },
  { id:"VAL-007", assetId:"AST-008", assetName:"Lot 5678 Mukim Padawan",      valuationDate:"2022-06-30", marketValue:48000000,  forcedSaleValue:40800000, type:"Kaedah Perbandingan",valuator:"Sarawak Land Valuers",          nextDue:"2025-06-30", remarks:"Tanah pertanian – nilai berdasarkan potensi tukar status" },
  { id:"VAL-008", assetId:"AST-010", assetName:"Kompleks Perumahan Kuantan",  valuationDate:"2023-07-10", marketValue:18500000,  forcedSaleValue:15725000, type:"Kaedah Kos",       valuator:"Pahang Valuers & Partners",     nextDue:"2026-07-10", remarks:"Nilai kos pembinaan diambil kira" },
  { id:"VAL-009", assetId:"AST-011", assetName:"Pusat Latihan Hartanah Ipoh", valuationDate:"2023-05-22", marketValue:22000000,  forcedSaleValue:18700000, type:"Pasaran Terbuka",  valuator:"Perak Property Consultants",    nextDue:"2026-05-22", remarks:"Lokasi strategik berhampiran pusat bandar Ipoh" },
  { id:"VAL-010", assetId:"AST-013", assetName:"Lot 9012 Mukim Hulu Langat",  valuationDate:"2021-08-14", marketValue:195000000, forcedSaleValue:165750000,type:"Kaedah Perbandingan",valuator:"KL Metro Valuers Sdn Bhd",      nextDue:"2024-08-14", remarks:"JANGKA MASA TAMAT – Penilaian semula diperlukan segera" },
  { id:"VAL-011", assetId:"AST-014", assetName:"Flat Pegawai Larkin JB",      valuationDate:"2022-12-01", marketValue:15000000,  forcedSaleValue:12750000, type:"Kaedah Kos",       valuator:"Johor Valuers & Partners",      nextDue:"2025-12-01", remarks:"Dalam kerja-kerja penyelenggaraan utama" },
  { id:"VAL-012", assetId:"AST-015", assetName:"Kompleks Pejabat Kota Bharu", valuationDate:"2023-02-28", marketValue:19000000,  forcedSaleValue:16150000, type:"Pasaran Terbuka",  valuator:"Kelantan Property Consultants", nextDue:"2026-02-28", remarks:"Nilai stabil" },
];

// ── DISPOSALS ────────────────────────────────────────────────
window.mockDisposals = [
  { id:"DIS-001", assetId:"AST-006", assetName:"Gudang Stor Shah Alam",        disposalType:"Jualan Tender",       stage:"Kelulusan Jawatankuasa", submittedDate:"2023-11-01", estimatedValue:12000000, reason:"Aset tidak efisien; akan diganti fasiliti baru",         approvals:{ unitHartanah:true, penilaian:true, jawatankuasa:false, perbendaharaan:false } },
  { id:"DIS-002", assetId:"AST-005", assetName:"Rumah Banglo Jabatan PJ",      disposalType:"Pindah Milik Agensi", stage:"Perbendaharaan",         submittedDate:"2023-08-15", estimatedValue:2800000,  reason:"Jabatan berpindah ke bangunan baru; kuarters tidak perlu",approvals:{ unitHartanah:true, penilaian:true, jawatankuasa:true,  perbendaharaan:false } },
  { id:"DIS-003", assetId:"AST-009", assetName:"Dewan Orang Ramai Batu Gajah", disposalType:"Pajakan Jangka Panjang",stage:"Penilaian Aset",         submittedDate:"2024-01-10", estimatedValue:3500000,  reason:"Pengurusan lebih baik melalui pajakan jangka panjang",    approvals:{ unitHartanah:true, penilaian:false, jawatankuasa:false, perbendaharaan:false } },
  { id:"DIS-004", assetId:"AST-004", assetName:"Lot 1234 Mukim Setapak",       disposalType:"Pengambilan Balik",   stage:"Semakan Unit Hartanah",  submittedDate:"2024-01-25", estimatedValue:95000000, reason:"Pembangunan projek infrastruktur awam nasional",          approvals:{ unitHartanah:false, penilaian:false, jawatankuasa:false, perbendaharaan:false } },
  { id:"DIS-005", assetId:"AST-014", assetName:"Flat Pegawai Larkin",          disposalType:"Jualan Langsung",     stage:"Selesai",                submittedDate:"2022-06-01", estimatedValue:15000000, reason:"Usia bangunan melebihi 25 tahun; kos penyelenggaraan tinggi",approvals:{ unitHartanah:true, penilaian:true, jawatankuasa:true,  perbendaharaan:true } },
];

// ── NOTIFICATIONS ────────────────────────────────────────────
window.mockNotifications = [
  { id:1, type:"warning", message:"3 perjanjian pajakan hampir tamat (< 90 hari)",         link:"leasing.html",      time:"Hari ini" },
  { id:2, type:"danger",  message:"Penilaian Lot 9012 Hulu Langat sudah tamat tempoh",      link:"valuation.html",    time:"2 hari lalu" },
  { id:3, type:"info",    message:"Permohonan pelupusan baru: Dewan OR Batu Gajah",         link:"disposal.html",     time:"3 hari lalu" },
  { id:4, type:"success", message:"Penyelenggaraan MNT-006 (JKPTG Sabah) telah selesai",   link:"maintenance.html",  time:"5 hari lalu" },
  { id:5, type:"warning", message:"Kos penyelenggaraan melebihi bajet suku tahunan 12%",    link:"reports.html",      time:"1 minggu lalu" },
];

// ── RENTAL INCOME TREND (monthly, 12 months) ─────────────────
window.mockRentalTrend = {
  labels: ["Mar'23","Apr'23","May'23","Jun'23","Jul'23","Aug'23","Sep'23","Oct'23","Nov'23","Dec'23","Jan'24","Feb'24"],
  data:   [245000, 252000, 248000, 268000, 271000, 265000, 280000, 278000, 285000, 291000, 288000, 294000]
};

// ── MAINTENANCE COST TREND (monthly, 12 months) ──────────────
window.mockMaintenanceTrend = {
  labels: ["Mar'23","Apr'23","May'23","Jun'23","Jul'23","Aug'23","Sep'23","Oct'23","Nov'23","Dec'23","Jan'24","Feb'24"],
  data:   [32000, 28000, 45000, 38000, 22000, 41000, 55000, 48000, 36000, 62000, 58000, 44000]
};

// Helper: format Malaysian Ringgit
window.formatRM = (val) =>
  'RM ' + (val || 0).toLocaleString('en-MY', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

// Helper: format date
window.formatDate = (d) => {
  if (!d) return '–';
  const date = new Date(d);
  return date.toLocaleDateString('ms-MY', { day:'2-digit', month:'short', year:'numeric' });
};

// Helper: days until date
window.daysUntil = (d) => {
  const now = new Date(); now.setHours(0,0,0,0);
  const target = new Date(d); target.setHours(0,0,0,0);
  return Math.round((target - now) / 86400000);
};

console.log('[e-Hartanah] Mock data loaded — Assets:', mockAssets.length, '| Tenancy:', mockTenancy.length, '| Maintenance:', mockMaintenance.length);
