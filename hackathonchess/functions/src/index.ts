import * as functions from "firebase-functions";
import { QueryDocumentSnapshot } from "firebase-functions/v1/firestore";
import { ChessEventInterface } from "./dto/chessEvent.interface";
import { MatchmakingEventInterface } from "./dto/matchmakingEvent.interface";
const { warn } = require("firebase-functions/lib/logger");

const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

exports.chessEventHandler = functions.firestore
    .document("chess_events/{id}")
    .onCreate(async (snapshot) => {
        //Get Snapshot Data
        const chessEvent: ChessEventInterface = <ChessEventInterface>(
            snapshot.data()
        );
        const gameId = chessEvent.gameId;
        const pgn = chessEvent.pgn;
        const timestamp = chessEvent.timestamp;
        let state = "Active";

        //Check if game is completed
        if (pgn.substring(pgn.length - 1) === "#") {
            state = "Completed";
        }

        //Updated Game Information
        db.collection("chess_games").doc(gameId).update({
            pgn,
            state,
            gameLastUpdated: timestamp,
        });
    });

exports.matchmakingEventHandler = functions.firestore
    .document("match_events/{id}")
    .onCreate(async (snapshot) => {
        //Get Snapshot Data
        const matchmakingEvent: MatchmakingEventInterface = <
            MatchmakingEventInterface
            >snapshot.data();
        const uid = matchmakingEvent.uid;
        const displayName = matchmakingEvent.displayName;
        const timestamp = matchmakingEvent.timestamp;

        //Check to see if anyone is in the queue
        db.collection("chess_queue")
            .orderBy("timestamp", "desc")
            .limit(1)
            .get()
            .then(async (querySnapshot: QueryDocumentSnapshot[]) => {
                let matchFound: Boolean = false;

                querySnapshot.forEach(async (doc) => {
                    matchFound = true;
                    //Remove user from the queue
                    await db.collection("chess_queue").doc(doc.id).delete();

                    //Create Game Information
                    await db.collection("chess_games").add({
                        whiteUid: doc.data().uid,
                        whiteDisplayName: doc.data().uid.displayName,
                        blackUid: uid,
                        blackDisplayName: displayName,
                        state: "Active",
                        gameStarted: admin.firestore.Timestamp.now(),
                        gameLastUpdated: admin.firestore.Timestamp.now(),
                        pgn: "",
                    });
                });

                warn("'WARNING'", {
                    matchFound
                });

                if (!matchFound) {
                    //Add user to queue if no users are waiting
                    await db.collection("chess_queue").add({
                        uid,
                        timestamp,
                    });
                }

            });
    });
