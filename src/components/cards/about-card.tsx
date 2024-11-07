import Image from "next/image";
import CardWrapper from "@/components/cards/card-wrapper";

const AboutCard = () => {
  return (
    <CardWrapper>
      <div className="static flex flex-col items-center sm:items-start px-6 py-5 sm:px-8 sm:py-6 gap-6">
        <div className="flex gap-2 sm:gap-6 flex-col items-center sm:justify-start sm:flex-row">
          <div className="relative w-16 h-16 min-w-16 sm:w-24 sm:min-w-24 sm:h-24 p-[2px] z-0 overflow-hidden rounded-full shadow-memoji">
            <Image
              src="/memoji.png"
              alt="Memoji"
              fill
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="font-silka text-2xl sm:text-3xl leading-tight font-medium text-slate-900 dark:text-white">
              Vishvam Agarwal
            </h1>
            
            <div className="flex items-center mt-2 text-slate-900 dark:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 32 32" id="Phone">
                <path d="M13.216 8.064c-.382-4.394-4.966-6.55-5.16-6.638a.974.974 0 0 0-.582-.078c-5.292.878-6.088 3.958-6.12 4.086a.99.99 0 0 0 .02.54c6.312 19.584 19.43 23.214 23.742 24.408.332.092.606.166.814.234a.99.99 0 0 0 .722-.042c.132-.06 3.248-1.528 4.01-6.316a.997.997 0 0 0-.096-.612c-.068-.132-1.698-3.234-6.218-4.33a.977.977 0 0 0-.884.21c-1.426 1.218-3.396 2.516-4.246 2.65-5.698-2.786-8.88-8.132-9-9.146-.07-.57 1.236-2.572 2.738-4.2a.998.998 0 0 0 .26-.766z" fill="#ffffff" ></path>
              </svg>
              <span className="text-lg">+91 63981 53717</span>
            </div>


          </div>
        </div>

        <p className="dark:text-white text-slate-900 tracking-wide leading-6 text-sm sm:text-base">
          Passionate about building beautiful and functional user interfaces with expertise in <span className="font-semibold text-blue-500">Full Stack development</span> and strong proficiency in <span className="font-semibold text-blue-500">DSA</span>.
        </p>


      </div>
    </CardWrapper>
  );
};

export default AboutCard;
