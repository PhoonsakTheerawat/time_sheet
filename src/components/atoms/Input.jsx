const Input = ({ type, name, placeholder, value, onChange }) => {
    return <input className='border-2 border-black rounded-xl h-11 placeholder-black w-full' type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />;
};
export default Input;
  