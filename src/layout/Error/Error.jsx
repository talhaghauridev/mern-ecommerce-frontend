import { ErrorImage } from "@/assets/images";
import { Image } from "@/components/ui";

const Error = ({ message = "Application Error" }) => {
  return (
    <main id="error">
      <div className="container bg-[white] flex-col gap-[10px] flex items-center justify-center h-[100vh] w-full text-[22px] md:text-[25px] font-Sans">
        <Image
          src={ErrorImage}
          alt={"Error"}
          className={"w-[100%] object-contain max-w-[150px] md:max-w-[160px]"}
        />
        <p>{message}</p>
      </div>
    </main>
  );
};

export default Error;
