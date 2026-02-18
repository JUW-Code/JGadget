# JGadget Integration Guide: Payments & Email

This guide explains how to make your app fully "real" by connecting to actual banks and email servers.

## 1. Banking & Payments (Opay/Wema)

### Option A: Manual Transfer (Implemented)
We have added a **"Bank Transfer"** option to your checkout page.
- **How it works**: Customers see your account number, transfer the money on their phone, and then click "Place Order".
- **Real World**: You manually check your Opay/Wema app to confirm receipt before shipping.

### Option B: Automated Payments (Paystack)
To have the site automatically detect when money is paid (like Amazon), you need **Paystack**.
1.  **Sign Up**: Go to [paystack.com](https://paystack.com) and create a free account.
2.  **Get Keys**: In your dashboard, copy your "Public Key".
3.  **Integration**: You would use Paystack's "Popup" script to collect payment.

**Example Code for later:**
```html
<script src="https://js.paystack.co/v1/inline.js"></script>
```

## 2. Email Server (SMTP)

We have set up the code to use **Nodemailer**. To actually send emails:

### Step 1: Get Google App Password
Since you probably use Gmail, you need an "App Password" (your normal password won't work for code).
1.  Go to **Google Account** > **Security**.
2.  Enable **2-Step Verification**.
3.  Search for **"App Passwords"**.
4.  Create one named "JGadget".
5.  **Copy the 16-character code**.

### Step 2: Update `server.js`
Open `server.js` and find the `transporter` section. Update it like this:

```javascript
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // PUT YOUR GMAIL HERE
    pass: 'xxxx xxxx xxxx xxxx'   // PUT YOUR APP PASSWORD HERE
  }
});
```

### Step 3: Restart Server
Run `npm start` again. Now, when the backend sends an email, it will actually go to the recipient's inbox!
