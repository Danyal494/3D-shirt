import React from "react";
import CustomButton from "./CustomButton";

const FilePicker = ({ file, setFile, readFile }) => {
  return (
    <div className="filepicker-container glassmorphism">
      <div className="flex flex-col flex-1">
        <input id="file-upload" type="file" accept="image/*" onChange={(e)=>setFile(e.target.files[0])} />
        <label htmlFor="file-upload" className="filepicker-label"> Upload File</label>
        <p className="mt-2 text-gray-500 text-xs truncate">
          {file === '' ? "No file selected" : file.name }
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <CustomButton  type="outline" title="Logo" customStyle="text-xs"  handleClick={()=> readFile('logo')}/>
        <CustomButton  type="filled" title="Full" customStyle="text-xs"  handleClick={()=> readFile('full')}/>
      </div>
    </div>
  );
};

export default FilePicker;
