import React from "react";

function FileInput() {
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        const dataUrl = reader.result;
        console.log("Converted data URL:", dataUrl);
        // You can do further processing with the data URL here
      };

      reader.readAsDataURL(file);
    }
  };

  return <input type="file" onChange={handleFileChange} />;
}

export default FileInput;
