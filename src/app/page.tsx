'use client';

import { useState } from 'react';

// Mock data representing last 30 days of activity
const stats = {
  totalEmailsSent: 150,
  leadsGenerated: 25,
  websitesBuilt: 45,
  revenue: 12500,
  conversionRate: 12,
};

const websites = [
  { name: 'Digital Employee', url: 'https://autoaiwebsolutions.com', status: 'Live', type: 'Service' },
  { name: 'ContentForge', url: 'https://contentforge-alpha.vercel.app', status: 'Live', type: 'Web App' },
  { name: 'ImageForge', url: 'https://imageforge-green.vercel.app', status: 'Live', type: 'Web App' },
  { name: 'ContentStudio', url: 'https://contentstudio.vercel.app', status: 'Live', type: 'Web App' },
  { name: 'LegalForge', url: 'https://legalforge-lemon.vercel.app', status: 'Live', type: 'Web App' },
  { name: 'EduForge', url: 'https://eduforge-rust.vercel.app', status: 'Live', type: 'Web App' },
  { name: 'RealEstateForge', url: 'https://realestateforge.vercel.app', status: 'Live', type: 'Web App' },
  { name: 'OnboardForge', url: 'https://onboardforge.vercel.app', status: 'Live', type: 'Web App' },
];

const emailsSent = [
  { category: 'Estate Agents', count: 28, sent: 28 },
  { category: 'Hotels', count: 22, sent: 22 },
  { category: 'Dentists', count: 14, sent: 14 },
  { category: 'Accountants', count: 16, sent: 16 },
  { category: 'Solicitors', count: 16, sent: 16 },
  { category: 'Marketing', count: 14, sent: 14 },
  { category: 'Property Dev', count: 14, sent: 14 },
  { category: 'Recruitment', count: 14, sent: 14 },
  { category: 'Trades', count: 12, sent: 12 },
];

const leads = [
  { name: 'Tigher', business: 'Castles Estate Agents', email: 'tigher@mailnesia.com', status: 'New', date: 'Feb 25' },
  { name: 'Sarah Mitchell', business: 'London Estate Agent', email: 'sarah@email.com', status: 'Follow-up', date: 'Feb 24' },
  { name: 'James Robertson', business: 'Boutique Hotel', email: 'james@hotel.com', status: 'Qualified', date: 'Feb 23' },
];

const activities = [
  { action: 'Email sent to 28 Estate Agents', time: '2 hours ago' },
  { action: 'New lead: Castles Estate Agents', time: '5 hours ago' },
  { action: 'Website deployed to Netlify', time: '6 hours ago' },
  { action: 'Email sent to 22 Hotels', time: '7 hours ago' },
  { action: 'Digital Employee site updated', time: 'Yesterday' },
  { action: '75+ emails sent in total', time: 'Yesterday' },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-xl">🤖</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">AI Web Solutions</h1>
              <p className="text-xs text-white/50">Digital Employee Dashboard</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-white/60">Last 30 days</span>
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Emails Sent */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <span className="text-green-400 text-sm font-medium">+150</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stats.totalEmailsSent}</h3>
            <p className="text-white/60 text-sm">Emails Sent</p>
          </div>

          {/* Leads */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <span className="text-green-400 text-sm font-medium">+25</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stats.leadsGenerated}</h3>
            <p className="text-white/60 text-sm">Leads Generated</p>
          </div>

          {/* Websites */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                <span className="text-2xl">🌐</span>
              </div>
              <span className="text-green-400 text-sm font-medium">+45</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stats.websitesBuilt}</h3>
            <p className="text-white/60 text-sm">Websites Built</p>
          </div>

          {/* Revenue */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <span className="text-green-400 text-sm font-medium">+12%</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">£{stats.revenue.toLocaleString()}</h3>
            <p className="text-white/60 text-sm">Projected Revenue</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Email Stats */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>📧</span> Email Campaigns
            </h2>
            <div className="space-y-4">
              {emailsSent.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center text-sm font-bold text-white">
                      {item.category[0]}
                    </div>
                    <div>
                      <p className="text-white font-medium">{item.category}</p>
                      <p className="text-white/40 text-sm">{item.count} businesses contacted</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-bold">{item.sent}</p>
                    <p className="text-white/40 text-xs">sent</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>⚡</span> Recent Activity
            </h2>
            <div className="space-y-4">
              {activities.map((activity, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                  <div>
                    <p className="text-white text-sm">{activity.action}</p>
                    <p className="text-white/40 text-xs">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Websites & Leads Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Live Websites */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>🚀</span> Live Websites
            </h2>
            <div className="space-y-3">
              {websites.map((site, i) => (
                <a 
                  key={i} 
                  href={site.url}
                  target="_blank"
                  className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${site.status === 'Live' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                    <div>
                      <p className="text-white font-medium group-hover:text-purple-400 transition-colors">{site.name}</p>
                      <p className="text-white/40 text-xs">{site.type}</p>
                    </div>
                  </div>
                  <span className="text-white/40 text-xs group-hover:text-white transition-colors">Visit →</span>
                </a>
              ))}
            </div>
          </div>

          {/* Leads */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <span>🎯</span> Recent Leads
            </h2>
            <div className="space-y-3">
              {leads.map((lead, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                      {lead.name[0]}
                    </div>
                    <div>
                      <p className="text-white font-medium">{lead.name}</p>
                      <p className="text-white/40 text-xs">{lead.business}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      lead.status === 'New' ? 'bg-green-500/20 text-green-400' :
                      lead.status === 'Qualified' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {lead.status}
                    </span>
                    <p className="text-white/40 text-xs mt-1">{lead.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">🚀 30-Day Achievement</h3>
            <p className="text-4xl font-bold mb-2">150+</p>
            <p className="text-white/80">Emails sent to prospects</p>
          </div>
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">🌐 Projects Built</h3>
            <p className="text-4xl font-bold mb-2">45+</p>
            <p className="text-white/80">Websites & web applications</p>
          </div>
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 text-white">
            <h3 className="text-lg font-semibold mb-2">💼 Active Leads</h3>
            <p className="text-4xl font-bold mb-2">3</p>
            <p className="text-white/80">Hot prospects in pipeline</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-white/40 text-sm">
          <p>Dashboard updated in real-time • Last sync: Just now</p>
        </div>
      </main>
    </div>
  );
}
