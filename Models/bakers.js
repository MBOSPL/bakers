import mongoose from "mongoose";

const bakerSchema = new mongoose.Schema({
  role: {
    type: String,
  },
  bakeryName: {
    type: String,
  },
  bakerName: {
    type: String,
  },
  email: {
    type: String,
  },
  contactNo: {
    type: Number,
  },
  facebookUrl: {
    type: String,
  },
  instagramUrl: {
    type: String,
  },
  bakerylocation: {
    type: String,
  },
  address: {
    type: String,
  },
  country: {
    type: String,
  },
  State: {
    type: String,
  },
  city: {
    type: String,
  },
  deliveryArrangement: {
    type: String,
  },
  maxorderperweek: {
    type: Number,
  },
  dietFilter: {
    type: String,
  },
  fssaiCertificateNumber: {
    type: Number,
  },
  fssaiCertificateExpiryDate: {
    type: String,
  },
  fssaiApplicationNo: {
    type: String,
  },
});

const Bakers = mongoose.model("bakers", bakerSchema);

export default Bakers;
