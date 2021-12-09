import * as admin from 'firebase-admin';

export interface MatchmakingEventInterface {
    uid: string,
    displayName: string,
    timestamp: admin.firestore.Timestamp,
}