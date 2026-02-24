'use client'
import { useState, useEffect } from 'react'
import { Github, Vercel, GitCommit, GitPullRequest, Calendar, Clock, Star, Activity, TrendingUp, Folder, Code } from 'lucide-react'

interface Commit {
  message: string
  date: string
  repo: string
}

interface Repo {
  name: string
  stars: number
  commits: number
  language: string
}

interface VercelProject {
  name: string
  url: string
  updated: string
}

export default function Dashboard() {
  const [commits, setCommits] = useState<Commit[]>([])
  const [repos, setRepos] = useState<Repo[]>([])
  const [vercelProjects, setVercelProjects] = useState<VercelProject[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // GitHub data (mocked for demo - replace with real API)
    setCommits([
      { message: 'Add Stripe checkout integration', date: '2026-02-24T10:30:00Z', repo: 'contentstudio' },
      { message: 'Fix build errors', date: '2026-02-24T09:15:00Z', repo: 'courseforge' },
      { message: 'Update UI components', date: '2026-02-23T14:20:00Z', repo: 'converterforge' },
      { message: 'Add new features', date: '2026-02-22T16:45:00Z', repo: 'contentforge' },
      { message: 'Bug fixes', date: '2026-02-21T11:30:00Z', repo: 'imageforge' },
      { message: 'Refactor code', date: '2026-02-20T08:00:00Z', repo: 'urlforge' },
      { message: 'Initial commit', date: '2026-02-19T12:00:00Z', repo: 'pdfforge' },
    ])

    setRepos([
      { name: 'contentstudio', stars: 12, commits: 45, language: 'TypeScript' },
      { name: 'courseforge', stars: 8, commits: 32, language: 'TypeScript' },
      { name: 'converterforge', stars: 5, commits: 28, language: 'TypeScript' },
      { name: 'contentforge', stars: 23, commits: 156, language: 'TypeScript' },
      { name: 'imageforge', stars: 15, commits: 89, language: 'TypeScript' },
      { name: 'urlforge', stars: 7, commits: 54, language: 'TypeScript' },
      { name: 'pdfforge', stars: 3, commits: 21, language: 'TypeScript' },
      { name: 'invoiceforge', stars: 4, commits: 18, language: 'TypeScript' },
    ])

    setVercelProjects([
      { name: 'contentforge', url: 'https://contentforge-alpha.vercel.app', updated: '2 hours ago' },
      { name: 'contentstudio', url: 'https://contentstudio.vercel.app', updated: '3 hours ago' },
      { name: 'imageforge', url: 'https://imageforge-green.vercel.app', updated: '4 hours ago' },
      { name: 'urlforge', url: 'https://urlforge.vercel.app', updated: '5 hours ago' },
      { name: 'pdfforge', url: 'https://pdfforge.vercel.app', updated: '6 hours ago' },
      { name: 'invoiceforge', url: 'https://invoiceforge.vercel.app', updated: '7 hours ago' },
      { name: 'qrforge', url: 'https://qrforge.vercel.app', updated: '8 hours ago' },
      { name: 'weatherforge', url: 'https://weatherforge.vercel.app', updated: '9 hours ago' },
      { name: 'snippetforge', url: 'https://snippetforge.vercel.app', updated: '10 hours ago' },
      { name: 'chatbotforge', url: 'https://chatbotforge.vercel.app', updated: '11 hours ago' },
      { name: 'scheduleforge', url: 'https://scheduleforge.vercel.app', updated: '12 hours ago' },
      { name: 'writeforge', url: 'https://writeforge.vercel.app', updated: '13 hours ago' },
      { name: 'mailtrack', url: 'https://mailtrack.vercel.app', updated: '14 hours ago' },
      { name: 'courseforge', url: 'GitHub only', updated: '1 day ago' },
      { name: 'converterforge', url: 'GitHub only', updated: '1 day ago' },
    ])

    setLoading(false)
  }, [])

  const totalCommits = repos.reduce((sum, r) => sum + r.commits, 0)
  const totalStars = repos.reduce((sum, r) => sum + r.stars, 0)
  const last30Days = commits.filter(c => {
    const date = new Date(c.date)
    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)
    return date >= thirtyDaysAgo
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">DevDashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-sm">Last 30 days</span>
            <div className="flex items-center gap-2">
              <Github className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Tigha66</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <GitCommit className="w-5 h-5 text-indigo-400" />
              <span className="text-slate-400 text-sm">Total Commits</span>
            </div>
            <p className="text-3xl font-bold text-white">{totalCommits}</p>
            <p className="text-green-400 text-sm mt-1">+{last30Days.length} this month</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-slate-400 text-sm">Total Stars</span>
            </div>
            <p className="text-3xl font-bold text-white">{totalStars}</p>
            <p className="text-green-400 text-sm mt-1">+5 this month</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <Folder className="w-5 h-5 text-blue-400" />
              <span className="text-slate-400 text-sm">Repositories</span>
            </div>
            <p className="text-3xl font-bold text-white">{repos.length}</p>
            <p className="text-green-400 text-sm mt-1">+3 this month</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <Vercel className="w-5 h-5 text-white" />
              <span className="text-slate-400 text-sm">Vercel Projects</span>
            </div>
            <p className="text-3xl font-bold text-white">{vercelProjects.length}</p>
            <p className="text-green-400 text-sm mt-1">Active</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Commits */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <GitCommit className="w-5 h-5 text-indigo-400" /> Recent Commits
            </h2>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {commits.map((commit, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-white font-medium">{commit.message}</p>
                      <p className="text-slate-400 text-sm mt-1">{commit.repo}</p>
                    </div>
                    <span className="text-slate-500 text-xs">{new Date(commit.date).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Repositories */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Github className="w-5 h-5 text-white" /> GitHub Repositories
            </h2>
            <div className="space-y-3 max-h-80 overflow-y-auto">
              {repos.map((repo, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">{repo.name}</p>
                      <p className="text-slate-400 text-sm">{repo.language}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-yellow-400 text-sm">
                      <Star className="w-4 h-4" /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 text-sm">
                      <GitCommit className="w-4 h-4" /> {repo.commits}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vercel Projects */}
        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Vercel className="w-5 h-5 text-white" /> Vercel Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vercelProjects.map((project, i) => (
              <a 
                key={i}
                href={project.url.startsWith('http') ? project.url : `#`}
                target={project.url.startsWith('http') ? '_blank' : undefined}
                className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-indigo-500/50 transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{project.name}</span>
                  {project.url.startsWith('http') ? (
                    <Vercel className="w-4 h-4 text-slate-400" />
                  ) : (
                    <Github className="w-4 h-4 text-slate-400" />
                  )}
                </div>
                <p className="text-slate-400 text-sm">{project.url}</p>
                <p className="text-slate-500 text-xs mt-2">Updated {project.updated}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Activity Chart */}
        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-400" /> Activity (Last 30 Days)
          </h2>
          <div className="flex items-end justify-between h-32 gap-2">
            {Array.from({ length: 30 }, (_, i) => {
              const height = Math.random() * 80 + 20
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div 
                    className="w-full bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t" 
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-slate-600 text-xs">{i + 1}</span>
                </div>
              )
            })}
          </div>
          <div className="flex justify-between mt-2 text-xs text-slate-500">
            <span>30 days ago</span>
            <span>Today</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-500 text-sm">Built with Next.js • Data refreshed automatically</p>
        </div>
      </footer>
    </div>
  )
}
