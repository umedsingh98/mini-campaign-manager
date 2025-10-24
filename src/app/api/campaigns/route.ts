import { NextRequest, NextResponse } from 'next/server';
import { Campaign, CampaignFormData } from '@/types/campaign';

// Mock data store (in a real app, this would be a database)
let campaigns: Campaign[] = [
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
];

// GET /api/campaigns
export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: campaigns,
      message: 'Campaigns retrieved successfully'
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to retrieve campaigns',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// POST /api/campaigns
export async function POST(request: NextRequest) {
  try {
    const body: CampaignFormData = await request.json();
    
    // Validate required fields
    if (!body.name || !body.type || !body.description) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields: name, type, description'
        },
        { status: 400 }
      );
    }

    // Create new campaign
    const newCampaign: Campaign = {
      id: Date.now().toString(),
      name: body.name,
      type: body.type,
      description: body.description,
      status: 'Draft',
      emailsSent: 0,
      replies: 0,
      meetingsBooked: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    campaigns.push(newCampaign);

    return NextResponse.json({
      success: true,
      data: newCampaign,
      message: 'Campaign created successfully'
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to create campaign',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
