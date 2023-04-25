import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import RingVolumeIcon from "@mui/icons-material/RingVolume";
import BadgeIcon from "@mui/icons-material/Badge";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import DescriptionIcon from "@mui/icons-material/Description";
import { Link } from "react-router-dom";

const Footer = ({ menuOpen }) => {
  const leftPart = [
    { icon: <BadgeIcon />, value: "Aadarsh" },
    { icon: <EmailIcon />, value: "aadarshjha1401@gmail.com" },
    { icon: <RingVolumeIcon />, value: "7600081901" },
    { icon: <CodeIcon />, value: "Web and BlockChain Developer" },
  ];

  const rightPart = [
    {
      icon: <GitHubIcon />,
      title: "Github",
      link: "https://github.com/renji18",
    },
    {
      icon: <InstagramIcon />,
      title: "Instagram",
      link: "https://instagram.com/renji_riverstone?igshid=ZDdkNTZiNTM=",
    },
    {
      icon: <LinkedInIcon />,
      title: "LinkedIn",
      link: "https://linkedin.com/in/aadarsh-jha-b74330240",
    },
    {
      icon: <DescriptionIcon />,
      title: "My Resume",
      link: "https://drive.google.com/file/d/1FVly6kaIn1ou2-TH3rca2ArGb1dw31Kz/view?usp=sharing",
    },
  ];

  return (
    <div
      style={{ filter: menuOpen && "blur(1px)" }}
      className=" border-t border-t-[#64ffda] font-serif text-sm bg-[#0a192f] text-[#BFA181] text-center py-3 sm:text-lg flex justify-between px-3 sm:px-5 lg:px-10"
    >
      <div>
        {leftPart.map((item) => (
          <div key={item.value} className="flex items-center gap-1 space-y-3">
            {item.icon}
            <p style={{ transform: "translateY(-5px)" }}>{item.value}</p>
          </div>
        ))}
      </div>
      <div>
        {rightPart.map((item) => (
          <Link key={item.link} target="_blank" to={item.link}>
            <div className="flex cursor-pointer items-center gap-1 space-y-3">
              {item.icon}
              <p style={{ transform: "translateY(-5px)" }}>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
