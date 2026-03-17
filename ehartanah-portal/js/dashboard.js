/* ============================================================
   e-Hartanah Portal – Dashboard Page Script
   ============================================================ */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  renderMetrics();
  renderRecentTenancy();
  renderRecentMaintenance();
  renderCharts();
});

/* ── Metric Cards ─────────────────────────────────────────── */
function renderMetrics() {
  const assets = window.mockAssets || [];
  const tenancy = window.mockTenancy || [];
  const maintenance = window.mockMaintenance || [];
  const valuations = window.mockValuations || [];

  const totalAssets = assets.length;
  const activeAssets = assets.filter(a => a.status === 'Aktif').length;
  const maintenanceAssets = assets.filter(a => a.status === 'Penyelenggaraan').length;

  // Occupancy: assets with active tenancy / total assets
  const occupiedAssetIds = new Set(tenancy.filter(t => t.status === 'Aktif').map(t => t.assetId));
  const occupancyRate = Math.round((occupiedAssetIds.size / totalAssets) * 100);

  // Monthly rental income (sum of active tenancy)
  const monthlyRental = tenancy.filter(t => t.status === 'Aktif').reduce((s, t) => s + t.rentalRate, 0);

  // Maintenance costs (estimated for in-progress)
  const maintenanceCost = maintenance.filter(m => m.status === 'Dalam Proses').reduce((s, m) => s + m.estimatedCost, 0);

  // Upcoming valuations (due within 12 months)
  const now = new Date();
  const in12Months = new Date(); in12Months.setFullYear(in12Months.getFullYear() + 1);
  const upcomingVal = valuations.filter(v => {
    const due = new Date(v.nextDue);
    return due >= now && due <= in12Months;
  }).length;
  const overdueVal = valuations.filter(v => new Date(v.nextDue) < now).length;

  setMetric('metric-assets', totalAssets, `${activeAssets} aktif · ${maintenanceAssets} penyelenggaraan`);
  setMetric('metric-occupancy', occupancyRate + '%', `${occupiedAssetIds.size} daripada ${totalAssets} aset berpenghuni`);
  setMetric('metric-rental', formatRM(monthlyRental), 'Pendapatan sewa bulanan semasa');
  setMetric('metric-maintenance', formatRM(maintenanceCost), `${maintenance.filter(m=>m.status==='Dalam Proses').length} kerja dalam proses`);
  setMetric('metric-valuation', upcomingVal, `${overdueVal} penilaian tamat tempoh`);
}

function setMetric(id, value, sub) {
  const el = document.getElementById(id);
  if (!el) return;
  el.querySelector('.stat-value').textContent = value;
  if (sub) el.querySelector('.stat-sub').textContent = sub;
}

/* ── Recent Tenancy ───────────────────────────────────────── */
function renderRecentTenancy() {
  const tbody = document.getElementById('recent-tenancy-body');
  if (!tbody) return;
  const items = (window.mockTenancy || []).slice(0, 6);
  tbody.innerHTML = items.map(t => {
    const days = window.daysUntil ? daysUntil(t.leaseExpiry) : 0;
    let statusBadge;
    if (t.status === 'Aktif') statusBadge = '<span class="badge badge-green">Aktif</span>';
    else if (t.status === 'Hampir Tamat') statusBadge = '<span class="badge badge-yellow">Hampir Tamat</span>';
    else if (t.status === 'Tamat Tempoh') statusBadge = '<span class="badge badge-red">Tamat Tempoh</span>';
    else statusBadge = `<span class="badge badge-gray">${t.status}</span>`;

    return `<tr>
      <td class="font-medium text-slate-800">${t.tenantName}</td>
      <td class="text-slate-500 text-xs">${t.assetName}</td>
      <td class="font-semibold text-slate-700">${formatRM(t.rentalRate)}</td>
      <td class="text-slate-500">${window.formatDate ? formatDate(t.leaseExpiry) : t.leaseExpiry}</td>
      <td>${statusBadge}</td>
    </tr>`;
  }).join('');
}

