import Image from "next/image";

type CardProps = {
    image: string;
    title: string;
  };
  
  export const Card = ({ image, title }: CardProps) => {
    return (
      <div className="group relative w-[400px] h-[400px] md:h-screen md:w-[700px] overflow-hidden bg-neutral-200">
        <div className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110">
          <Image src={image} width={800} height={800} alt={title} />
        </div>
      </div>
    );
  };