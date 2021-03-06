import firebaseAdmin from 'firebase-admin'; 

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
      privateKey: process.env.FIREBASE_PRIVATE_KEY,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });
}

export { firebaseAdmin };
