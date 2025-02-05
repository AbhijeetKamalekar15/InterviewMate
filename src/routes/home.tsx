import Container from "@/components/container"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Marquee from "react-fast-marquee";
import { MarqueImg } from "@/components/marquee-img";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className='flex-col w-full bg-gray-100'>
      <Container className="">
        <div className="my-8 text-center mt-20">
          <h2 className="text-xl text-center">
            <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500 font-extrabold md:text-5xl">
              AI Superpower
            </span>
            <span className="text-gray-500 font-extrabold  md:text-2xl">
            – Elevate Your Interview Game
            </span>
            <br />
            <br />
            Improve your interview chances and skills
          </h2>

          <p className="mt-2 text-muted-foreground text-sm">
          Boost your interview skills and increase your success rate with AI_driven insights. Discover a smart way to prepare, practice and stand out

          </p>
        </div>
        </Container>
        <Container className="md:flex items-center justify-center">

        {/* image section */}
        <div className="flex items-center justify-center w-full rounded-xl bg-gray-100 h-[320px]  overflow-hidden relative">
          <img
            src="/assets/img/newl1.png"
            alt=""
            className="h-full w-70 md:w-70 bg-transparent md:h-full"
          />     
        </div>


        <div className="w-full items-center justify-evenly md:px-12 md:py-16 md:items-center md:justify-end ">
          <p className="bg-gray-200 rounded-md p-2 text-3xl font-semibold text-gray-900 text-center">
            250k+
            <span className="block text-xl text-muted-foreground font-normal">
              Offers Recieved
            </span>
          </p>
          <div className="h-2">

          </div>
          <p className="bg-gray-200 rounded-md p-2 text-3xl font-semibold text-gray-900 text-center">
            1.2M+
            <span className="block text-xl text-muted-foreground font-normal">
              Interview Aced
            </span>
          </p>
        </div>
      </Container>
      {/* marquee section */}

      <div className=" w-full mt-4">
        <p className="text-center mb-4 text-gray-300">Practice for your <span className="font-bold">DREAM JOB</span></p>
        <Marquee className="h-1/7" pauseOnHover>
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/zoom.png" />
          <MarqueImg img="/assets/img/logo/firebase.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
          <MarqueImg img="/assets/img/logo/meet.png" />
          <MarqueImg img="/assets/img/logo/tailwindcss.png" />
          <MarqueImg img="/assets/img/logo/microsoft.png" />
        </Marquee>
      </div>

      <Container className="py-8 space-y-8 mt-4">
        <h2 className="tracking-wide text-center text-gray-700">
          Unleash your potential with personalized AI insights and targeted
          interview practice.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-1 md:col-span-3">
            <img
              src="/assets/img/pic.png"
              alt=""
              className="w-full max-h-96 rounded-md object-contain"
            />
          </div>

          <div className="col-span-1 md:col-span-2 gap-8 max-h-96 md:min-h-96 w-full flex flex-col items-center justify-center text-center">
            <p className="text-center text-sm text-muted-foreground">
              Transform the way you prepare, gain confidence, and boost your
              chances of landing your dream job. Let AI be your edge in
              today&apos;s competitive job market.
            </p>

            <Link to={"/generate"} className="w-full">
              <Button className="w-3/4 bg-blue-700 hover:bg-blue-500">
                Generate <Sparkles className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>

    </div>
  )
}

export default HomePage