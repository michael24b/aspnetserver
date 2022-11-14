const Th =(props)=>{
    return (
      <th
        scope="col"
        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
      >
       {props.text}
      </th>
    );
};
export default Th;