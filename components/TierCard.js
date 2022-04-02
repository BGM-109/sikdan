import Image from "next/image";

const TierCard = ({ img, price }) => {
  const fileName = img.split(".");
  return (
    <div className="w-full flex flex-row items-center justify-center">
      <Image src={img} width={150} height={150} alt={fileName} />
      <p>100g 당 {price}원 미만</p>
    </div>
  );
};

export default TierCard;
