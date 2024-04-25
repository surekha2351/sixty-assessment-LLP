import './index.css'
import React,{useState} from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosDesktop } from "react-icons/io";
import { CiCircleQuestion } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { LuBuilding2 } from "react-icons/lu";
import { AiFillDollarCircle } from "react-icons/ai";
import { SlEarphones } from "react-icons/sl";
import { IoIosSettings } from "react-icons/io";

  
export const SideNavbar = () => {
    const [isOpen, setIsOpen] = useState(true)
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen)
    }
    return(
        <div
      style={{
        width: isOpen ? "110px" : "50px",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        transition: "width 0.3s",
        padding: isOpen ? "10px" : "10px 0px",
        boxSizing: "border-box",
      }}
    >
      <button onClick={toggleSidebar} style={{ marginBottom: "10px" }} className="collapse">
        {isOpen ? "Collapse <<" : "Expand >>"}
      </button>
      {isOpen && (
        <div className="sidebar-container">
          <div className="Top-log-bar">
            <h1 className="Sidebar-Logo-heading-container">d</h1>
          </div>
          <div className="midel-log-bar">
            <CiSearch className="icon" />
            <IoIosDesktop className="icon" />
            <CiCircleQuestion className="icon" />
            <CiCalendar className="icon" />
            <LuBuilding2 className="icon" />
            <AiFillDollarCircle className="icon" />
            <SlEarphones className="icon" />
          </div>
          <div className="Bottom-log-bar">
            <IoIosSettings className="icon" />
          </div>
        </div>
      )}
    </div>
    )
}