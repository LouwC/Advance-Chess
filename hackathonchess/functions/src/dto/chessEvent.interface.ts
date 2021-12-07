import * as admin from 'firebase-admin';

export interface ChessEventInterface {
    gameId: string,
    pgn: string,
    timestamp: admin.firestore.Timestamp,
}