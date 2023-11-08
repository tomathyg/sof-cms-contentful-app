'use client'

import { useRouter, useSelectedLayoutSegment } from 'next/navigation';

import { useState } from 'react';

export default function NavigateButton () {
  const router = useRouter();

  const joinSegments = useSelectedLayoutSegment('join')

  const handleClick = () => {
    router.push('/join');
  };

  return (
    <div>
      <button onClick={handleClick}>Join (Client)</button>
    </div>
  );
};

