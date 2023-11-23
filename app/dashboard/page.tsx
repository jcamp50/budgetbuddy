import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import SpendingSection from '@/components/SpendingSection';

const Dashboard = () => {
  return (
    <div className='flex flex-col justify-stretch min-h-screen'>
      <SpendingSection />
      <Card>
        <CardTitle>Test</CardTitle>
        <CardContent>$3200</CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
