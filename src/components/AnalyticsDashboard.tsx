import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card } from './Card';

const lineData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
  { name: 'Jul', value: 7000 },
  { name: 'Aug', value: 6500 },
  { name: 'Sep', value: 8000 },
  { name: 'Oct', value: 7500 },
  { name: 'Nov', value: 9000 },
  { name: 'Dec', value: 8500 },
];

const barData = [
  { category: 'Desktop', users: 4200, sessions: 5100 },
  { category: 'Mobile', users: 3800, sessions: 4800 },
  { category: 'Tablet', users: 1200, sessions: 1400 },
  { category: 'Other', users: 800, sessions: 900 },
];

export const AnalyticsDashboard = () => {
  return (
    <div className="space-y-8">
      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-2xl hover:scale-105 transition-transform duration-300 border-0">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <span className="text-xs font-bold bg-white/30 px-3 py-1 rounded-full">↑ 12%</span>
          </div>
          <div className="text-sm font-semibold opacity-90 mb-2">Total Users</div>
          <div className="text-5xl font-extrabold mb-2">12,345</div>
          <div className="text-sm opacity-80">from last month</div>
        </Card>
        
        <Card className="bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 text-white shadow-2xl hover:scale-105 transition-transform duration-300 border-0">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xs font-bold bg-white/30 px-3 py-1 rounded-full">↑ 8%</span>
          </div>
          <div className="text-sm font-semibold opacity-90 mb-2">Active Sessions</div>
          <div className="text-5xl font-extrabold mb-2">8,932</div>
          <div className="text-sm opacity-80">from last month</div>
        </Card>
        
        <Card className="bg-gradient-to-br from-violet-500 via-purple-600 to-fuchsia-600 text-white shadow-2xl hover:scale-105 transition-transform duration-300 border-0">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xs font-bold bg-white/30 px-3 py-1 rounded-full">↑ 15%</span>
          </div>
          <div className="text-sm font-semibold opacity-90 mb-2">Revenue</div>
          <div className="text-5xl font-extrabold mb-2">$45.2K</div>
          <div className="text-sm opacity-80">from last month</div>
        </Card>
        
        <Card className="bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 text-white shadow-2xl hover:scale-105 transition-transform duration-300 border-0">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span className="text-xs font-bold bg-white/30 px-3 py-1 rounded-full">↑ 0.5%</span>
          </div>
          <div className="text-sm font-semibold opacity-90 mb-2">Conversion</div>
          <div className="text-5xl font-extrabold mb-2">3.2%</div>
          <div className="text-sm opacity-80">from last month</div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card title="Monthly Revenue Trend" className="h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" opacity={0.5} />
              <XAxis 
                dataKey="name" 
                stroke="#6366f1" 
                fontSize={14}
                fontWeight={600}
                tick={{ fill: '#64748b' }}
              />
              <YAxis 
                stroke="#6366f1" 
                fontSize={14}
                fontWeight={600}
                tick={{ fill: '#64748b' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '2px solid #e0e7ff',
                  borderRadius: '12px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                }}
                labelStyle={{ color: '#6366f1', fontWeight: 'bold' }}
              />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
                iconType="line"
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#6366f1"
                strokeWidth={4}
                dot={{ fill: '#6366f1', r: 6, strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 8, strokeWidth: 3 }}
                name="Revenue ($)"
                fill="url(#colorRevenue)"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <Card title="Users by Device Category" className="h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" opacity={0.5} />
              <XAxis 
                dataKey="category" 
                stroke="#6366f1" 
                fontSize={14}
                fontWeight={600}
                tick={{ fill: '#64748b' }}
              />
              <YAxis 
                stroke="#6366f1" 
                fontSize={14}
                fontWeight={600}
                tick={{ fill: '#64748b' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  border: '2px solid #e0e7ff',
                  borderRadius: '12px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                }}
                labelStyle={{ color: '#6366f1', fontWeight: 'bold' }}
              />
              <Legend 
                wrapperStyle={{ paddingTop: '20px' }}
              />
              <Bar 
                dataKey="users" 
                fill="url(#colorUsers)" 
                name="Users" 
                radius={[12, 12, 0, 0]}
              >
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={1}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                  </linearGradient>
                </defs>
              </Bar>
              <Bar 
                dataKey="sessions" 
                fill="url(#colorSessions)" 
                name="Sessions" 
                radius={[12, 12, 0, 0]}
              >
                <defs>
                  <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={1}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.8}/>
                  </linearGradient>
                </defs>
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
};

