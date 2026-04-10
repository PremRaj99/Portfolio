import DataAndPerformance from '@/components/illustration/data-and-performance';

export default function page() {
  return (
    <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-neutral-900">
      <div className="w-300 p-8 text-neutral-200">
        <DataAndPerformance />
      </div>
    </div>
  );
}
