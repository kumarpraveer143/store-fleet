// Please don't change the pre-written code
import jwt from "jsonwebtoken";
// Import the necessary modules here

import { createNewOrderRepo } from "../model/order.repository.js";
import { ErrorHandler } from "../../../utils/errorHandler.js";

export const createNewOrder = async (req, res, next) => {
  // Write your code here for placing a new order
  const payload = jwt.verify(req.cookies.token, process.env.JWT_Secret);
  const userId = payload.id;
  const data = req.body;
  data.user = userId;
  const createOrder = await createNewOrderRepo(data, userId);
  return res.send(createOrder);
};
