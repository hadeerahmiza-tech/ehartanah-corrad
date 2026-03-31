/* ============================================================
   e-Hartanah Portal – Shared Navigation & Auth Utility
   Design: corrad-laravel (mfauzzury/corrad-laravel)
   ============================================================ */
'use strict';

const ehPortal = {

  /* ── Auth ───────────────────────────────────────────────── */
  checkAuth() {
    const user = localStorage.getItem('ehUser');
    if (!user) { window.location.replace('index.html'); return null; }
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

  /* ── Theme ──────────────────────────────────────────────── */
  themeChoices: [
    { value: 'violet',      label: 'Violet',  color: '#8b5cf6' },
    { value: 'blue',        label: 'Blue',    color: '#3b82f6' },
    { value: 'green',       label: 'Green',   color: '#22c55e' },
    { value: 'red',         label: 'Red',     color: '#ef4444' },
    { value: 'black-white', label: 'B&W',     color: '#1e293b' },
    { value: 'grey',        label: 'Grey',    color: '#737373' },
  ],

  getThemeColor() {
    return localStorage.getItem('ehThemeColor') || 'violet';
  },

  applyThemeColor(color) {
    document.documentElement.setAttribute('data-theme-color', color);
    localStorage.setItem('ehThemeColor', color);
    // update theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
      btn.classList.toggle('selected', btn.dataset.theme === color);
      const check = btn.querySelector('.theme-check');
      if (check) check.style.display = btn.dataset.theme === color ? '' : 'none';
    });
  },

  /* ── Nav items ──────────────────────────────────────────── */
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

  /* ── Build sidebar ──────────────────────────────────────── */
  buildSidebar(activePage) {
    const user = this.getUser();
    const initial = (user.name || 'U').charAt(0).toUpperCase();

    const items = this.navItems.map(item => `
      <a href="${item.href}" class="nav-link${item.id === activePage ? ' active' : ''}">
        ${item.icon}
        <span>${item.label}</span>
        <span class="nav-tooltip">${item.label}</span>
      </a>`).join('');

    return `
      <div class="sidebar-logo">
        <div class="sidebar-logo-icon">eH</div>
        <div class="sidebar-logo-text">
          <p>e-Hartanah</p>
          <span>Portal Pengurusan</span>
        </div>
      </div>
      <nav style="flex:1;overflow-y:auto;padding:10px 8px;">
        <p class="nav-group-label">Menu Utama</p>
        ${items}
      </nav>
      <div class="sidebar-user">
        <div class="sidebar-user-inner">
          <div class="sidebar-user-avatar">${initial}</div>
          <div style="overflow:hidden;flex:1;min-width:0">
            <p class="sidebar-user-name" style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${user.name || 'Pengguna'}</p>
            <p class="sidebar-user-role">${user.role || 'Staff'}</p>
          </div>
        </div>
        <button class="sidebar-logout" onclick="ehPortal.logout()">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"/></svg>
          <span>Log Keluar</span>
        </button>
      </div>`;
  },

  /* ── Build topbar ───────────────────────────────────────── */
  buildTopbar(pageTitle) {
    const user = this.getUser();
    const initial = (user.name || 'U').charAt(0).toUpperCase();
    const nameShort = (user.name || 'Pengguna').length > 18
      ? (user.name || 'Pengguna').slice(0, 18) + '…'
      : (user.name || 'Pengguna');
    const notifCount = (window.mockNotifications || []).length;
    const currentTheme = this.getThemeColor();

    const themeButtons = this.themeChoices.map(t => `
      <button class="theme-btn${t.value === currentTheme ? ' selected' : ''}" data-theme="${t.value}" onclick="ehPortal.applyThemeColor('${t.value}')">
        <span style="display:flex;align-items:center;gap:6px">
          <span style="width:10px;height:10px;border-radius:50%;background:${t.color};flex-shrink:0"></span>
          ${t.label}
        </span>
        <svg class="theme-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style="width:14px;height:14px;color:var(--accent-600);display:${t.value === currentTheme ? '' : 'none'}"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" /></svg>
      </button>`).join('');

    const notifItems = (window.mockNotifications || []).map(n => `
      <a href="${n.link}" style="display:flex;gap:10px;padding:10px 14px;border-bottom:1px solid #f1f5f9;transition:background 0.15s;text-decoration:none;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background=''">
        <div style="width:8px;height:8px;border-radius:50%;margin-top:5px;flex-shrink:0;background:${n.type==='danger'?'#ef4444':n.type==='warning'?'#f59e0b':n.type==='success'?'#22c55e':'#3b82f6'}"></div>
        <div style="flex:1;min-width:0">
          <p style="font-size:12px;color:#334155;line-height:1.4">${n.message}</p>
          <p style="font-size:11px;color:#94a3b8;margin-top:2px">${n.time}</p>
        </div>
      </a>`).join('');

    return `
      <!-- Left: shield icon + mobile menu -->
      <div class="tb-left">
        <button id="menu-btn" style="display:none;border:none;background:none;cursor:pointer;padding:4px;border-radius:4px;" class="lg-hidden">
          <svg style="width:18px;height:18px;color:#64748b" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
        </button>
        <div style="width:18px;height:18px;border-radius:4px;background:linear-gradient(135deg,var(--accent-600),var(--accent-500));display:flex;align-items:center;justify-content:center;flex-shrink:0">
          <svg style="width:11px;height:11px;color:white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/></svg>
        </div>
      </div>

      <!-- Right: user + settings + notifications + logout -->
      <div class="tb-right">
        <!-- User profile -->
        <div class="tb-sep"></div>
        <div class="tb-user">
          <div class="tb-user-avatar">${initial}</div>
          <div style="line-height:1">
            <p class="tb-user-name">${nameShort}</p>
            <p class="tb-user-role">${user.role || 'Staff'}</p>
          </div>
          <span class="tb-tip">Profil</span>
        </div>

        <!-- Settings -->
        <div class="tb-sep"></div>
        <div class="tb-settings-wrap">
          <button class="tb-btn" id="settings-btn" onclick="ehPortal.toggleSettings(event)">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
            <span class="tb-tip">Tetapan</span>
          </button>
          <div id="settings-panel">
            <p class="panel-label">Warna Tema</p>
            <div class="theme-grid">${themeButtons}</div>
          </div>
        </div>

        <!-- Notifications -->
        <div class="tb-sep"></div>
        <div class="notif-wrap" style="height:40px;display:flex;align-items:stretch;">
          <button class="tb-btn" id="notif-btn" onclick="ehPortal.toggleNotif(event)" style="position:relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"/></svg>
            ${notifCount > 0 ? `<span style="position:absolute;top:6px;right:6px;width:8px;height:8px;background:#ef4444;border-radius:50%;border:2px solid white"></span>` : ''}
            <span class="tb-tip">Notifikasi</span>
          </button>
          <div id="notif-panel">
            <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-bottom:1px solid #e2e8f0">
              <span style="font-size:13px;font-weight:700;color:#0f172a">Notifikasi</span>
              <span class="badge badge-blue" style="font-size:10px">${notifCount} baru</span>
            </div>
            <div style="max-height:260px;overflow-y:auto">${notifItems || '<p style="padding:16px;text-align:center;font-size:12px;color:#94a3b8">Tiada notifikasi</p>'}</div>
            <div style="padding:8px 14px;text-align:center;border-top:1px solid #f1f5f9">
              <a href="reports.html" style="font-size:12px;font-weight:600;color:var(--accent-600);text-decoration:none">Lihat semua aktiviti →</a>
            </div>
          </div>
        </div>

        <!-- Logout -->
        <div class="tb-sep"></div>
        <button class="tb-btn" onclick="ehPortal.logout()">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"/></svg>
          <span class="tb-tip">Log Keluar</span>
        </button>
      </div>`;
  },

  /* ── Toggle panels ──────────────────────────────────────── */
  toggleSettings(e) {
    e.stopPropagation();
    document.getElementById('settings-panel').classList.toggle('open');
    document.getElementById('notif-panel').classList.remove('open');
  },

  toggleNotif(e) {
    e.stopPropagation();
    document.getElementById('notif-panel').classList.toggle('open');
    document.getElementById('settings-panel').classList.remove('open');
  },

  /* ── Main init ──────────────────────────────────────────── */
  init(config) {
    const { page, title } = typeof config === 'string'
      ? { page: config, title: config }
      : config;

    const user = this.checkAuth();
    if (!user) return;

    // apply saved theme
    this.applyThemeColor(this.getThemeColor());

    // inject sidebar
    const sidebarEl = document.getElementById('sidebar');
    if (sidebarEl) sidebarEl.innerHTML = this.buildSidebar(page);

    // inject topbar
    const topbarEl = document.getElementById('topbar');
    if (topbarEl) topbarEl.innerHTML = this.buildTopbar(title);

    this._setupMobileMenu();
    this._setupOutsideClick();
  },

  _setupMobileMenu() {
    const btn = document.getElementById('menu-btn');
    if (btn) {
      btn.style.display = '';
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('sidebar-overlay');
        sidebar && sidebar.classList.toggle('-translate-x-full');
        overlay && overlay.classList.toggle('hidden');
      });
    }
  },

  _setupOutsideClick() {
    document.addEventListener('click', (e) => {
      // close sidebar overlay
      const overlay = document.getElementById('sidebar-overlay');
      if (overlay && !overlay.classList.contains('hidden') && overlay.contains(e.target)) {
        const sidebar = document.getElementById('sidebar');
        sidebar && sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        return;
      }
      // close dropdowns
      const settingsPanel = document.getElementById('settings-panel');
      const notifPanel = document.getElementById('notif-panel');
      const settingsBtn = document.getElementById('settings-btn');
      const notifBtn = document.getElementById('notif-btn');

      if (settingsPanel && settingsBtn && !settingsBtn.contains(e.target) && !settingsPanel.contains(e.target)) {
        settingsPanel.classList.remove('open');
      }
      if (notifPanel && notifBtn && !notifBtn.contains(e.target) && !notifPanel.contains(e.target)) {
        notifPanel.classList.remove('open');
      }
    });
  }
};

// legacy compat
function toggleNotifications() { ehPortal.toggleNotif({ stopPropagation: () => {} }); }
