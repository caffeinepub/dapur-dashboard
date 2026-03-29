import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertTriangle,
  Bell,
  BookOpen,
  CheckCircle2,
  LayoutDashboard,
  Package,
  Plus,
  Search,
  Settings,
  ShoppingCart,
  TrendingDown,
  Truck,
} from "lucide-react";
import { useState } from "react";

const items = [
  {
    id: 1,
    name: "Kentang Yukon",
    category: "Sayuran",
    quantity: 25,
    unit: "kg",
    status: "stocked",
    icon: "🥔",
  },
  {
    id: 2,
    name: "Tomat Segar",
    category: "Sayuran",
    quantity: 8,
    unit: "kg",
    status: "low",
    icon: "🍅",
  },
  {
    id: 3,
    name: "Bawang Merah",
    category: "Bumbu",
    quantity: 3,
    unit: "kg",
    status: "critical",
    icon: "🧅",
  },
  {
    id: 4,
    name: "Ayam Broiler",
    category: "Daging",
    quantity: 15,
    unit: "kg",
    status: "stocked",
    icon: "🍗",
  },
  {
    id: 5,
    name: "Beras Putih",
    category: "Lainnya",
    quantity: 50,
    unit: "kg",
    status: "stocked",
    icon: "🍚",
  },
  {
    id: 6,
    name: "Cabai Merah",
    category: "Bumbu",
    quantity: 2,
    unit: "kg",
    status: "critical",
    icon: "🌶️",
  },
  {
    id: 7,
    name: "Wortel",
    category: "Sayuran",
    quantity: 12,
    unit: "kg",
    status: "stocked",
    icon: "🥕",
  },
  {
    id: 8,
    name: "Telur Ayam",
    category: "Lainnya",
    quantity: 4,
    unit: "krat",
    status: "low",
    icon: "🥚",
  },
  {
    id: 9,
    name: "Minyak Goreng",
    category: "Bumbu",
    quantity: 20,
    unit: "liter",
    status: "stocked",
    icon: "🫙",
  },
  {
    id: 10,
    name: "Mangga",
    category: "Buah",
    quantity: 5,
    unit: "kg",
    status: "low",
    icon: "🥭",
  },
  {
    id: 11,
    name: "Air Mineral",
    category: "Minuman",
    quantity: 24,
    unit: "botol",
    status: "stocked",
    icon: "💧",
  },
  {
    id: 12,
    name: "Daging Sapi",
    category: "Daging",
    quantity: 1,
    unit: "kg",
    status: "critical",
    icon: "🥩",
  },
];

const recentUpdates = [
  {
    id: 1,
    item: "Beras Putih",
    action: "Ditambahkan",
    amount: "+20 kg",
    time: "10 menit lalu",
    icon: "🍚",
  },
  {
    id: 2,
    item: "Ayam Broiler",
    action: "Diperbarui",
    amount: "-5 kg",
    time: "1 jam lalu",
    icon: "🍗",
  },
  {
    id: 3,
    item: "Cabai Merah",
    action: "Stok Rendah",
    amount: "Sisa 2 kg",
    time: "2 jam lalu",
    icon: "🌶️",
  },
  {
    id: 4,
    item: "Minyak Goreng",
    action: "Ditambahkan",
    amount: "+10 liter",
    time: "3 jam lalu",
    icon: "🫙",
  },
  {
    id: 5,
    item: "Daging Sapi",
    action: "Kritis",
    amount: "Sisa 1 kg",
    time: "5 jam lalu",
    icon: "🥩",
  },
];

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: false },
  { icon: Package, label: "Inventaris", active: true },
  { icon: BookOpen, label: "Resep", active: false },
  { icon: Truck, label: "Pemasok", active: false },
  { icon: ShoppingCart, label: "Pesanan", active: false },
  { icon: Settings, label: "Pengaturan", active: false },
];

const categories = [
  "Semua",
  "Sayuran",
  "Bumbu",
  "Daging",
  "Buah",
  "Minuman",
  "Lainnya",
];

const statusConfig = {
  stocked: {
    label: "Tersedia",
    bg: "bg-green-100",
    text: "text-green-700",
    border: "border-green-200",
  },
  low: {
    label: "Stok Rendah",
    bg: "bg-amber-100",
    text: "text-amber-700",
    border: "border-amber-200",
  },
  critical: {
    label: "Kritis",
    bg: "bg-red-100",
    text: "text-red-700",
    border: "border-red-200",
  },
};

const iconBgMap: Record<string, string> = {
  Sayuran: "bg-green-50",
  Bumbu: "bg-orange-50",
  Daging: "bg-red-50",
  Buah: "bg-yellow-50",
  Minuman: "bg-blue-50",
  Lainnya: "bg-stone-50",
};

