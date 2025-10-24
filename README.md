# Mini Campaign Manager

A comprehensive campaign management platform built with Next.js, TypeScript, and TailwindCSS. This application allows users to create, manage, and track marketing campaigns with a modern, responsive interface.

## Features

### 🎯 Core Features
- **Dashboard**: Overview of campaign statistics with interactive charts
- **Campaign Management**: Create, view, edit, and delete campaigns
- **Analytics**: Detailed performance tracking and insights
- **Settings**: User preferences and account management
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

### 🚀 Technical Features
- **Next.js 16** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **React Hook Form** with Zod validation
- **Recharts** for data visualization
- **Framer Motion** for animations
- **Lucide React** for icons
- **Axios** for API communication

### 📊 Campaign Features
- Support for Email and WhatsApp campaigns
- Campaign status tracking (Active, Paused, Completed, Draft)
- Performance metrics (emails sent, replies, meetings booked)
- Search and filter functionality
- Real-time campaign statistics

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── campaigns/         # Campaign pages
│   ├── analytics/         # Analytics page
│   ├── settings/          # Settings page
│   ├── landing/           # Landing page
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── Sidebar.tsx
│   ├── StatsCard.tsx
│   ├── Chart.tsx
│   ├── CampaignTable.tsx
│   └── CreateCampaignForm.tsx
├── services/              # API service layer
│   └── api.ts
├── types/                 # TypeScript type definitions
│   └── campaign.ts
└── globals.css           # Global styles
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mini-campaign-manager
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## API Endpoints

The application includes a RESTful API for campaign management:

- `GET /api/campaigns` - Get all campaigns
- `POST /api/campaigns` - Create a new campaign
- `GET /api/campaigns/[id]` - Get campaign by ID
- `PUT /api/campaigns/[id]` - Update campaign
- `DELETE /api/campaigns/[id]` - Delete campaign

## Usage

### Dashboard
- View campaign statistics and performance metrics
- Interactive charts showing email performance over time
- Recent activity feed

### Campaigns
- Browse all campaigns in a table format
- Search and filter campaigns by status
- Create new campaigns with form validation
- View detailed campaign information

### Analytics
- Comprehensive performance analytics
- Campaign distribution charts
- Top performing campaigns
- Conversion rate tracking

### Settings
- User profile management
- Notification preferences
- Theme and language settings
- Security options

## Technologies Used

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: TailwindCSS
- **Forms**: React Hook Form, Zod validation
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **HTTP Client**: Axios

## Development

### Code Structure
- Components are organized by functionality
- TypeScript interfaces ensure type safety
- API service layer abstracts data fetching
- Responsive design with mobile-first approach

### Form Validation
- Zod schemas for runtime validation
- React Hook Form for form state management
- Real-time validation feedback
- Error handling and user feedback

### State Management
- React hooks for local state
- API integration with error handling
- Optimistic updates for better UX

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Screenshots

### Dashboard
- Clean, modern interface with statistics cards
- Interactive charts showing performance metrics
- Recent activity feed

### Campaign Management
- Comprehensive campaign table with search and filters
- Modal-based campaign creation with validation
- Detailed campaign view with performance metrics

### Analytics
- Performance tracking with visual charts
- Top performing campaigns analysis
- Conversion rate monitoring

## Future Enhancements

- User authentication and authorization
- Real-time notifications
- Advanced analytics and reporting
- Email template editor
- Integration with external services
- Mobile app development

## Support

For support or questions, please open an issue in the GitHub repository.
