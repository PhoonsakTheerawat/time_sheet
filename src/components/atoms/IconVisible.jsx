import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";

const IconVisible = ({ visible, onClick }) => {
  return (
    <div className='absolute top-0 right-0 m-2 cursor-pointer' onClick={onClick}>
      {visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
    </div>
  );
};
export default IconVisible;