export default function App() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("Semua");

  const filtered = items.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCat =
      categoryFilter === "Semua" || item.category === categoryFilter;
    return matchSearch && matchCat;
  });

  const totalItems = items.length;
  const lowCount = items.filter((i) => i.status === "low").length;
  const criticalCount = items.filter((i) => i.status === "critical").length;

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      {/* Sidebar */}
      <aside
        className="flex flex-col w-60 shrink-0 h-full"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        {/* Logo */}
        <div
          className="px-6 py-5 border-b"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div className="flex items-center gap-3">
            <span className="text-3xl">🍳</span>
            <div>
              <p className="font-bold text-white text-sm tracking-wide">
                DAPUR SAYA
              </p>
              <p
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Manajemen Dapur
              </p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-3 space-y-1">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.label}
              data-ocid={`nav.${item.label.toLowerCase()}.link`}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-sm font-medium"
              style={
                item.active
                  ? { backgroundColor: "#C56A2F", color: "#fff" }
                  : { color: "rgba(255,255,255,0.65)" }
              }
              onMouseEnter={(e) => {
                if (!item.active) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "rgba(255,255,255,0.07)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#fff";
                }
              }}
              onMouseLeave={(e) => {
                if (!item.active) {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    "";
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "rgba(255,255,255,0.65)";
                }
              }}
            >
              <item.icon className="w-4.5 h-4.5" size={18} />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div
          className="px-4 py-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            v1.0.0 · Dapur Saya
          </p>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header
          className="flex items-center justify-between px-6 py-3 shrink-0"
          style={{ backgroundColor: "#B55A2A" }}
        >
          {/* Left brand */}
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-sm tracking-wide opacity-90">
              🍴 Dapur Pro
            </span>
          </div>

          {/* Center chip */}
          <div
            className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold"
            style={{ backgroundColor: "rgba(255,255,255,0.18)", color: "#fff" }}
          >
            <span>🏠</span>
            <span>Dapur Utama — Jakarta</span>
          </div>

          {/* Right utilities */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              data-ocid="header.bell.button"
              className="relative p-2 rounded-full transition-colors"
              style={{ color: "rgba(255,255,255,0.85)" }}
            >
              <Bell size={18} />
              <span
                className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                style={{ backgroundColor: "#FBBF24" }}
              />
            </button>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer"
              style={{
                backgroundColor: "rgba(255,255,255,0.25)",
                color: "#fff",
              }}
            >
              DS
            </div>
          </div>
        </header>

        {/* Content */}
        <main
          className="flex-1 overflow-y-auto p-6"
          style={{ backgroundColor: "#F6EFE7" }}
        >
          {/* Title row */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-xl font-bold" style={{ color: "#3D1F0A" }}>
                Dashboard Inventaris Dapur
              </h1>
              <p className="text-sm mt-0.5" style={{ color: "#7A5035" }}>
                Kelola semua bahan dan stok dapur Anda
              </p>
            </div>
            <Button
              data-ocid="inventory.tambah.primary_button"
              className="flex items-center gap-2 font-semibold text-white"
              style={{ backgroundColor: "#B55A2A" }}
            >
              <Plus size={16} />
              Tambah Barang
            </Button>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div
              className="bg-white rounded-xl p-4 border flex items-center gap-4"
              style={{ borderColor: "#E8D9C8" }}
              data-ocid="stats.total.card"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: "#FEF3E8" }}
              >
                📦
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: "#3D1F0A" }}>
                  {totalItems}
                </p>
                <p className="text-xs font-medium" style={{ color: "#7A5035" }}>
                  Total Barang
                </p>
              </div>
            </div>
            <div
              className="bg-white rounded-xl p-4 border flex items-center gap-4"
              style={{ borderColor: "#E8D9C8" }}
              data-ocid="stats.low.card"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#FFFBEB" }}
              >
                <TrendingDown size={22} className="text-amber-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-amber-600">{lowCount}</p>
                <p className="text-xs font-medium" style={{ color: "#7A5035" }}>
                  Stok Rendah
                </p>
              </div>
            </div>
            <div
              className="bg-white rounded-xl p-4 border flex items-center gap-4"
              style={{ borderColor: "#E8D9C8" }}
              data-ocid="stats.critical.card"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: "#FEF2F2" }}
              >
                <AlertTriangle size={22} className="text-red-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-red-600">
                  {criticalCount}
                </p>
                <p className="text-xs font-medium" style={{ color: "#7A5035" }}>
                  Kritis
                </p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="semua" className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <TabsList
                className="rounded-lg p-1"
                style={{ backgroundColor: "rgba(181,90,42,0.1)" }}
              >
                <TabsTrigger
                  value="semua"
                  data-ocid="inventory.semua.tab"
                  className="rounded-md data-[state=active]:text-white text-sm font-semibold"
                  style={
                    { "--tw-ring-color": "transparent" } as React.CSSProperties
                  }
                >
                  Semua
                </TabsTrigger>
                <TabsTrigger
                  value="kelola"
                  data-ocid="inventory.kelola.tab"
                  className="rounded-md text-sm font-semibold"
                >
                  Kelola Stok
                </TabsTrigger>
              </TabsList>

              {/* Filters */}
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search
                    size={15}
                    className="absolute left-3 top-1/2 -translate-y-1/2"
                    style={{ color: "#A07050" }}
                  />
                  <Input
                    data-ocid="inventory.search_input"
                    placeholder="Cari barang..."
                    className="pl-9 w-52 bg-white text-sm"
                    style={{ borderColor: "#E8D9C8" }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <Select
                  value={categoryFilter}
                  onValueChange={setCategoryFilter}
                >
                  <SelectTrigger
                    data-ocid="inventory.category.select"
                    className="w-44 bg-white text-sm"
                    style={{ borderColor: "#E8D9C8" }}
                  >
                    <SelectValue placeholder="Semua Kategori" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat === "Semua" ? "Semua Kategori" : cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <TabsContent value="semua">
              {/* Item grid */}
              {filtered.length === 0 ? (
                <div
                  data-ocid="inventory.empty_state"
                  className="bg-white rounded-xl border py-16 flex flex-col items-center gap-3"
                  style={{ borderColor: "#E8D9C8" }}
                >
                  <span className="text-5xl">🔍</span>
                  <p className="font-semibold" style={{ color: "#7A5035" }}>
                    Tidak ada barang ditemukan
                  </p>
                  <p className="text-sm" style={{ color: "#A07050" }}>
                    Coba ubah kata kunci atau kategori filter
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-4">
                  {filtered.map((item, idx) => {
                    const sc =
                      statusConfig[item.status as keyof typeof statusConfig];
                    const iconBg = iconBgMap[item.category] || "bg-stone-50";
                    return (
                      <div
                        key={item.id}
                        data-ocid={`inventory.item.${idx + 1}`}
                        className="bg-white rounded-xl border p-4 flex flex-col items-center gap-3 hover:shadow-md transition-shadow cursor-pointer"
                        style={{ borderColor: "#E8D9C8" }}
                      >
                        {/* Large emoji icon */}
                        <div
                          className={`w-20 h-20 rounded-2xl flex items-center justify-center text-5xl ${iconBg}`}
                        >
                          {item.icon}
                        </div>

                        {/* Name */}
                        <div className="text-center">
                          <p
                            className="font-bold text-sm"
                            style={{ color: "#3D1F0A" }}
                          >
                            {item.name}
                          </p>
                          <p
                            className="text-xs mt-0.5"
                            style={{ color: "#A07050" }}
                          >
                            {item.category}
                          </p>
                        </div>

                        {/* Quantity */}
                        <div
                          className="flex items-center gap-1 text-xs"
                          style={{ color: "#7A5035" }}
                        >
                          <Package size={12} />
                          <span className="font-semibold">{item.quantity}</span>
                          <span>{item.unit}</span>
                        </div>

                        {/* Status pill */}
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${sc.bg} ${sc.text} ${sc.border}`}
                        >
                          {item.status === "stocked" && (
                            <CheckCircle2 size={11} className="mr-1" />
                          )}
                          {item.status === "low" && (
                            <TrendingDown size={11} className="mr-1" />
                          )}
                          {item.status === "critical" && (
                            <AlertTriangle size={11} className="mr-1" />
                          )}
                          {sc.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </TabsContent>

            <TabsContent value="kelola">
              <div
                className="bg-white rounded-xl border p-6"
                style={{ borderColor: "#E8D9C8" }}
              >
                <p className="text-sm font-medium" style={{ color: "#7A5035" }}>
                  Fitur kelola stok akan segera hadir.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Recent updates */}
          <div
            className="bg-white rounded-xl border p-5"
            style={{ borderColor: "#E8D9C8" }}
            data-ocid="updates.panel"
          >
            <h2 className="font-bold text-sm mb-4" style={{ color: "#3D1F0A" }}>
              Pembaruan Stok Terbaru
            </h2>
            <div className="space-y-3">
              {recentUpdates.map((update, idx) => (
                <div
                  key={update.id}
                  data-ocid={`updates.item.${idx + 1}`}
                  className="flex items-center gap-4 py-2 border-b last:border-0"
                  style={{ borderColor: "#F0E4D4" }}
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-xl shrink-0"
                    style={{ backgroundColor: "#FEF3E8" }}
                  >
                    {update.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-semibold truncate"
                      style={{ color: "#3D1F0A" }}
                    >
                      {update.item}
                    </p>
                    <p className="text-xs" style={{ color: "#A07050" }}>
                      {update.action}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p
                      className="text-sm font-bold"
                      style={{
                        color: update.amount.startsWith("+")
                          ? "#16A34A"
                          : "#DC2626",
                      }}
                    >
                      {update.amount}
                    </p>
                    <p className="text-xs" style={{ color: "#C4A882" }}>
                      {update.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <footer
            className="mt-6 text-center text-xs"
            style={{ color: "#C4A882" }}
          >
            © {new Date().getFullYear()}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              caffeine.ai
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}
