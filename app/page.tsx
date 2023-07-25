import Balancer from "react-wrap-balancer";
import { Twitter } from "@/components/shared/icons";
import Link from "next/link";

export default async function Home() {


  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
      <a
          href="https://twitter.com/Tubussines69/status/1682683077695270913?s=20"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-blue-100 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <Twitter className="h-5 w-5 text-[#1d9bf0]" />
          <p className="text-sm font-semibold text-[#1d9bf0]">
            Introducing Zerttesh
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-green-600 to-white bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>A New Way to explore Kazakhstan's Beauty</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-400 md:text-xl font-regular"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Be your own guide! Visit one of the beautiful places
            in Kazakhstan and discover its history.
          </Balancer>
        </p>
    <Link href="/feature">
    <button className="my-8 mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-green-700 px-7 py-2 transition-colors hover:bg-blue-400">
    <p>Get Started</p>
    </button>
    </Link>
    </div>
<div className="flex items-center justify-center">
<ol className="relative border-l border-gray-200 dark:border-gray-700 ">                  
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">1 STEP</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Visit one of the 
                                                                      beautiful places in Kazakhstan</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">No matter what type of place it is, Let's delve into the fascinating sights of Kazakhstan and research them in real-time.</p>
    </li>
    <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2 STEP</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Try our main feature out *click "Get Started" button*</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Once you click it, AI will generate information and interesting facts all based on you location.</p>
    </li>
    <li className="ml-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">3 STEP</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Enjoy your research!</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Now that we have learned more about the captivating places in Kazakhstan, take pleasure in the knowledge you've gained. Your exploration of Kazakhstan sights makes us happy.</p>
    </li>
</ol>
</div>
    </>
  );
}
