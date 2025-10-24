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

// GET /api/campaigns/[id]
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const campaign = campaigns.find(c => c.id === id);

    if (!campaign) {
      return NextResponse.json(
        {
          success: false,
          message: 'Campaign not found'
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: campaign,
      message: 'Campaign retrieved successfully'
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to retrieve campaign',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// PUT /api/campaigns/[id]
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body: Partial<CampaignFormData> = await request.json();

    const campaignIndex = campaigns.findIndex(c => c.id === id);

    if (campaignIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          message: 'Campaign not found'
        },
        { status: 404 }
      );
    }

    // Update campaign
    campaigns[campaignIndex] = {
      ...campaigns[campaignIndex],
      ...body,
      updatedAt: new Date().toISOString(),
    };

    return NextResponse.json({
      success: true,
      data: campaigns[campaignIndex],
      message: 'Campaign updated successfully'
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to update campaign',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// DELETE /api/campaigns/[id]
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const campaignIndex = campaigns.findIndex(c => c.id === id);

    if (campaignIndex === -1) {
      return NextResponse.json(
        {
          success: false,
          message: 'Campaign not found'
        },
        { status: 404 }
      );
    }

    campaigns.splice(campaignIndex, 1);

    return NextResponse.json({
      success: true,
      message: 'Campaign deleted successfully'
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to delete campaign',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
