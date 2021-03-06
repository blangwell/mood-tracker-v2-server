const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
	userId: String,
	date: Date,
	sleep: Number,
	depressed: Number,
	manic: Number,
	irritable: Number,
	anxious: Number,
	psychotic: Boolean,
	therapy: Boolean,
	notes: String
});

const Mood = mongoose.model('Mood', moodSchema);
module.exports = Mood;