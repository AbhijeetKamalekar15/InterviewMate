export const MarqueImg = ({ img }: { img: string }) => {
    return (
      <img
        src={img}
        className="w-32 h-26 xl:w-38 xl:h-26 object-contain g mx-12 xl:mx-16"
        alt=""
      />
    );
  };