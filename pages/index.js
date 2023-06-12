import HeroSection from '@/components/HeroSection';

import Wrapper from '@/components/Wrapper';
import FeatureSection from '@/components/FeatureSection';
import RelativeProducts from '@/components/RelativeProducts';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Wrapper>
          {/* products grid start */}
          <div className="flex md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
            <FeatureSection />
          </div>
          <RelativeProducts />
        </Wrapper>
      </main>
    </>
  );
}
