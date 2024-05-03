import React from "react";
import { Phone, StarOutline } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProductsS from "./productss.js";

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
              src="src\components\image\Ellipse 15.png"
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
          <section className="flex justify-start items-start">
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
                  <p className="font-bold text-lg py-10">
                    A propos du restaurant la champagne
                  </p>
                  <div className="flex  items-center text-center">
                    <p>
                      Ils proposent des plats délicieux et créatifs préparés à
                      partir dingrédients récupérés ou de surplus alimentaires
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap3 place-items-center">
                    <div className="flex justify-start items-start relative">
                      <StarOutline />
                      <StarOutline />
                      <StarOutline />
                      <StarOutline />
                      <h2 className="">
                        4,3- <span>260 avis</span>
                      </h2>
                    </div>
                  </div>
                  <address className="flex justify-start items-center">
                    Batetela 67, commune de la gombe
                  </address>
                  <div className="flex justify-start items-center">
                    <p>+243 81 376 5435</p>
                  </div>

                  <div className="flex justify-end items-end">
                    <Phone />
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
        </section>
      </div>
    </div>
  );
};

export default Details;
