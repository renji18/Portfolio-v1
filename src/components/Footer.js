import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
  const [footerData, setFooterData] = useState(null);

  const { portfolio } = useSelector((state) => state?.portfolioData);

  useEffect(() => {
    setFooterData(portfolio?.footer);
  }, [portfolio]);

  const leftPart = [
    { icon: <BadgeIcon />, value: footerData?.left?.name },
    { icon: <EmailIcon />, value: footerData?.left?.email },
    { icon: <RingVolumeIcon />, value: footerData?.left?.number },
    { icon: <CodeIcon />, value: footerData?.left?.designation },
  ];

  const rightPart = [
    <GitHubIcon />,
    <InstagramIcon />,
    <LinkedInIcon />,
    <DescriptionIcon />,
  ];

  return (
    <>
      {!menuOpen && (
        <div className="text-sm text-center py-3 sm:text-lg flex justify-between px-3 sm:px-5 lg:px-10">
          <div>
            {leftPart?.map((item) => (
              <div
                key={item.value}
                className="flex items-center gap-1 space-y-3"
              >
                {item?.icon}
                <p style={{ transform: "translateY(-5px)" }}>{item?.value}</p>
              </div>
            ))}
          </div>
          <div>
            {footerData?.right?.map((r, index) => (
              <Link key={index} target="_black" to={r.link}>
                <div className="flex cursor-pointer items-center gap-1 space-y-3">
                  {rightPart[index]}
                  <p style={{ transform: "translateY(-5px)" }}>{r.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
