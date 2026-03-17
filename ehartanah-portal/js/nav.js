/* ============================================================
   e-Hartanah Portal – Shared Navigation & Auth Utility
   ============================================================ */
'use strict';

const ehPortal = {

  /* ── Auth ───────────────────────────────────────────────── */
  checkAuth() {
    const user = localStorage.getItem('ehUser');
    if (!user) {
      window.location.replace('index.html');
      return null;
    }
    try { return JSON.parse(user); }
    catch { localStorage.removeItem('ehUser'); window.location.replace('index.html'); return null; }
  },

  getUser() {
    try { return JSON.parse(localStorage.getItem('ehUser') || '{}'); }
    catch { return {}; }
  },

  logout() {
    localStorage.removeItem('ehUser');
    window.location.replace('index.html');
  },

  /* ── Nav item config ────────────────────────────────────── */
  navItems: [
    {
      id: 'dashboard', href: 'dashboard.html', label: 'Dashboard',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>`
    },
    {
      id: 'assets', href: 'assets.html', label: 'Pengurusan Aset',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"/></svg>`
    },
    {
      id: 'leasing', href: 'leasing.html', label: 'Pajakan & Penyewaan',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"/></svg>`
    },
    {
      id: 'maintenance', href: 'maintenance.html', label: 'Penyelenggaraan',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"/></svg>`
    },
    {
      id: 'valuation', href: 'valuation.html', label: 'Penilaian Hartanah',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/></svg>`
    },
    {
      id: 'disposal', href: 'disposal.html', label: 'Pelupusan Aset',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/></svg>`
    },
    {
      id: 'reports', href: 'reports.html', label: 'Laporan & Analitik',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>`
    },
  ],

  /* ── Render sidebar HTML ────────────────────────────────── */
  buildSidebar(activePage) {
    const user = this.getUser();
    const items = this.navItems.map(item => `
      <a href="${item.href}" data-nav="${item.id}"
         class="nav-link${item.id === activePage ? ' active' : ''}">
        ${item.icon}
        <span>${item.label}</span>
      </a>`).join('');

    return `
    <!-- Logo — teal accent bar on left edge, matching corrad primary+secondary -->
    <div class="flex items-center gap-3 px-4 py-4 border-b border-white/10 flex-shrink-0">
      <div class="w-9 h-9 flex items-center justify-center flex-shrink-0"
           style="background:rgb(var(--color-secondary));border-radius:var(--rounded-btn)">
        <span style="color:rgb(var(--color-primary));font-weight:900;font-size:13px;letter-spacing:-0.5px">eH</span>
      </div>
      <div class="leading-tight">
        <p class="text-white font-bold text-sm" style="font-family:'Space Grotesk',sans-serif">e-Hartanah</p>
        <p style="color:rgb(var(--color-secondary));font-size:10px;font-family:'Space Grotesk',sans-serif;opacity:.8">Portal Pengurusan</p>
      </div>
    </div>

    <nav class="flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
      <p style="font-size:9px;font-weight:700;color:#4b5563;text-transform:uppercase;letter-spacing:.1em;padding:0 8px;margin-bottom:8px;font-family:'Space Grotesk',sans-serif">Menu Utama</p>
      ${items}
    </nav>

    <div class="px-4 py-3 border-t border-white/10 flex-shrink-0">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-8 h-8 flex items-center justify-center flex-shrink-0"
             style="background:rgb(var(--color-secondary));border-radius:var(--rounded-btn)">
          <span style="color:rgb(var(--color-primary));font-size:12px;font-weight:800">${(user.name || 'U').charAt(0).toUpperCase()}</span>
        </div>
        <div class="overflow-hidden">
          <p class="text-white font-semibold truncate text-xs" id="user-name">${user.name || 'Pengguna'}</p>
          <p style="color:rgb(var(--color-secondary));font-size:10px;opacity:.85" class="truncate" id="user-role">${user.role || 'Staff'}</p>
        </div>
      </div>
      <button data-logout onclick="ehPortal.logout()"
        class="w-full flex items-center gap-2 px-3 py-2 text-slate-400 hover:bg-white/10 hover:text-white text-xs font-medium transition-all uppercase tracking-wider"
        style="border-radius:var(--rounded-btn);font-family:'Space Grotesk',sans-serif">
        <svg class="w-4 h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"/>
        </svg>
        Log Keluar
      </button>
    </div>`;
  },

  /* ── Render topbar HTML ─────────────────────────────────── */
  buildTopbar(pageTitle) {
    const user = this.getUser();
    const notifCount = (window.mockNotifications || []).length;
    return `
    <div class="flex items-center gap-3">
      <button id="menu-btn" class="lg:hidden p-2 hover:bg-slate-100 transition-colors" style="border-radius:var(--rounded-btn)">
        <svg class="w-5 h-5 text-slate-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
        </svg>
      </button>
      <!-- Left accent bar matching corrad header style -->
      <div class="flex items-center gap-2.5">
        <div class="w-1 h-8 hidden sm:block" style="background:rgb(var(--color-secondary));border-radius:2px"></div>
        <div>
          <h1 style="font-size:14px;font-weight:800;color:rgb(var(--color-primary));text-transform:uppercase;letter-spacing:0.05em;line-height:1.2;font-family:'Space Grotesk',sans-serif">${pageTitle}</h1>
          <p class="text-xs text-slate-400 hidden sm:block" style="font-family:'Space Grotesk',sans-serif">Jabatan Ketua Pengarah Tanah &amp; Galian Persekutuan</p>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <div class="relative">
        <button onclick="toggleNotifications()" class="relative p-2 rounded-lg hover:bg-slate-100 transition-colors">
          <svg class="w-5 h-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/>
          </svg>
          ${notifCount > 0 ? `<span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>` : ''}
        </button>
        <!-- Notification dropdown -->
        <div id="notif-panel" class="hidden absolute right-0 top-10 w-80 bg-white rounded-xl shadow-2xl border border-slate-100 z-50 overflow-hidden">
          <div class="px-4 py-3 border-b border-slate-100 flex justify-between items-center">
            <span class="text-sm font-bold text-slate-800">Notifikasi</span>
            <span class="badge badge-blue text-[10px]">${notifCount} baru</span>
          </div>
          <div class="max-h-72 overflow-y-auto">
            ${(window.mockNotifications || []).map(n => `
            <a href="${n.link}" class="flex gap-3 px-4 py-3 hover:bg-slate-50 border-b border-slate-50 transition-colors">
              <div class="w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${n.type==='danger'?'bg-red-500':n.type==='warning'?'bg-amber-500':n.type==='success'?'bg-emerald-500':'bg-blue-500'}"></div>
              <div class="flex-1 min-w-0">
                <p class="text-xs text-slate-700 leading-snug">${n.message}</p>
                <p class="text-[11px] text-slate-400 mt-0.5">${n.time}</p>
              </div>
            </a>`).join('')}
          </div>
          <div class="px-4 py-2.5 text-center">
            <a href="reports.html" class="text-xs font-semibold text-blue-600 hover:underline">Lihat semua aktiviti</a>
          </div>
        </div>
      </div>
      <div class="hidden sm:flex items-center gap-2 pl-3 border-l border-slate-200">
        <div class="w-8 h-8 flex items-center justify-center flex-shrink-0"
             style="background:rgb(var(--color-secondary));border-radius:var(--rounded-btn)">
          <span style="color:rgb(var(--color-primary));font-size:12px;font-weight:800;font-family:'Space Grotesk',sans-serif">${(user.name || 'U').charAt(0).toUpperCase()}</span>
        </div>
        <div class="hidden md:block">
          <p style="font-size:12px;font-weight:700;color:rgb(var(--color-primary));line-height:1.2;font-family:'Space Grotesk',sans-serif">${user.name || 'Pengguna'}</p>
          <p style="font-size:10px;color:#9ca3af;font-family:'Space Grotesk',sans-serif">${user.role || 'Staff'}</p>
        </div>
      </div>
    </div>`;
  },

  /* ── Main init ──────────────────────────────────────────── */
  init(config) {
    const { page, title } = typeof config === 'string'
      ? { page: config, title: config }
      : config;

    // Auth check
    const user = this.checkAuth();
    if (!user) return;

    // Inject sidebar
    const sidebarEl = document.getElementById('sidebar');
    if (sidebarEl) sidebarEl.innerHTML = this.buildSidebar(page);

    // Inject topbar
    const topbarEl = document.getElementById('topbar');
    if (topbarEl) topbarEl.innerHTML = this.buildTopbar(title);

    // Mobile menu
    this._setupMobileMenu();
  },

  _setupMobileMenu() {
    document.addEventListener('click', (e) => {
      const btn = document.getElementById('menu-btn');
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebar-overlay');

      if (btn && btn.contains(e.target)) {
        sidebar && sidebar.classList.toggle('-translate-x-full');
        overlay && overlay.classList.toggle('hidden');
        return;
      }
      if (overlay && overlay.contains(e.target)) {
        sidebar && sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        return;
      }
      // Close notifications on outside click
      const notifBtn = document.querySelector('[onclick="toggleNotifications()"]');
      const notifPanel = document.getElementById('notif-panel');
      if (notifPanel && notifBtn && !notifBtn.contains(e.target) && !notifPanel.contains(e.target)) {
        notifPanel.classList.add('hidden');
      }
    });
  }
};

function toggleNotifications() {
  const panel = document.getElementById('notif-panel');
  if (panel) panel.classList.toggle('hidden');
}
