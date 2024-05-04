import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const ProfilHeader = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container">
      <div className="flex items-center justify-center min-h-[400px] bg-white">
        <div className="flex flex-col justify-center p-8 md:p-14">
          <div>
            <img
              className="max-w-full max-h-full flex items-center "
              src="src\components\image\Rectangle 80.png"
              alt="photo"
            />
          </div>
          <section className="pl-6 ">
            <div className="">
              <img
                className=" rounded-full border-solid border-white transform -translate-y-24 w-40 h-40 "
                src="src\components\image\Ellipse 15.png"
                alt="bradley ortiz"
              />
              <h1 className="mb-3 text-4xl font-semibold ">peter mayamba</h1>
              <div className="flex items-center">
                <p className="mr-2">0</p>
                <span className="font-semibold text-xl">produit commandes</span>
              </div>
              <div className="flex items-center ">
                <p className="mr-2"> 0 fc</p>
                <span className="font-semibold text-xl ">economises</span>
              </div>
            </div>
            <div className="space-y-6 items-center p-3  ">
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      <Tab label="Commandes" value="1" />
                    </TabList>
                  </Box>
                  <TabPanel value="1">
                    <div>
                      <h1 className="font-bold text-2xl">
                        Ton historique de commandes
                      </h1>
                      <p>Tu trouveras tes commandes par ici.</p>
                    </div>
                  </TabPanel>
                </TabContext>
              </Box>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfilHeader;
