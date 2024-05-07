import React from "react";
import { StarOutline } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProductsS from "./productss";
import ElipsImg from "../image/Ellipse 15.png";
const Details = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className="container py-10">
        <div>
          <img
            className="w-[100%] h-[15%] object-cover "
            src="https://pbs.twimg.com/profile_banners/993862123200679936/1645141713/600x200"
            alt="photo"
          />
        </div>
        <section className="pl-6 bg-secondary ">
          <div className="">
            <img
              className=" rounded-full border-solid border-white transform -translate-y-24 w-40 h-40 "
              src={ElipsImg}
              alt="photo"
            />
          </div>
          <div className="flex items-center">
            <h1 className="font-bold text-lg">
              Restaurant au coeur de kinshasa
            </h1>
          </div>
          <div className="flex justify-start items-start">
            <StarOutline />
            <StarOutline />
            <StarOutline />
            <StarOutline />
            <h2 className="gap-6">
              4,3(276). <span>A 2 min</span>
            </h2>
          </div>
          <div className="flex justify-start items-center">
            <address>Batetela 67, commune de la gombe</address>
          </div>

          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Afficher tout" value="1" />
                  <Tab label="Repas" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div className="container">
                  <ProductsS />
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div className="container">
                  <ProductsS />
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </section>
      </div>
    </div>
  );
};

export default Details;
