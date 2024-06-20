interface FeatureItemProps {
  title: string;
  text: string;
  icon: string;
}

const FeatureItem: React.FC<FeatureItemProps> = (props) => {
  return (
    <div className="flex flex-col items-center md:w-1/3">
      <img
        src={props.icon}
        alt="icon-chat"
        className="w-[152px] p-4 border-[10px] border-[#00bc77] rounded-full"
      />
      <h3 className="text-xl text-center font-bold mt-4">{props.title}</h3>
      <p className="text-base text-center my-4">{props.text}</p>
    </div>
  );
};

export default FeatureItem;
