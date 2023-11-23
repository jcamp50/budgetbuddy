import React from 'react';
import { Card, CardContent, CardDescription } from '@/components/ui/card';

const SpendingSection = () => {
  return (
    <div className='flex flex-row justify-around items-center h-1/2 p-4'>
      <div className='flex flex-col justify-around items-center w-1/3 space-y-4'>
        <Card className='w-full max-w-sm'>
          <CardDescription className='ml-2 text-xl'>Income</CardDescription>
          <CardContent className='text-4xl'>$3200</CardContent>
        </Card>
        <Card className='w-full max-w-sm'>
          <CardDescription className='ml-2 text-xl'>Expenses</CardDescription>
          <CardContent className='text-4xl'>$250</CardContent>
        </Card>
      </div>
      Pie Chart
      {/* Pie Chart - Make sure to replace this with your Pie Chart component */}
    </div>
  );
};

export default SpendingSection;
