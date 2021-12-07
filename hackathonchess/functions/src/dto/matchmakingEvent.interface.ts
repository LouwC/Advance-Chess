import * as admin from 'firebase-admin';

export interface MatchmakingEventInterface {
    uid: string,
    timestamp: admin.firestore.Timestamp,
}