/* ── Recent Maintenance ───────────────────────────────────── */
function renderRecentMaintenance() {
  const tbody = document.getElementById('recent-mnt-body');
  if (!tbody) return;
  const items = (window.mockMaintenance || []).slice(0, 5);
  const priorityClass = { Kritikal:'badge-red', Tinggi:'badge-orange', Sederhana:'badge-yellow', Rendah:'badge-gray' };
  const statusClass = { 'Selesai':'badge-green', 'Dalam Proses':'badge-blue', 'Belum Mula':'badge-gray' };
  tbody.innerHTML = items.map(m => `<tr>
    <td class="font-mono text-xs text-slate-500">${m.id}</td>
    <td class="font-medium text-slate-800 text-xs">${m.assetName}</td>
    <td class="text-xs"><span class="badge ${priorityClass[m.priority]||'badge-gray'}">${m.priority}</span></td>
    <td class="text-xs"><span class="badge ${statusClass[m.status]||'badge-gray'}">${m.status}</span></td>
    <td class="text-slate-500 text-xs">${window.formatDate ? formatDate(m.scheduledDate) : m.scheduledDate}</td>
  </tr>`).join('');
}

/* ── Charts ───────────────────────────────────────────────── */
function renderCharts() {
  renderAssetTypeChart();
  renderRentalTrendChart();
  renderOccupancyChart();
  renderMaintenanceCostChart();
}

function renderAssetTypeChart() {
  const ctx = document.getElementById('chart-asset-type');
  if (!ctx) return;
  const assets = window.mockAssets || [];
  const counts = {};
  assets.forEach(a => { counts[a.type] = (counts[a.type] || 0) + 1; });
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(counts),
      datasets: [{
        label: 'Bilangan Aset',
        data: Object.values(counts),
        backgroundColor: ['#1d4ed8','#3b82f6','#60a5fa','#93c5fd','#bfdbfe','#dbeafe'],
        borderRadius: 6,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { beginAtZero: true, ticks: { stepSize: 1 }, grid: { color: '#f1f5f9' } },
        x: { grid: { display: false } }
      }
    }
  });
}

function renderRentalTrendChart() {
  const ctx = document.getElementById('chart-rental-trend');
  if (!ctx) return;
  const trend = window.mockRentalTrend || { labels: [], data: [] };
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: trend.labels,
      datasets: [{
        label: 'Pendapatan Sewa (RM)',
        data: trend.data,
        borderColor: '#16a34a',
        backgroundColor: 'rgba(22,163,74,.08)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#16a34a',
        pointRadius: 4,
        pointHoverRadius: 6,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          beginAtZero: false,
          grid: { color: '#f1f5f9' },
          ticks: { callback: v => 'RM ' + (v/1000).toFixed(0) + 'k' }
        },
        x: { grid: { display: false } }
      }
    }
  });
}

function renderOccupancyChart() {
  const ctx = document.getElementById('chart-occupancy');
  if (!ctx) return;
  const assets = window.mockAssets || [];
  const tenancy = window.mockTenancy || [];
  const occupied = new Set(tenancy.filter(t => t.status === 'Aktif').map(t => t.assetId)).size;
  const maintenance = assets.filter(a => a.status === 'Penyelenggaraan').length;
  const vacant = assets.length - occupied - maintenance;
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Berpenghuni', 'Penyelenggaraan', 'Kosong'],
      datasets: [{
        data: [occupied, maintenance, Math.max(vacant, 0)],
        backgroundColor: ['#16a34a', '#f59e0b', '#e2e8f0'],
        borderWidth: 0,
        hoverOffset: 4,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      cutout: '68%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: { usePointStyle: true, pointStyleWidth: 8, padding: 16, font: { size: 11 } }
        }
      }
    }
  });
}

function renderMaintenanceCostChart() {
  const ctx = document.getElementById('chart-mnt-cost');
  if (!ctx) return;
  const trend = window.mockMaintenanceTrend || { labels: [], data: [] };
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: trend.labels,
      datasets: [{
        label: 'Kos Penyelenggaraan (RM)',
        data: trend.data,
        backgroundColor: 'rgba(239,68,68,.75)',
        borderRadius: 5,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: {
          beginAtZero: true,
          grid: { color: '#f1f5f9' },
          ticks: { callback: v => 'RM ' + (v/1000).toFixed(0) + 'k' }
        },
        x: { grid: { display: false } }
      }
    }
  });
}
