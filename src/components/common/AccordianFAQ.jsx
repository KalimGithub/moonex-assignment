import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const AccordianFAQ = () => {
  return (
    <div className="m-auto bg-slate-700 text-white rounded-2xl border border-gray-400 shadow-xl overflow-hidden">
      <div>
        <Accordion
          defaultExpanded
          sx={{
            backgroundColor: "#0f172a",
            color: "white",
            padding: "30px 50px",
            border: "1px solid gray",
          }}
        >
          <AccordionSummary
            expandIcon={<KeyboardArrowDownIcon className="text-white" />}
            aria-controls="panel1-content"
            id="panel1-header"
            className="text-xl font-semibold bg-slate-700 text-white"
          >
            How do I get a referral code
          </AccordionSummary>
          <AccordionDetails className=" text-gray-400">
            You can get your refferal code once the user is submitted the
            application with valid credentials and enrolled for the program.
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="bg-slate-700 text-white">
        <Accordion
          sx={{
            backgroundColor: "#0f172a",
            color: "white",
            padding: "30px 50px",
            // borderRadius: "10px",
            border: "1px solid gray",
          }}
        >
          <AccordionSummary
            expandIcon={<KeyboardArrowDownIcon className="text-white" />}
            aria-controls="panel2-content"
            id="panel2-header"
            className="text-xl font-semibold bg-slate-700 text-white"
          >
            Do I get a rewarded in tokens or ETH when I refer buyers
          </AccordionSummary>
          <AccordionDetails className=" text-gray-400">
            You recieve reward in ETH instantly once your refer makes a
            transaction!
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="bg-slate-700 text-white">
        <Accordion
          sx={{
            backgroundColor: "#0f172a",
            color: "white",
            padding: "30px 50px",
            // borderRadius: "10px",
            border: "1px solid gray",
          }}
        >
          <AccordionSummary
            expandIcon={<KeyboardArrowDownIcon className="text-white" />}
            aria-controls="panel3-content"
            id="panel3-header"
            className="text-xl font-semibold bg-slate-700 text-white"
          >
            How do I get a Refferal code
          </AccordionSummary>
          <AccordionDetails className=" text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>

          {/* <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions> */}
        </Accordion>
      </div>
    </div>
  );
};

export default AccordianFAQ;
