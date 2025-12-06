import { NotificationProvider } from './context/NotificationContext';
import { NotificationCenter } from './components/NotificationCenter';
import { NotificationBell } from './components/NotificationBell';
import { NotificationSimulator } from './components/NotificationSimulator';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';

function App() {
  return (
    <NotificationProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-lg shadow-xl border-b border-purple-100 sticky top-0 z-50">
          <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Analytics Dashboard
                  </h1>
                  <p className="text-base text-gray-600 mt-1 font-medium">Real-time insights and notifications</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <NotificationSimulator />
                <NotificationBell />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Analytics Dashboard - Takes 2 columns */}
            <div className="lg:col-span-2">
              <AnalyticsDashboard />
            </div>

            {/* Notification Center - Takes 1 column */}
            <div className="lg:col-span-1">
              <NotificationCenter />
            </div>
          </div>
        </main>
      </div>
    </NotificationProvider>
  );
}

export default App
