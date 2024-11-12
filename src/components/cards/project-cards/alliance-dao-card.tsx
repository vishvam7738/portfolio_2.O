import Image from "next/image"
import { Badge } from "../../shadcn/Badge";
import SendmessageIcon from "../../lottie-ui/send-message";
import CardWrapper from "../card-wrapper";

const AllianceDao = () => {
  return (
    <CardWrapper>
    <div className="relative h-full flex flex-col justify-center gap-6 py-4 sm:py-6 px-4 sm:px-8 overflow-hidden">
      <div className="relative flex justify-between w-full h-full items-stretch flex-col">
        <div className="absolute h-full w-full aspect-[578/433] shadow-2xl">
          <Image
            src={"/projects/ai-mock2.jpg"}
            alt={"memories"}
            fill
            style={{
              objectFit: "cover",
              objectPosition: "top",
              borderRadius: "8px"
            }}
          />
        </div>
      </div>
      <div className="flex flex-col items-start gap-1">
        {/* <h4 className="text-xs font-medium opacity-80 uppercase flex flex-wrap gap-2 items-center">
        
          {/* <span className="flex gap-1">
            <Image
              src="/companies/01_Terra_color.png"
              alt="TFL logo"
              height={12}
              width={16}
            />
            
          </span> */}
        {/* </h4> */} 
        <div className="w-full flex gap-2 items-center">
          <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90">
            AI-Mock Interviewer
          </h1>
          <SendmessageIcon link="https://vishvam-ai-mock-interviewer.vercel.app/" lottieName="StationLandingIcon" />
        </div>
        <div className="flex gap-2 flex-wrap mt-1">
          <Badge variant="default" className="text-xs">
            ReactJS
          </Badge>
          <Badge variant="default" className="text-xs">
            NextJS
          </Badge>
          <Badge variant="default" className="text-xs">
            Drizzle ORM
          </Badge>
          <Badge variant="default" className="text-xs">
            GeminiAI
          </Badge>
          <Badge variant="default" className="text-xs">
            Clerk
          </Badge>
          <Badge variant="default" className="text-xs">
            PostgreSQL
          </Badge>
        </div>
      </div>
    </div>
  </CardWrapper>
  )
}

export default AllianceDao
