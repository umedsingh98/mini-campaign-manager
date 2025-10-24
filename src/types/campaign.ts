export interface Campaign {
  id: string;
  name: string;
  type: 'Email' | 'WhatsApp';
  description: string;
  status: 'Active' | 'Paused' | 'Completed' | 'Draft';
  emailsSent: number;
  replies: number;
  meetingsBooked: number;
  createdAt: string;
  updatedAt: string;
}

export interface CampaignFormData {
  name: string;
  type: 'Email' | 'WhatsApp';
  description: string;
}

export interface DashboardStats {
  activeCampaigns: number;
  emailsSent: number;
  replies: number;
  meetingsBooked: number;
}

export interface ChartData {
  name: string;
  value: number;
  date?: string;
}
