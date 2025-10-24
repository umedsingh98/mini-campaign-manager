import axios from 'axios';
import { Campaign, CampaignFormData } from '@/types/campaign';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

export interface ApiError {
  success: false;
  message: string;
  error?: string;
}

// Campaign API functions
export const campaignApi = {
  // Get all campaigns
  getCampaigns: async (): Promise<Campaign[]> => {
    try {
      const response = await api.get<ApiResponse<Campaign[]>>('/api/campaigns');
      return response.data.data;
    } catch (error) {
      console.error('Failed to fetch campaigns:', error);
      throw new Error('Failed to fetch campaigns');
    }
  },

  // Create a new campaign
  createCampaign: async (campaignData: CampaignFormData): Promise<Campaign> => {
    try {
      const response = await api.post<ApiResponse<Campaign>>('/api/campaigns', campaignData);
      return response.data.data;
    } catch (error) {
      console.error('Failed to create campaign:', error);
      throw new Error('Failed to create campaign');
    }
  },

  // Get campaign by ID
  getCampaignById: async (id: string): Promise<Campaign> => {
    try {
      const response = await api.get<ApiResponse<Campaign>>(`/api/campaigns/${id}`);
      return response.data.data;
    } catch (error) {
      console.error('Failed to fetch campaign:', error);
      throw new Error('Failed to fetch campaign');
    }
  },

  // Update campaign
  updateCampaign: async (id: string, campaignData: Partial<CampaignFormData>): Promise<Campaign> => {
    try {
      const response = await api.put<ApiResponse<Campaign>>(`/api/campaigns/${id}`, campaignData);
      return response.data.data;
    } catch (error) {
      console.error('Failed to update campaign:', error);
      throw new Error('Failed to update campaign');
    }
  },

  // Delete campaign
  deleteCampaign: async (id: string): Promise<void> => {
    try {
      await api.delete(`/api/campaigns/${id}`);
    } catch (error) {
      console.error('Failed to delete campaign:', error);
      throw new Error('Failed to delete campaign');
    }
  },
};

export default api;
