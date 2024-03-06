const Turn = require('../models/Turn')

const checkTime = (newTurnDate, newTurnStart, newTurnEnd, existingTurns) => {
    const newTurntDateCast = new Date(newTurnDate);
    const newTurnStartTime = (Number)(newTurnStart.hour + newTurnStart.minutes)
    const newTurnEndTime = (Number)(newTurnEnd.hour + newTurnEnd.minutes)
    if (newTurnEndTime <= newTurnStartTime)
        return false
    //console.log("new: ", newTurntDateCast.toString());
    //console.log("start: ", newTurnStartTime, " end: ", newTurnEndTime);
    // 
    for (const turn of existingTurns) {
        //console.log("old: ", turn.turnDate.toString());
        const turnStartTime = turn.start.hour * 100 + turn.start.minutes
        const turnEndTime = turn.end.hour * 100 + turn.end.minutes
        // console.log("start: ",turnStartTime," end: ",turnEndTime);
        if ((newTurntDateCast.toString() === turn.turnDate.toString()) &&
            ((turnStartTime >= newTurnStartTime && turnStartTime < newTurnEndTime) ||
                (turnEndTime > newTurnStartTime && turnEndTime <= newTurnEndTime))) {
            return false;
        }
    }

    return true;
}
const getAllTurns = async (req, res) => {
    const turns = await Turn.find().lean()
    if (!turns.length) {
        return res.status(400).json({
            error: true,
            massage: "no turns",
            data: null
        })
    }
    res.status(201).json({
        error: false,
        massage: "",
        data: turns
    })
}

const getTurnById = async (req, res) => {
    const { id } = req.params
    const turn = await Turn.findOne({ _id: id }).lean()
    if (!turn)
        res.status(404).json("dont find")
    res.json(turn)
}

const creatTurn = async (req, res) => {
    const { turnDate, user, start, end, description, notes } = req.body
    if (!user || !start || !end || !description || !turnDate)
        return res.status(400).json({
            error: true,
            massage: "user and start time and end time and descrition and date are required!",
            data: null
        })
    const turns = await Turn.find().lean()
    if (!checkTime(turnDate, start, end, turns)) {
        return res.status(400).json({
            error: true,
            massage: "turn time is not valid",
            data: null
        })
    }
    const turn = Turn.create({ turnDate, user, start, end, description, notes })
    res.status(201).json({
        error: false,
        massage: "",
        data: turn
    })
}

const updateTurn = async (req, res) => {
    const { id, turnDate, user, start, end, description, notes } = req.body

    if (!id || !user || !start || !description || !turnDate)
        return res.status(400).json({
            error: true,
            massage: "id and user and start time and end time and descrition and date are required!",
            data: null
        })
    const turn = await Turn.findById(id).exec()
    if (!turn) {
        return res.status(400).json({
            error: true,
            massage: "turn not found",
            data: null
        })
    }
    const turns = await Turn.find({}).lean()
    console.log(turns);
    if (!checkTime(turnDate, start, end, turns)) {
        return res.status(400).json({
            error: true,
            massage: "turn time is not valid",
            data: null
        })
    }
    turn.turnDate = turnDate
    turn.start = start
    turn.end = end
    turn.user = user
    turn.description = description
    turn.turnDate = turnDate
    turn.notes = notes
    await turn.save()
    res.status(201).json({
        error: false,
        massage: "",
        data: turn
    })
}

const deleteTurn = async (req, res) => {
    const { id } = req.body
    const turn = await Turn.findById(id).exec()
    if (!turn)
        return res.status(400).json("turn nod found...")
    await turn.deleteOne()

    res.json("succeed")
}

module.exports = { getAllTurns, getTurnById, creatTurn, updateTurn, deleteTurn }