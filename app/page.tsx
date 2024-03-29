import Image from "next/image";

const Home = () => {
  return (
    <main className="w-80 overflow-hidden rounded-3xl bg-White shadow-[0px_0px_32px] shadow-PaleBlue lg:absolute lg:top-1/2 lg:w-[432px] lg:translate-y-[-50%]">
      <div className="relative h-[156.44px] w-80 lg:h-[221px] lg:w-[432px] ">
        <Image
          src="/assets/illustration-hero.svg"
          alt=""
          objectFit="cover"
          fill
        />
      </div>
      <div className="flex flex-col items-center gap-6 p-6 lg:p-12">
        <h1 className="mt-2 text-xl font-black text-DarkBlue lg:text-3xl">
          Order Summary
        </h1>
        <p className="text-center text-DesaturatedBlue lg:px-6">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="flex w-full flex-row items-center justify-between rounded-lg bg-VeryPaleBlue p-3 lg:p-6">
          <Image src="/assets/icon-music.svg" alt="" width={48} height={48} />
          <div className="mr-8 lg:mr-10">
            <h2 className="text-sm font-black text-DarkBlue lg:text-lg">
              Annual Plan
            </h2>
            <h3 className="text-sm text-DesaturatedBlue lg:text-lg">
              $59.99/year
            </h3>
          </div>
          <h4 className="text-xs font-bold text-BrightBlue underline lg:text-base">
            Change
          </h4>
        </div>
        <button className="w-full rounded-lg bg-BrightBlue p-4 text-sm font-black text-White">
          Proceed to Payment
        </button>
        <button className="pb-2 font-bold text-DesaturatedBlue lg:pb-0">
          Cancel Order
        </button>
      </div>
    </main>
  );
};

export default Home;
