import React from "react";
import girlinbox from "../assets/images/girlinbox.png"
import { TextField, Box } from "@mui/material";
import num from "../assets/icons/pin.svg"

function Direction() {

  return (

    <main className="h-full w-full pb-16 flex flex-row padding-right-10 padding-top-5 fixed">
      <div className="mt-10 ml-14">
        <p className="text-2xl font-medium font-maven text-black inline driver-title">Track Order:  </p>
        <p className="text-2xl font-medium font-maven text-black inline">  # </p>
      </div>
      <div className="fixed z-0 w-1/2 h-fit   bottom-0 right-0">
        <div className="-z-50  bg-White rounded-t-full h-[430px] w-[900px] ">
          <div>
            <img src={girlinbox} alt="man on the bike" className="h-[480px] w-[480px] bottom-[140px] left-[230px] relative" />
          </div>
          <div className=' bottom-[170px] left-[300px] relative'>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <img src={num} alt='navigate back' className={'mr-2 h-[45px]'} />
              <TextField
                id="otp"
                label="OTP"
                variant="standard"
                sx={{ width: '200px', mr: 1 }}
                inputProps={{ style: { fontSize: 20 } }}
                InputLabelProps={{ style: { fontSize: 20, color: '#8D99AE' } }}
                // helperText={errors.mname?.message}
                // error={errors?.mname ? true : false}
                FormHelperTextProps={{
                  style: { fontSize: 10 }
                }}
              // value={identityDetails.mname}
              />
              <button type="submit" className="pl-4 pr-4 font-oswald h-2 accessButton"> Confirm</button>
            </Box>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Direction;