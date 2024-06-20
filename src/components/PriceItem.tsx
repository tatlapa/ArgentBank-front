interface PriceItemProps {
  title: string;
  price: string;
  balanceState: string;
}

const PriceItem: React.FC<PriceItemProps> = (props) => {
  return (
    <div className="bg-white flex flex-col md:flex-row w-4/5 justify-between p-6 md:items-center">
      <div>
        <h3>{props.title}</h3>
        <p className="text-[40px] font-bold">{props.price}</p>
        <p>{props.balanceState}</p>
      </div>
      <button className="bg-[#00bc77] border-[#00bc77] font-bold flex items-center justify-center p-2 mt-4 text-white h-fit">
        View transactions
      </button>
    </div>
  );
};

export default PriceItem;
