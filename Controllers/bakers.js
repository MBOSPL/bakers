import Bakers from "../Models/bakers.js";

export const createBakers = async (req, res) => {
  try {
    console.log(req.body);
    const baker = await new Bakers(req.body);
    await baker.save();
    return res.status(200).json("Register Success");
  } catch (err) {
    return console.log(err);
  }
};