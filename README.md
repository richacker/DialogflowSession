# DialogflowSession

Creating first agent

1. Open https://dialogflow.cloud.google.com/
2. Login with your Google account
3. Accept T&C
4. Click on Create Agent
5. Provide Agent name, eg, "FirstAgent"
6. Under Google Projects, select "Create a new Google Project"
7. You may set timezone according to your region
8. Click "Create"
9. Your first Agent is ready. 
10. In the "Try it now box", enter Hello and hit enter

Adding smalltalk to FirstAgent
1. If you enter "How are you?" in the box, it wont respond
2. Select "Small talk" in left menu, tap "Enable" slider and click "Save"
3. Your Agent training will start and you'll see the gear spinning on the left.
4. Try asking it "How are you?" again and it should respond.
5. You can customise your small talk replies in the small talk screen. 


Creating first Intent
1. In order to create your first intent, select "Intents" in the left menu
2. It would initially show "Default Intent" in the list.
3. Click on "Create Intent" and name it "BalanceCheckIntent"
4. Select "Add training phrases"
5. Add phrases that user will ask the bot in single turn eg, "Show me my balance", "what is my balance"
6. Then click on "Add Response" and enter what bot should reply. Lets keep it static for now. Enter "Your balance is INR 100"
7. Click "Save" and let the training finish (When the gear on left stops spinning and pop up appears saying agent training completed)
8. Dialogflow will automatically inflate and extrapolate the training phrases, eg, you can try "Please tell me my balance" (You haven't added this to training phrases)


Creating first Entity
1. The bot is not parameterizing phrases still and is considering the texts to be static
2. In order to pick up parameters from phrases, go to "Entities" in left menu 
3. Click "Create Entity" and enter entity name. Eg, "AccountType"
4. Enter different account types in the rows like in first row, "Saving" and enter synonyms like "Savings", "Savings account"
5. In second row, enter other account types. Eg., "cc" and synonyms "credit card", "card"
6. Now go to intent "BalanceCheckIntent" and add phrase "Show me my savings balance" and "Show me my card balance"
7. Highlight savings and card in both phrases and select "AccountType" from menu that opens.
8. Your entity has been now mapped to the intent.

Adding Prebuilt Banking bot
1. Now lets add prebuilt agent to our dialogflow.
2. Navigate to prebuilt agent
3. Select "Banking" and click "Import"
4. You may change Agent name or let it be the same and also you can opt to "Create a new Google Project" or reuse any older one.
5. Click "Create agent from template"
6. It should complete the import. Click "Go to Agent"
7. Now in the "Try it now box", try commands like "What is my balance"
8. Note: It may take sometime for agent to start reflecting.

Integrating with Facebook
1. In order to integrate with Facebook, go to "Integrations" through left menu
2. Enable "Messenger from Facebook" and it should open a pop up with callback url.
3. Now navigate to developers.facebook.com and click on Login.
4. It will ask you for OTP verification on your phone. Complete the Sign up process.
5. Complete with defaults.
6. Then select "Create App"
7. Select "Manage Business Integrations" and click continue.
8. Input App display name as per your choice, say "FirstApp"
9. Select "App Purpose" as "Yourself or own business"
10. Click Create App and verify captcha.
11. Now scroll down to "Messenger" and click "Setup"
12. In messnger window, under "Access Tokens", select "Create New Page"
13. Enter Page name and Category
14. Select "Add or Remove Pages" and select "Continue" and select the page you just created
15. Submit the request and you should get confirmation.
16. Now click generate token under "Access token" on messenger page you opened earlier
17. It will show a popup. Click "I Understand" and copy the token.
18. Now copy this token in your dialogflow page where you has selected facebook integration in "Page Access Token" box.
19. Now copy the callback url from dialogflow and add it to facebook page by clicking "Add callback URL" under "Webhooks"
20. Now enter any string as "Verify Token" on dialogflow page and enter the same in the popup on facebook. (You may enter "testtoken")
21. Click "Start" in dialogflow.
22. On facebook, select "Verify and Save"
23. Navigate to "https://www.facebook.com/bookmarks/pages?ref=u2u"
24. Select your page and it should open it up.
25. Now select "Add a button"
26. Select "Send Message"
27. Click "Edit Send Message" and click Test button
28. Be patient. It wouldnt work :)
29. Go back to developer page in your app and under "Webhooks", select Add subscriptions and select all options.
30. Click Save.
31. Lets try the bot now on the page. You should get a response now.

Adding API based fulfilment
1. Use https://ecd59b2928fb.ngrok.io

Adding telephony services
