const driver = require("../model/driver");

const editProfile = async (req, res) => {
    const { fullname, phonenumber, email, BVN,password,address } = req.body;
  
    const driverId = req.params;
  
    if (fullname || phonenumber || email|| BVN || password || address) {
      throw new CustomError.BadRequestError("Please provide all values");
    }
  
    const driver = await driver.findOneAndUpdate(
      { _id: req.driver.driverId },
      { fullname },
      { phonenumber },
      { email },
      { BVN },
      { password },
      { address },
      {
        new: true,
        runvalidators: true,
      }
    );
  
    if (!driver) {
      throw new CustomError.NotFoundError(`No driver with id : ${driverId}`);
    }
  };
  