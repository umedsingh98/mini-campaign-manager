'use client';

import { useState, useEffect } from 'react';
import { Plus, Search, Filter } from 'lucide-react';
import CampaignTable from '@/components/CampaignTable';
import CreateCampaignForm from '@/components/CreateCampaignForm';
import { Campaign, CampaignFormData } from '@/types/campaign';
import { campaignApi } from '@/services/api';

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      setLoading(true);
      const data = await campaignApi.getCampaigns();
      setCampaigns(data);
    } catch (error) {
      console.error('Failed to fetch campaigns:', error);
      // Fallback to mock data if API fails
      setCampaigns([
        {
          id: '1',
          name: 'Summer Sale 2024',
          type: 'Email',
          description: 'Promotional campaign for summer products with special discounts',
          status: 'Active',
          emailsSent: 5420,
          replies: 234,
          meetingsBooked: 12,
          createdAt: '2024-01-15T10:00:00Z',
          updatedAt: '2024-01-20T14:30:00Z',
        },
        {
          id: '2',
          name: 'Product Launch Announcement',
          type: 'WhatsApp',
          description: 'Announcing our new product line to existing customers',
          status: 'Active',
          emailsSent: 3200,
          replies: 156,
          meetingsBooked: 8,
          createdAt: '2024-01-10T09:00:00Z',
          updatedAt: '2024-01-18T16:45:00Z',
        },
        {
          id: '3',
          name: 'Newsletter #15',
          type: 'Email',
          description: 'Monthly newsletter with industry insights and company updates',
          status: 'Completed',
          emailsSent: 8900,
          replies: 445,
          meetingsBooked: 23,
          createdAt: '2024-01-01T08:00:00Z',
          updatedAt: '2024-01-05T12:00:00Z',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCampaign = async (data: CampaignFormData) => {
    try {
      const newCampaign = await campaignApi.createCampaign(data);
      setCampaigns(prev => [newCampaign, ...prev]);
      setShowCreateForm(false);
    } catch (error) {
      console.error('Failed to create campaign:', error);
      // Fallback to local creation
      const newCampaign: Campaign = {
        id: Date.now().toString(),
        ...data,
        status: 'Draft',
        emailsSent: 0,
        replies: 0,
        meetingsBooked: 0,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setCampaigns(prev => [newCampaign, ...prev]);
      setShowCreateForm(false);
    }
  };

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         campaign.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || campaign.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Campaigns</h1>
          <p className="text-gray-600">Manage and track your marketing campaigns</p>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          className="mt-4 cursor-pointer sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Plus size={20} className="mr-2" />
          Create New Campaign
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-gray-600 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Status Filter */}
          <div className="sm:w-48">
            <div className="relative">
              <Filter size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-gray-600 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="Paused">Paused</option>
                <option value="Completed">Completed</option>
                <option value="Draft">Draft</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Campaigns Table */}
      <CampaignTable campaigns={filteredCampaigns} />

      {/* Create Campaign Modal */}
      {showCreateForm && (
        <CreateCampaignForm
          onSubmit={handleCreateCampaign}
          onCancel={() => setShowCreateForm(false)}
        />
      )}
    </div>
  );
}
