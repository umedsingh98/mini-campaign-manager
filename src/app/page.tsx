'use client';

import { Mail, MessageSquare, Users, Calendar } from 'lucide-react';
import StatsCard from '@/components/StatsCard';
import Chart from '@/components/Chart';

// Mock data for dashboard
const dashboardStats = {
  activeCampaigns: 12,
  emailsSent: 15420,
  replies: 892,
  meetingsBooked: 45,
};

const chartData = [
  { name: 'Jan', emails: 1200, replies: 45 },
  { name: 'Feb', emails: 1900, replies: 67 },
  { name: 'Mar', emails: 3000, replies: 89 },
  { name: 'Apr', emails: 2800, replies: 78 },
  { name: 'May', emails: 1890, replies: 56 },
  { name: 'Jun', emails: 2390, replies: 72 },
];

const performanceData = [
  { name: 'Email Campaigns', value: 75 },
  { name: 'WhatsApp Campaigns', value: 25 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your campaigns.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Active Campaigns"
          value={dashboardStats.activeCampaigns}
          icon={<Mail size={24} />}
          change="+2 this week"
          changeType="positive"
          color="blue"
        />
        <StatsCard
          title="Emails Sent"
          value={dashboardStats.emailsSent.toLocaleString()}
          icon={<MessageSquare size={24} />}
          change="+12% from last month"
          changeType="positive"
          color="green"
        />
        <StatsCard
          title="Replies"
          value={dashboardStats.replies.toLocaleString()}
          icon={<Users size={24} />}
          change="+8% from last month"
          changeType="positive"
          color="purple"
        />
        <StatsCard
          title="Meetings Booked"
          value={dashboardStats.meetingsBooked}
          icon={<Calendar size={24} />}
          change="+3 this week"
          changeType="positive"
          color="orange"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart
          title="Email Performance Over Time"
          data={chartData.map(item => ({ name: item.name, value: item.emails }))}
          type="line"
          dataKey="value"
        />
        <Chart
          title="Campaign Distribution"
          data={performanceData}
          type="bar"
          dataKey="value"
        />
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">New campaign "Summer Sale" was created</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">"Product Launch" campaign sent to 1,200 contacts</p>
              <p className="text-xs text-gray-500">4 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">"Newsletter #15" received 45 replies</p>
              <p className="text-xs text-gray-500">6 hours ago</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <div className="flex-1">
              <p className="text-sm text-gray-900">Meeting booked with xyz</p>
              <p className="text-xs text-gray-500">8 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
