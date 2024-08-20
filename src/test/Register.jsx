import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  // เก็บข้อมูลฟอร์มใน state
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    surname: "",
    nickname: "",
    phoneNumber: "",
    uni_name: "",
    major: "",
    email: "",
    password: "",
    confirm_password: "",
    start_date: "",
    end_date: "",
    manday: "",
    stackList: [{ stack: "", level: "" }],
  });

  // ฟังก์ชันจัดการเปลี่ยนค่า input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ฟังก์ชันจัดการเปลี่ยนหมายเลขโทรศัพท์
  const handlePhoneNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, ""); // ลบตัวอักษรที่ไม่ใช่ตัวเลข
    const formattedPhoneNumber = value.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "$1-$2-$3"
    ); // จัดรูปแบบ
    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: formattedPhoneNumber,
    }));
  };

  // จัดการเปลี่ยน role ของ user
  const handleRoleChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      role: event.target.value,
    }));
  };

  // จัดการการเพิ่มและลบ stacks
  const handleStackAdd = () => {
    setFormData((prevData) => ({
      ...prevData,
      stackList: [...prevData.stackList, { stack: "", level: "" }],
    }));
  };

  const handleStackRemove = (index, event) => {
    event.preventDefault();
    const updatedStackList = [...formData.stackList];
    updatedStackList.splice(index, 1);
    setFormData((prevData) => ({
      ...prevData,
      stackList: updatedStackList,
    }));
  };

  const handleStackChange = (index, event) => {
    const { name, value } = event.target;
    const updatedStackList = [...formData.stackList];
    updatedStackList[index][name] = value;
    setFormData((prevData) => ({
      ...prevData,
      stackList: updatedStackList,
    }));
  };

  // ฟังก์ชันจัดการการส่งฟอร์ม
  // ฟังก์ชันจัดการการส่งฟอร์ม
  const handleSubmit = (e) => {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้า

    let dataToSend = {
      name: formData.name,
      surname: formData.surname,
      nickname: formData.nickname,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      password: formData.password,
      confirm_password: formData.confirm_password,
      stackList: formData.stackList,
      start_date: formData.start_date,
      end_date: formData.end_date,
    };

    if (formData.role === "internship") {
      dataToSend = {
        ...dataToSend,
        uni_name: formData.uni_name,
        major: formData.major,
      };
    } else if (formData.role === "part_time") {
      dataToSend = {
        ...dataToSend,
        manday: formData.manday,
      };
    }

    // ส่งข้อมูลไปยังเซิร์ฟเวอร์หรือประมวลผลข้อมูลที่นี่
    console.log("Data to send:", dataToSend);
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="flex flex-col items-center h-screen mt-24">
      <h1 className="font-bold text-6xl">Register</h1>

      <form className="w-8/12" onSubmit={handleSubmit}>
        <div className="flex justify-between mt-10">
          <div>
            <label className="text-0_5xl">Role</label>
            <select
              className="text-2xl ml-4 border-2 border-black rounded-xl px-2"
              name="role"
              value={formData.role}
              onChange={handleRoleChange}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="internship">Internship</option>
              <option value="part_time">Part-Time</option>
            </select>
          </div>
          <div>
            <label className="text-0_5xl">Attachment</label>
            <button
              className="bg-neutral-900 text-white rounded-xl text-xl px-4 py-1 
              ml-5 h-full"
              type="button"
              onClick={togglePopup}
            >
              View or Edit Attachment
            </button>
          </div>
        </div>

        <hr className="border-1 border-black w-full mt-8"></hr>

        <div className="flex justify-between mt-8">
          <div>
            <label className="text-0_5xl">Name</label>
            <input
              className="text-2xl ml-4 border-2 border-black rounded-xl px-2"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-0_5xl">Surname</label>
            <input
              className="text-2xl ml-4 border-2 border-black rounded-xl px-2"
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <div>
            <label className="text-0_5xl">Nickname</label>
            <input
              className="text-2xl ml-4 border-2 border-black rounded-xl px-2"
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-0_5xl">Tel</label>
            <input
              className="text-2xl ml-4 border-2 border-black rounded-xl px-2"
              type="tel"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={formData.phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
        </div>

        {formData.role === "internship" && (
          <div className="flex justify-between mt-5">
            <div>
              <label className="text-0_5xl">Uni name</label>
              <input
                className="text-2xl ml-4 border-2 border-black rounded-xl px-2"
                type="text"
                name="uni_name"
                value={formData.uni_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-0_5xl">Major</label>
              <input
                className="text-2xl ml-4 border-2 border-black rounded-xl px-2"
                type="text"
                name="major"
                value={formData.major}
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        <div className="flex justify-start mt-5">
          <div>
            <label className="text-0_5xl">Email</label>
            <input
              className="text-2xl ml-4 border-2 border-black rounded-xl px-2"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <div>
            <label className="text-0_5xl">Password</label>
            <input
              className="text-2xl ml-4 border-2 border-black rounded-xl px-2"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-0_5xl">Confirm Password</label>
            <input
              className="text-2xl ml-4 border-2 border-black rounded-xl px-2"
              type="password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
            />
          </div>
        </div>

        <hr className="border-1 border-black w-full mt-8"></hr>

        <div className="flex justify-between mt-8">
          <div>
            <label className="text-0_5xl">Start Date</label>
            <input
              className="text-2xl ml-4 border-2 border-black rounded-xl px-2"
              type="date"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="text-0_5xl">End Date</label>
            <input
              className="text-2xl ml-4 border-2 border-black rounded-xl px-2"
              type="date"
              name="end_date"
              value={formData.end_date}
              onChange={handleChange}
            />
          </div>
        </div>

        {formData.role === "part_time" && (
          <div className="flex justify-between mt-5">
            <div>
              <label className="text-0_5xl">Manday</label>
              <input
                className="text-2xl ml-4 border-2 border-black rounded-xl px-2"
                type="number"
                name="manday"
                value={formData.manday}
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        <div className="flex justify-start mt-4 ">
          <label className="text-0_5xl">Stack Level</label>
        </div>
        {formData.stackList.map((singleStack, index) => (
          <div key={index} className="flex justify-start mt-2">
            <div className="">
              <select
                className="text-2xl border-2 border-black rounded-xl px-2"
                name="stack"
                value={singleStack.stack}
                onChange={(event) => handleStackChange(index, event)}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="React">React</option>
                <option value="Vue">Vue</option>
                <option value="JAVA">JAVA</option>
                <option value="C">C</option>
                <option value="Python">Python</option>
              </select>

              <select
                className="text-2xl ml-4 border-2 border-black rounded-xl px-2"
                name="level"
                value={singleStack.level}
                onChange={(event) => handleStackChange(index, event)}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="1">Level 1</option>
                <option value="2">Level 2</option>
                <option value="3">Level 3</option>
                <option value="4">Level 4</option>
                <option value="5">Level 5</option>
              </select>
              {formData.stackList.length > 1 && (
                <button
                  className="text-white text-2xl bg-red-500 ml-4 rounded-xl px-3"
                  type="button"
                  onClick={(event) => handleStackRemove(index, event)}
                >
                  X{/*bg-red-500 text-white text-xl w-8 h-8 rounded-xl */}
                </button>
              )}
              {formData.stackList.length - 1 === index && (
                <button
                  className="text-white text-2xl bg-green-500 ml-4 rounded-xl px-3"
                  type="button"
                  onClick={handleStackAdd}
                >
                  + Add
                </button>
              )}
            </div>
          </div>
        ))}

        <div className="flex justify-between mt-10">
          <Link
            className="bg-neutral-900 text-white rounded-3xl text-xl px-7 py-2 
            ml-5 h-full"
            to="/"
          >
            Back
          </Link>
          <button
            className="bg-neutral-900 text-white rounded-3xl text-xl px-7 py-2 
            mr-5 h-full"
            type="submit"
          >
            Confirm
          </button>
        </div>

        {/* Popup Modal */}
        {isPopupOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg relative w-11/12 md:w-2/3 lg:w-1/3">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold">Please upload your file</h2>
                {/* Close button */}
                <button
                  className="bg-red-500 text-white text-xl w-8 h-8 rounded-xl flex items-center justify-center"
                  type="button"
                  onClick={togglePopup}
                >
                  X
                </button>
              </div>
              <div className="flex flex-col">
                <label className="text-lg text-red-500">Book Bank</label>
                <input name="book_bank" type="file"></input>
              </div>
              {formData.role === "internship" && (
                <div className="flex flex-col">
                  <label className="text-lg mt-4 text-red-500">Referral Form</label>
                  <input name="referral_form" type="file"></input>              
                  <label className="text-lg mt-4 text-red-500">NDA</label>
                  <input name="nda" type="file"></input>
                </div>
              )}
              {formData.role === "part_time" && (
                <div className="flex flex-col">
                  <label className="text-lg mt-4 text-red-500">Details</label>
                  <input name="referral_form" type="file"></input>
                  <label className="text-lg mt-4 text-red-500">Copy of ID card</label>
                  <input name="book_bank" type="file"></input>
                
                </div>
                
              )}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Register;
