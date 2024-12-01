import {ClipboardList, Group, ChartLine, AlarmClock, Cloud, ShieldCheck} from 'lucide-react';

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Fitur", href: "#features" },
  { label: "Alur Kerja", href: "#workflow" },
  { label: "Harga", href: "#pricing" },
  { label: "Testimoni", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "Alya Pratama",
    company: "Kreatif Solusi",
    image: user1,
    text: "Platform ini sangat membantu tim kami dalam mengatur proyek. Semua tugas menjadi lebih terorganisir, dan kami dapat memenuhi tenggat waktu dengan lebih mudah.",
  },
  {
    user: "Dimas Mahendra",
    company: "TechnoFuture",
    image: user2,
    text: "Dengan fitur kolaborasi real-time, komunikasi antar anggota tim kami menjadi jauh lebih efisien. Hasil proyek kami meningkat secara signifikan.",
  },
  {
    user: "Siti Rahmawati",
    company: "Sinergi Digital",
    image: user3,
    text: "Saya sangat terkesan dengan kemampuan platform ini dalam memberikan analitik proyek yang detail. Kami dapat mengidentifikasi area yang perlu ditingkatkan dengan cepat.",
  },
  {
    user: "Raka Aditya",
    company: "Visi Nusantara",
    image: user4,
    text: "Platform ini membuat pengelolaan waktu jauh lebih mudah. Pengingat otomatis dan kalendernya benar-benar membantu kami menjaga semuanya tetap terjadwal.",
  },
  {
    user: "Nina Lestari",
    company: "Inovasi Cemerlang",
    image: user5,
    text: "Alat ini benar-benar mengubah cara kami bekerja. Dari tugas kecil hingga proyek besar, semuanya bisa dikelola dengan mudah dan efisien.",
  },
  {
    user: "Arief Kurniawan",
    company: "Daya Muda Kreatif",
    image: user6,
    text: "Saya sangat merekomendasikan platform ini. Dukungan pelanggan yang responsif dan fitur-fitur lengkapnya membuat pengalaman kami menjadi luar biasa.",
  },
];

export const features = [
  {
    icon: <ClipboardList />,
    text: "Papan Tugas Interaktif",
    description:
      "Buat, bagikan, dan kelola tugas dalam satu tempat dengan tampilan yang mudah digunakan.",
  },
  {
    icon: <Group />,
    text: "Kolaborasi Tim Real-Time",
    description:
      "Berkomunikasi dan bekerja sama secara langsung dengan anggota tim Anda di mana pun mereka berada.",
  },
  {
    icon: <ChartLine />,
    text: "Laporan Progres Otomatis",
    description:
      "Dapatkan laporan terperinci tentang kemajuan proyek tanpa perlu membuatnya secara manual.",
  },
  {
    icon: <AlarmClock />,
    text: "Pengingat Jadwal",
    description:
      "Jangan lewatkan tenggat waktu dengan fitur pengingat otomatis untuk tugas-tugas penting.",
  },
  {
    icon: <Cloud />,
    text: "Akses dari Mana Saja",
    description:
      "Kelola proyek Anda secara fleksibel melalui aplikasi berbasis cloud yang aman.",
  },
  {
    icon: <ShieldCheck />,
    text: "Keamanan Data Tingkat Tinggi",
    description:
      "Lindungi informasi proyek Anda dengan teknologi enkripsi terbaru.",
  },
];

export const checklistItems = [
  {
    title: "Tugas lebih terorganisir",
    description:
      "Pastikan semua anggota tim tahu tugas mereka dengan sistem manajemen tugas yang intuitif.",
  },
  {
    title: "Efisiensi kerja meningkat",
    description:
      "Hilangkan hambatan komunikasi dengan alat kolaborasi yang cepat dan mudah digunakan.",
  },
  {
    title: "Pengawasan proyek optimal",
    description:
      "Pantau kemajuan proyek secara real-time untuk memastikan semuanya berjalan sesuai rencana.",
  },
  {
    title: "Analitik produktivitas",
    description:
      "Analisis kinerja tim Anda untuk meningkatkan efisiensi di proyek berikutnya.",
  },
  {
    title: "Manajemen waktu yang lebih baik",
    description:
      "Atur jadwal proyek Anda dengan kalender dan pengingat otomatis untuk menjaga tenggat waktu tetap terpantau.",
  },
];


export const pricingOptions = [
  {
    title: "Gratis",
    price: "Rp0",
    features: [
      "Kolaborasi hingga 5 anggota",
      "3 proyek aktif",
      "Analitik dasar",
      "Penyimpanan 1GB",
    ],
  },
  {
    title: "Pro",
    price: "Rp99.000",
    features: [
      "Kolaborasi hingga 50 anggota",
      "10 proyek aktif",
      "Analitik lanjutan",
      "Penyimpanan 10GB",
    ],
  },
  {
    title: "Enterprise",
    price: "Rp399.000",
    features: [
      "Kolaborasi tanpa batas",
      "Proyek tanpa batas",
      "Analitik kustom",
      "Penyimpanan tak terbatas",
      "Dukungan prioritas 24/7",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Panduan Memulai" },
  { href: "#", text: "Dokumentasi" },
  { href: "#", text: "Tutorial" },
  { href: "#", text: "Referensi API" },
  { href: "#", text: "Pusat Bantuan" },
];

export const platformLinks = [
  { href: "#", text: "Fitur Utama" },
  { href: "#", text: "Perangkat yang Didukung" },
  { href: "#", text: "Persyaratan Sistem" },
  { href: "#", text: "Unduhan" },
  { href: "#", text: "Catatan Rilis" },
];

export const communityLinks = [
  { href: "#", text: "Acara TaskHub" },
  { href: "#", text: "Meetup Komunitas" },
  { href: "#", text: "Konferensi" },
  { href: "#", text: "Kolaborasi Tim" },
  { href: "#", text: "Peluang Karir" },
];
