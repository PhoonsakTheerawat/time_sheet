import React, { useState } from "react";
import SelectField from "../atoms/SelectField";
import TextInput from "../molecules/TextInput";
import Label from "../atoms/Label";
import PasswordInput from "../molecules/PasswordInput";

function RegisterFormOrganism() {
  const [formData, setFormData] = useState({
    role: "",
    name_th: "",
    surname_th: "",
    name_en: "",
    surname_en: "",
    nickname_th: "",
    phoneNumber: "",
    uni_name: "",
    major: "",
    email: "",
    password: "",
    confirm_password: "",
    start_date: "",
    end_date: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value || "", // เพิ่มค่าเริ่มต้นเป็นค่าว่างหาก value เป็น undefined
    }));
    console.log(`${name}: ${value}`);
  };

  // ฟังก์ชันใหม่เพื่อจัดการกับการเปลี่ยนแปลงของ react-select
  const handleSelectChange = (selectedOption, actionMeta) => {
    const name = actionMeta.name; // รับชื่อฟิลด์
    setFormData((prevData) => ({
      ...prevData,
      [name]: selectedOption ? selectedOption.value : "",
    }));
    console.log(`${name}: ${selectedOption ? selectedOption.value : ""}`);
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value.replace(/\D/g, "");
    const formattedPhoneNumber = value.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "$1-$2-$3"
    );
    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: formattedPhoneNumber,
    }));
  };

  const roleoptions = [
    { value: "part_time", label: "Part Time" },
    { value: "internship", label: "Internship" },
  ];

  return (
    <div className="border-4 mt-12 w-3/4">
      <form>
        <SelectField
          name="role"
          options={roleoptions}
          value={roleoptions.find((option) => option.value === formData.role)}
          onChange={handleSelectChange} // อัปเดตเพื่อจัดการกับการเปลี่ยนแปลงของ react-select
        />
        <div className="flex justify-between items-center border-4 mt-10">
          <TextInput
            text="Name_TH"
            type="text"
            name="name_th"
            placeholder="    Name_TH"
            value={formData.name_th}
            onChange={handleInputChange}
          />

          <TextInput
            text="Surname_TH"
            type="text"
            name="surname_th"
            placeholder="    Surname_TH"
            value={formData.surname_th}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-between items-center border-4 mt-6">
          <TextInput
            text="Name_EN"
            type="text"
            name="name_en"
            placeholder="    Name_EN"
            value={formData.name_en}
            onChange={handleInputChange}
          />

          <TextInput
            text="Surname_EN"
            type="text"
            name="surname_en"
            placeholder="    Surname_EN"
            value={formData.surname_en}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-between items-center border-4 mt-6">
          <TextInput
            text="Nickname_TH"
            type="text"
            name="nickname_th"
            placeholder="    Nickname_TH"
            value={formData.nickname_th}
            onChange={handleInputChange}
          />

          <TextInput
            text="Tel"
            type="tel"
            name="phoneNumber"
            placeholder="    Tel"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            maxLength="10" // เพิ่มความยาวเป็น 12 เพื่อรองรับการเพิ่มป้าย "-" ด้วย
            value={formData.phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </div>

        {formData.role === "internship" && (
          <div className="flex justify-between items-center border-4 mt-6">
            <TextInput
              text="Uni name"
              type="text"
              name="uni_name"
              placeholder="    Uni name"
              value={formData.uni_name}
              onChange={handleInputChange}
            />

            <TextInput
              text="Major"
              type="text"
              name="major"
              placeholder="    Major"
              value={formData.major}
              onChange={handleInputChange}
            />
          </div>
        )}

        <div className="flex justify-between items-center border-4 mt-6">
          <TextInput
            text="Start Date"
            type="date"
            name="start_date"
            placeholder="    Start Date"
            value={formData.start_date}
            onChange={handleInputChange}
          />

          <TextInput
            text="End Date"
            type="date"
            name="end_date"
            placeholder="    End Date"
            value={formData.end_date}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-start items-center border-4 mt-6">
          <TextInput
            text="Email"
            type="email"
            name="email"
            placeholder="    Email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex justify-between items-center border-4 mt-6">
          <div className="flex border-4 w-1/3">
            <Label text="Password" />
            <PasswordInput
              name="password"
              placeholder="    Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex border-4 w-1/3">
            <Label text="Confirm Password" />
            <PasswordInput
              name="confirm_password"
              placeholder="    Confirm Password"
              value={formData.confirm_password}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterFormOrganism;
