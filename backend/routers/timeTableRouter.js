import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Time from '../models/timeModel.js';

const timeTableRouter = express.Router();

timeTableRouter.post(
    '/',
    expressAsyncHandler(async (req, res) => {
      if (req.body.length === 0) {
        res.status(400).send({ message: `Haven\'t input yet `});
      } else {
        const time = new Time({
            title: req.body.title,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            more: req.body.more,
        });
        const createdTimeTable = await time.save();
        res
          .status(201)
          .send({ message: 'New Order Created', order: createdOrder });
      }
    })
  );