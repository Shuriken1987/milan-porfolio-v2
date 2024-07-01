import { Transition } from "@/components/ui/Transitions";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden h-screen">
      <div className="relative z-10 h-full flex items-center" >
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 flex items-center">
          <div className="max-w-4xl mx-auto">
            <div className="mt-5 md:mt-0 max-w-2xl">
              <h1 className='heroHeadings'>
                <span className="block sm:text-[90px] tracking-widest font-extrabold ">
                  Milan
                </span>
                <span className="block tracking-widest mb-2">Stanojevic</span>
              </h1>
            </div>

            <div className="mt-5 max-w-full">
              <Transition>
                <p
                  className={`font-neueMontreal lg:text-[54px] sm:text-[30px] xs:text-[24px] text-[30px] lg:leading-[44px] mt-10`}
                >
                  Software Developer & Code Perfectionist specializing in
                  creating high-performance, bug-free websites and web
                  applications
                </p>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
