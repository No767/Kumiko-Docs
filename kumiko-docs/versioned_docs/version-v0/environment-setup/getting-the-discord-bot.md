---
title: Getting The Discord Bot
sidebar_position: 4
---

First things first, you'll more than likely need a bot to run Kumiko. Luckily you'll find the steps below to help you on that


1. Create the app that will be needed for the bot. Once done, you should see the page as shown above

    ![images](/getting-started-assets/create-app.png)

2. Now head done to the bot section, and click on the button that says "Add Bot". 

    ![yesyes](/getting-started-assets/create-bot.png)

3. You'll see a pop-up that asks you if you want to create the bot. 
    
    ![ewom](/getting-started-assets/allow-bot.png)

4. Make sure to have all 3 of the buttons enabled. Kumiko will need all 3 of them to work.

    ![intents](/getting-started-assets/allow-intents.png)

5. You'll see a page just like the one above. We'll need access the the token for the bot, and the only way to do it is to reset the token.

    ![whyyy](/getting-started-assets/reset-token.png)

6. Allow for the token to be reset. Note that if your account is hooked up with 2FA, it will ask you to enter your 2FA code. Go to your authenticator app and enter the code from the app.

    ![confirm](/getting-started-assets/allow-reset-token.png)

7. Now click on the copy button and copy the token

    ![copytoken](/getting-started-assets/copy-token.png)

8. Now save this into the `.env` file that Kumiko needs to run with. For folks self hosting Kumiko, the `.env` file will be located within the folder where you decided to set up everything. For folks who are interested in developing Kumiko, you'll need to save this to `Bot/.env`.