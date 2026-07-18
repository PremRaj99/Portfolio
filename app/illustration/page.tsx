import DataAndPerformance from '@/components/illustration/data-and-performance';
import CloudAndDevOps from '@/components/illustration/cloud-and-devops';
import IntegrationsIllustration from '@/components/illustration/integrations';
import IntegrationEngineeringIllustration from '@/components/illustration/integration';

export default function page() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 overflow-hidden bg-neutral-900 p-8">
      <div className="w-full max-w-4xl text-neutral-200">
        <IntegrationsIllustration />
      </div>
      <div className="w-full max-w-4xl text-neutral-200">
        <CloudAndDevOps />
      </div>
      <div className="w-full max-w-4xl text-neutral-200">
        <DataAndPerformance />
      </div>
      <div className="w-full max-w-4xl text-neutral-200">
        <IntegrationEngineeringIllustration />
      </div>
    </div>
  );
}
