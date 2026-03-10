// import BackendArchitecture from '@/components/illustration/backend-architecture';
import BackendArchitecture from '@/components/illustration/backend-architecture';
import FrontendEngineeringIllustration from '@/components/illustration/responsive';

export default function page() {
  return (
    <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-neutral-900">
      <div className="w-300 border text-neutral-200">
        <BackendArchitecture />
      </div>
    </div>
  );
}
