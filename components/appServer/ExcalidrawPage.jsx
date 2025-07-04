'use client';

import dynamic from 'next/dynamic';

const ExcalidrawEditor = dynamic(
  () => import('@/components/excalidrawCompo/ExcalidrawEditor'),
  { ssr: false }
);

export default function ExcalidrawClient() {
  return <ExcalidrawEditor />;
}
