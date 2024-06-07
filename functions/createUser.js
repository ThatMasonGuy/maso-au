const functions = require('firebase-functions');
const admin = require('firebase-admin');

console.log('Initialised create user request');

const createUser = functions.https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow GET, POST, and OPTIONS methods
    res.set('Access-Control-Allow-Headers', 'Content-Type'); // Allow Content-Type header

    if (req.method === 'OPTIONS') {
        // Preflight request. Send a 200 OK response
        res.status(200).send();
        return;
    }

    console.log('Received create user request');
    const { firstName, lastName, userName, emailAddress, phoneNumber, avatarUrl, password } = req.body;

    console.log('User data:', {
        firstName,
        lastName,
        userName,
        emailAddress,
        phoneNumber,
        avatarUrl,
        password,
    });

    if (!firstName || !lastName || !userName || !emailAddress || !phoneNumber || !password) {
        console.log('Missing required fields');
        res.status(400).send('Missing required fields');
        return;
    }

    const db = admin.database();
    const firestore = admin.firestore();

    try {
        const userNameRef = db.ref(`userNames/${userName}`);
        const userNameSnap = await userNameRef.once('value');
        if (userNameSnap.exists()) {
            console.log('Username already taken');
            res.status(400).send('Username already taken');
            return;
        }

        console.log('Setting username as taken in Realtime Database');
        await userNameRef.set(true);

        console.log('Creating user in Firebase Authentication');
        const userRecord = await admin.auth().createUser({
            email: emailAddress,
            password: password,
            displayName: `${firstName} ${lastName}`,
            photoURL: avatarUrl,
        });

        console.log('User created in Firebase Authentication:', userRecord);

        console.log('Creating user document in Firestore');
        const userData = {
          firstName,
          lastName,
          userName,
          emailAddress,
          phoneNumber,
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        };
      
        if (avatarUrl) {
          userData.avatarUrl = avatarUrl;
        }
      
        await firestore.collection('users').doc(userRecord.uid).set(userData);

        console.log('Generating email verification link');
        const link = await admin.auth().generateEmailVerificationLink(emailAddress);

        console.log('Sending email verification');
        // Here you need to integrate your email sending logic to send the email verification link
        // For example, using SendGrid or another email service provider
        // await sendEmail(emailAddress, emailTemplate);

        console.log('User created successfully');
        res.status(200).send('User created successfully. Email verification sent.');

    } catch (error) {
        console.error('Error creating user:', error);

        console.error('Error details:', {
            code: error.code,
            message: error.message,
            stack: error.stack,
        });

        await db.ref(`userNames/${userName}`).remove();

        if (error.code === 'auth/invalid-email') {
            res.status(400).send('Invalid email address');
        } else if (error.code === 'auth/invalid-password') {
            res.status(400).send('Invalid password. Password must be at least 6 characters long.');
        } else if (error.code === 'auth/invalid-phone-number') {
            res.status(400).send('Invalid phone number');
        } else if (error.code === 'auth/invalid-display-name') {
            res.status(400).send('Invalid display name');
        } else if (error.code === 'auth/invalid-photo-url') {
            res.status(400).send('Invalid photo URL');
        } else {
            res.status(500).send(`Error creating user: ${error.message}`);
        }
        return;
    }
});

module.exports = createUser;
