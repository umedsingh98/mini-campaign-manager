'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CampaignFormData } from '@/types/campaign';
import { Mail, MessageSquare, X, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const campaignSchema = z.object({
  name: z.string().min(1, 'Campaign name is required').min(3, 'Campaign name must be at least 3 characters'),
  type: z.enum(['Email', 'WhatsApp'], {
    message: 'Please select a campaign type',
  }),
  description: z.string().min(1, 'Description is required').min(10, 'Description must be at least 10 characters'),
});

interface CreateCampaignFormProps {
  onSubmit: (data: CampaignFormData) => void;
  onCancel: () => void;
  isLoading?: boolean;
}

export default function CreateCampaignForm({ onSubmit, onCancel, isLoading = false }: CreateCampaignFormProps) {
  const [showSuccess, setShowSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CampaignFormData>({
    resolver: zodResolver(campaignSchema),
  });

  const handleFormSubmit = (data: CampaignFormData) => {
    onSubmit(data);
    setShowSuccess(true);
    reset();
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      onCancel();
    }, 3000);
  };

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
          <div className="flex flex-col items-center text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Campaign Created Successfully!</h3>
            <p className="text-gray-600">Your campaign has been created and is ready to use.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Create New Campaign</h2>
          <button
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-600 cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          {/* Campaign Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Campaign Name
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              className={`w-full text-gray-600 placeholder:text-gray-400 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter campaign name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Campaign Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Campaign Type
            </label>
            <div className="space-y-2">
              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-100">
                <input
                  {...register('type')}
                  type="radio"
                  value="Email"
                  className="mr-3 text-gray-600 placeholder:text-gray-400"
                />
                <div className="flex items-center">
                  <Mail size={20} className="text-blue-600 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">Email Campaign</div>
                    <div className="text-sm text-gray-500">Send email campaigns to your audience</div>
                  </div>
                </div>
              </label>
              
              <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  {...register('type')}
                  type="radio"
                  value="WhatsApp"
                  className="mr-3 text-gray-600 placeholder:text-gray-400"
                />
                <div className="flex items-center">
                  <MessageSquare size={20} className="text-green-600 mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">WhatsApp Campaign</div>
                    <div className="text-sm text-gray-500">Send WhatsApp messages to your contacts</div>
                  </div>
                </div>
              </label>
            </div>
            {errors.type && (
              <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              {...register('description')}
              id="description"
              rows={4}
              className={`w-full px-3 py-2 text-gray-600 placeholder:text-gray-400 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.description ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Describe your campaign goals and target audience"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
            )}
          </div>

          {/* Form Actions */}
          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 cursor-pointer px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 cursor-pointer px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating...' : 'Create Campaign'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
