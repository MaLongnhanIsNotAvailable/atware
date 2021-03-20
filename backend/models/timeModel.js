import mongoose from 'mongoose';

const timeSchema = new mongoose.Schema(
    {
        idUser: { type: String, required: true },
        mon: {
            t1: String,
            t2: String,
            t3: String,
            t4: String,
            t5: String,
            t6: String,
        },
        tue: {
            t1: String,
            t2: String,
            t3: String,
            t4: String,
            t5: String,
            t6: String,
        },
        wed: {
            t1: String,
            t2: String,
            t3: String,
            t4: String,
            t5: String,
            t6: String,
        },
        thurs: {
            t1: String,
            t2: String,
            t3: String,
            t4: String,
            t5: String,
            t6: String,
        },
        fri: {
            t1: String,
            t2: String,
            t3: String,
            t4: String,
            t5: String,
            t6: String,
        },
        sat: {
            t1: String,
            t2: String,
            t3: String,
            t4: String,
            t5: String,
            t6: String,
        },
        sun: {
            t1: String,
            t2: String,
            t3: String,
            t4: String,
            t5: String,
            t6: String,
        },
    },
    {
        timestamps: true,
    }
);
const TimeTable = mongoose.model('TimeTable', timeSchema);
export default TimeTable;
