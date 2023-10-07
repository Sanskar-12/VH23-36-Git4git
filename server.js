import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/upload.js";
import cookieParser from "cookie-parser";
import data from "./ABI.json" assert { type: "json" };
import { Web3 } from "web3";
// import Certificates from "./models/Certificates.js"

const app = express();

connectDB();
const web3 = new Web3(
  "https://floral-sparkling-fog.ethereum-sepolia.quiknode.pro/41c418be4c7048a2cd27e2ac5025b53fe38bd1cd/"
);
const contractAddress = "0xae3aa5c6EaA69C6be068696006c95112DfFf824E";
const contract = new web3.eth.Contract(data, contractAddress);
// console.log(contract)
config({ path: "./config/config.env" });

app.use(express.json());
app.use(cookieParser());

app.use("/api", userRouter);

app.get("/api/getdocuments/:docid", async (req, res) => {
  try {
    const { docid } = req.params;
    // console.log(taskId)
    const doc = await contract.methods.getData(docid).call();

    const numId = doc["0"];
    const prop1 = doc["1"];
    const prop2 = doc["2"];
    const prop3 = doc["3"].toString(); ;

    const docObj = {
      numId,
      prop1,
      prop2,
      prop3,
    };

    res.status(200).json({ status: 200, docObj, message: "Document Exist" });
  } catch (error) {
    res.status(404).json({ status: 500, message: "Document does not exist" });
    console.error(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log("App is running on PORT 4000");
});
