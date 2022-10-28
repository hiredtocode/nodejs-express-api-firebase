"use strict";

import firebase from "../db";
import Student from "../models/student";
const firestore = firebase.firestore();

const addStudent = async (req, res, next) => {
	try {
		const data = req.body;
		await firestore.collection("student").doc().set(data);
		res.send("Record saved successfully");
	} catch (error) {
		res.status(400).send(error.message);
	}
};

export default addStudent;
