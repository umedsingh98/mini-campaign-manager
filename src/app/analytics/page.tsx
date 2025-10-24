'use client';

import { BarChart3, TrendingUp, Users, Mail } from 'lucide-react';
import Chart from '@/components/Chart';
import StatsCard from '@/components/StatsCard';

const analyticsData = {
  totalCampaigns: 25,
  totalEmails: 125000,
  totalReplies: 8500,
  conversionRate: 6.8,
};

const performanceData = [
  { name: 'Jan', emails: 12000, replies: 800 },
  { name: 'Feb', emails: 15000, replies: 950 },
  { name: 'Mar', emails: 18000, replies: 1100 },
  { name: 'Apr', emails: 16000, replies: 980 },
  { name: 'May', emails: 20000, replies: 1250 },
  { name: 'Jun', emails: 22000, replies: 1400 },
];

const campaignPerformance = [
  { name: 'Email Campaigns', value: 75 },
  { name: 'WhatsApp Campaigns', value: 25 },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-600">Track your campaign performance and insights</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Campaigns"
          value={analyticsData.totalCampaigns}
          icon={<BarChart3 size={24} />}
          change="+3 this month"
          changeType="positive"
          color="blue"
        />
        <StatsCard
          title="Total Emails"
          value={analyticsData.totalEmails.toLocaleString()}
          icon={<Mail size={24} />}
          change="+15% from last month"
          changeType="positive"
          color="green"
        />
        <StatsCard
          title="Total Replies"
          value={analyticsData.totalReplies.toLocaleString()}
          icon={<Users size={24} />}
          change="+12% from last month"
          changeType="positive"
          color="purple"
        />
        <StatsCard
          title="Conversion Rate"
          value={`${analyticsData.conversionRate}%`}
          icon={<TrendingUp size={24} />}
          change="+2.1% from last month"
          changeType="positive"
          color="orange"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Chart
          title="Email Performance Over Time"
          data={performanceData.map(item => ({ name: item.name, value: item.emails }))}
          type="line"
          dataKey="value"
        />
        <Chart
          title="Campaign Distribution"
          data={campaignPerformance}
          type="bar"
          dataKey="value"
        />
      </div>

      {/* Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Campaigns</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Summer Sale 2024</p>
                <p className="text-sm text-gray-500">Email Campaign</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">12.5%</p>
                <p className="text-sm text-gray-500">Response Rate</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Product Launch</p>
                <p className="text-sm text-gray-500">WhatsApp Campaign</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">8.9%</p>
                <p className="text-sm text-gray-500">Response Rate</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-900">Newsletter #15</p>
                <p className="text-sm text-gray-500">Email Campaign</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-green-600">6.2%</p>
                <p className="text-sm text-gray-500">Response Rate</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">"Summer Sale" campaign completed</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">New campaign "Holiday Special" created</p>
                <p className="text-xs text-gray-500">4 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">Analytics report generated</p>
                <p className="text-xs text-gray-500">6 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
