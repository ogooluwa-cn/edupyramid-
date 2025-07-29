import { Suspense } from 'react';
import RegisterStep3Client from './RegisterStep3Client';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterStep3Client />
    </Suspense>
  );
}
