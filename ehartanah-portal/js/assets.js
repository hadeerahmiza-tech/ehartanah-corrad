/* ============================================================
   e-Hartanah Portal – Asset Management Page Script
   ============================================================ */
'use strict';

let filteredAssets = [];
let currentPage = 1;
const PAGE_SIZE = 10;

document.addEventListener('DOMContentLoaded', () => {
  filteredAssets = [...(window.mockAssets || [])];
  renderSummaryCards();
  renderTable();
  setupFilters();
});

/* ── Summary cards ────────────────────────────────────────── */
function renderSummaryCards() {
  const assets = window.mockAssets || [];
  const byType = {};
  assets.forEach(a => { byType[a.type] = (byType[a.type] || 0) + 1; });

  document.getElementById('asset-total') && (document.getElementById('asset-total').textContent = assets.length);
  document.getElementById('asset-active') && (document.getElementById('asset-active').textContent = assets.filter(a => a.status === 'Aktif').length);
  document.getElementById('asset-maintenance') && (document.getElementById('asset-maintenance').textContent = assets.filter(a => a.status === 'Penyelenggaraan').length);
  document.getElementById('asset-land') && (document.getElementById('asset-land').textContent = assets.filter(a => a.type === 'Tanah Simpan').length);

  const totalValue = assets.reduce((s, a) => s + (a.marketValue || 0), 0);
  document.getElementById('asset-total-value') && (document.getElementById('asset-total-value').textContent = formatRM(totalValue));
}

/* ── Table render ─────────────────────────────────────────── */
function renderTable() {
  const tbody = document.getElementById('assets-tbody');
  if (!tbody) return;

  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = filteredAssets.slice(start, start + PAGE_SIZE);
  const count = document.getElementById('asset-count');
  if (count) count.textContent = `${filteredAssets.length} rekod dijumpai`;

  if (pageItems.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="text-center py-12 text-slate-400 text-sm">Tiada rekod ditemui</td></tr>`;
    renderPagination();
    return;
  }

  const statusMap = {
    'Aktif':           '<span class="badge badge-green">Aktif</span>',
    'Penyelenggaraan': '<span class="badge badge-yellow">Penyelenggaraan</span>',
    'Tidak Aktif':     '<span class="badge badge-gray">Tidak Aktif</span>',
    'Pelupusan':       '<span class="badge badge-red">Pelupusan</span>',
  };

  tbody.innerHTML = pageItems.map(a => `
  <tr>
    <td><span class="font-mono text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded">${a.id}</span></td>
    <td>
      <p class="font-semibold text-slate-800 text-sm">${a.name}</p>
      <p class="text-xs text-slate-400 mt-0.5">${a.address}</p>
    </td>
    <td><span class="badge badge-blue">${a.type}</span></td>
    <td class="text-sm text-slate-600">${a.ownershipType}</td>
    <td>
      <p class="text-sm font-medium text-slate-700">${a.location}</p>
      <p class="text-xs text-slate-400">${a.state}</p>
    </td>
    <td class="text-xs text-slate-500">${a.fundSource}</td>
    <td class="text-sm font-semibold text-slate-700">${formatRM(a.marketValue)}</td>
    <td>${statusMap[a.status] || `<span class="badge badge-gray">${a.status}</span>`}</td>
  </tr>`).join('');

  renderPagination();
}

/* ── Pagination ───────────────────────────────────────────── */
function renderPagination() {
  const totalPages = Math.ceil(filteredAssets.length / PAGE_SIZE);
  const pg = document.getElementById('pagination');
  if (!pg) return;

  if (totalPages <= 1) { pg.innerHTML = ''; return; }

  let html = `<button onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}
    class="btn btn-secondary btn-sm ${currentPage === 1 ? 'opacity-40 cursor-not-allowed' : ''}">
    &laquo; Sebelum
  </button>`;

  for (let i = 1; i <= totalPages; i++) {
    html += `<button onclick="goToPage(${i})"
      class="btn btn-sm ${i === currentPage ? 'btn-primary' : 'btn-secondary'}">${i}</button>`;
  }
  html += `<button onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}
    class="btn btn-secondary btn-sm ${currentPage === totalPages ? 'opacity-40 cursor-not-allowed' : ''}">
    Seterusnya &raquo;
  </button>`;
  pg.innerHTML = html;
}

function goToPage(page) {
  const totalPages = Math.ceil(filteredAssets.length / PAGE_SIZE);
  if (page < 1 || page > totalPages) return;
  currentPage = page;
  renderTable();
  document.getElementById('assets-tbody')?.closest('.section-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── Filters ──────────────────────────────────────────────── */
function setupFilters() {
  const search = document.getElementById('search-asset');
  const filterType = document.getElementById('filter-type');
  const filterState = document.getElementById('filter-state');
  const filterStatus = document.getElementById('filter-status');

  [search, filterType, filterState, filterStatus].forEach(el => {
    if (el) el.addEventListener('input', applyFilters);
  });
}

function applyFilters() {
  const q = (document.getElementById('search-asset')?.value || '').toLowerCase();
  const type = document.getElementById('filter-type')?.value || '';
  const state = document.getElementById('filter-state')?.value || '';
  const status = document.getElementById('filter-status')?.value || '';

  filteredAssets = (window.mockAssets || []).filter(a => {
    const matchQ = !q || a.name.toLowerCase().includes(q) || a.id.toLowerCase().includes(q) || a.location.toLowerCase().includes(q);
    const matchType = !type || a.type === type;
    const matchState = !state || a.state === state;
    const matchStatus = !status || a.status === status;
    return matchQ && matchType && matchState && matchStatus;
  });

  currentPage = 1;
  renderTable();
}

function clearFilters() {
  ['search-asset','filter-type','filter-state','filter-status'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  filteredAssets = [...(window.mockAssets || [])];
  currentPage = 1;
  renderTable();
}

/* ── Export simulation ────────────────────────────────────── */
function exportCSV() {
  const headers = ['ID','Nama Aset','Jenis','Pemilikan','Lokasi','Negeri','Sumber Dana','Nilai Pasaran','Status'];
  const rows = filteredAssets.map(a =>
    [a.id, `"${a.name}"`, a.type, a.ownershipType, a.location, a.state, a.fundSource, a.marketValue, a.status].join(',')
  );
  const csv = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `aset-ehartanah-${new Date().toISOString().slice(0,10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
}

function exportPDF() {
  showToast('Mengeksport PDF... (simulasi)', 'info');
  setTimeout(() => showToast('PDF berjaya dijana dan dimuat turun.', 'success'), 1500);
}

/* ── Toast helper ─────────────────────────────────────────── */
function showToast(msg, type = 'info') {
  const colours = { info:'bg-blue-600', success:'bg-emerald-600', warning:'bg-amber-500', error:'bg-red-600' };
  const toast = document.createElement('div');
  toast.className = `fixed bottom-6 right-6 z-[100] px-5 py-3 rounded-xl text-white text-sm font-medium shadow-xl ${colours[type]} transition-all duration-300`;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3000);
}
