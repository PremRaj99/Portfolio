import FrontendEngineeringIllustration from '@/components/illustration/responsive';

export default function page() {
  return (
    <div className='w-full h-screen overflow-hidden bg-neutral-900 flex items-center justify-center'>
        <div className="w-250 aspect-video border text-neutral-200">
            <FrontendEngineeringIllustration />
        </div>
    </div>
  )
}
