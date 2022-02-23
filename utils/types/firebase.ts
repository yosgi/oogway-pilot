import {DocumentData, FieldValue, QueryDocumentSnapshot, SnapshotOptions} from "firebase/firestore";


/**
 * Firebase collection field types
 */
export type blockedUsersMap = { [id: string]: boolean }

export type postsMap = { [id: string]: boolean }

export type commentsMap = { [id: string]: string }

export type repliesMap = { [replyId: string] : {
        comment: string
        post: string
    }
}

export type userMap = { [uid: string]: boolean }

export type compareObj = {
    type: 'text' | 'image'
    value: string
}

export type compare = {
    objList: Array<compareObj>
    votesObjMapList: Array<userMap>
}


/**
 * Fire base collection interfaces
 */
export interface FirebaseComment {
    id?: string
    message: string | undefined
    author: string
    authorUid: string
    likes: userMap
    postImage?: string | null
    timestamp: FieldValue
}

export interface FirebasePost {
    id?: string
    compare?: compare
    description: string
    message: string
    isCompare: boolean
    likes: userMap
    name: string
    timestamp: FieldValue
    postImage?: string | null
    previewImage?: string
    uid: string
}

export interface FirebaseUser {
    email: string;
    lastSeen: FieldValue;
    name: string;
    provider: string;
    blockedUsers: blockedUsersMap;
    posts: postsMap;
    comments?: commentsMap
    replies?: repliesMap
    auth0: string;
}

export interface FirebaseProfile {
    bio: string;
    dm: boolean;
    lastName: string;
    location: string;
    name: string;
    profilePic: string;
    resetProfile: boolean;
    username: string;
    uid: string;
}


/**
 * Type converters for Firebase Snapshots
 * See: https://firebase.google.com/docs/reference/js/v8/firebase.firestore.FirestoreDataConverter
 */
export const commmentConverter = {
    toFirestore(comment: FirebaseComment) : DocumentData {
        return { 
            id: comment.id,
            message: comment.message,
            author: comment.author,
            authorUid: comment.authorUid,
            likes: comment.likes,
            postImage: comment.postImage,
            timestamp: comment.timestamp
        }
    },
    fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ): FirebaseComment {
        const data = snapshot.data(options)
        return {
            id: data.id,
            message: data.message,
            author: data.author,
            authorUid: data.authorUid,
            likes: data.likes,
            postImage: data.postImage ? data.postImage : null,
            timestamp: data.timestamp
        }
    }
}