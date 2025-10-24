'use client';

import { useState } from 'react';
import { User, Bell, Shield, Palette, Save } from 'lucide-react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    name: 'Umed Singh',
    email: 'umedsingh2981998@gmail.com',
    notifications: {
      email: true,
      push: false,
      sms: true,
    },
    preferences: {
      theme: 'light',
      language: 'en',
      timezone: 'UTC',
    },
  });

  const handleSave = () => {
    // In a real app, this would save to an API
    console.log('Settings saved:', settings);
    alert('Settings saved successfully!');
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profile Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-6">
            <User size={24} className="text-blue-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Profile Information</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={settings.name}
                onChange={(e) => setSettings({...settings, name: e.target.value})}
                className="w-full px-3 py-2 text-gray-600 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({...settings, email: e.target.value})}
                className="w-full px-3 py-2 text-gray-600 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-6">
            <Bell size={24} className="text-green-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-900">Email Notifications</label>
                <p className="text-sm text-gray-500">Receive notifications via email</p>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications.email}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: {...settings.notifications, email: e.target.checked}
                })}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-900">Push Notifications</label>
                <p className="text-sm text-gray-500">Receive push notifications</p>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications.push}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: {...settings.notifications, push: e.target.checked}
                })}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-900">SMS Notifications</label>
                <p className="text-sm text-gray-500">Receive SMS notifications</p>
              </div>
              <input
                type="checkbox"
                checked={settings.notifications.sms}
                onChange={(e) => setSettings({
                  ...settings,
                  notifications: {...settings.notifications, sms: e.target.checked}
                })}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-6">
            <Palette size={24} className="text-purple-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Preferences</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
              <select
                value={settings.preferences.theme}
                onChange={(e) => setSettings({
                  ...settings,
                  preferences: {...settings.preferences, theme: e.target.value}
                })}
                className="w-full px-3 py-2 text-gray-600 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <select
                value={settings.preferences.language}
                onChange={(e) => setSettings({
                  ...settings,
                  preferences: {...settings.preferences, language: e.target.value}
                })}
                className="w-full px-3 py-2 text-gray-600 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
              <select
                value={settings.preferences.timezone}
                onChange={(e) => setSettings({
                  ...settings,
                  preferences: {...settings.preferences, timezone: e.target.value}
                })}
                className="w-full px-3 py-2 text-gray-600 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="UTC">UTC</option>
                <option value="EST">Eastern Time</option>
                <option value="PST">Pacific Time</option>
                <option value="GMT">Greenwich Mean Time</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-6">
            <Shield size={24} className="text-red-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Security</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <button className="w-full px-4 py-2 cursor-pointer border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Change Password
              </button>
            </div>
            
            <div>
              <button className="w-full px-4 py-2 cursor-pointer border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Enable Two-Factor Authentication
              </button>
            </div>
            
            <div>
              <button className="w-full px-4 py-2 cursor-pointer border border-red-300 rounded-lg text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="inline-flex cursor-pointer items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <Save size={20} className="mr-2" />
          Save Settings
        </button>
      </div>
    </div>
  );
}
