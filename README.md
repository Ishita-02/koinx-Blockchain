# koinx-Blockchain

## How to start the server?

1. Clone the repository:
   ```bash
   git clone https://github.com/Ishita-02/koinx-Blockchain
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   PORT= <PORT>
   ETHERSCAN_API_KEY=<Your Etherscan API key>
   MONGO_URI=<Your MongoDB connection URI>
   ```
4. Start the server:
   ```bash
   npm start
   ```

# Take-home Assignment - Blockchain+Backend Intern

**Develop a Server Side Application to fetch Crypto Transactions of a user**

**Mandatory Tasks:-**

**Task 1:**

1. Develop an API using Node.js to fetch the crypto transactions of a user.
2. You can use the Etherscan API(https://docs.etherscan.io/api-endpoints/accounts) to fetch the list of “Normal” transactions for a user. You can use this address for testing:- 0xce94e5621a5f7068253c42558c147480f38b5e0d. You will have to create your own free API Key for testing purposes.
3. The input for the API will be the address of a user. The output would be the list of transactions for this address. You would also have to store these transactions against this address in a database, preferably MongoDB.

**Route**
   ```bash
   https://koinx-blockchain.onrender.com/api/getTransactionsByAddress/:WalletAddress
   ```

**Sample input**
   ```bash
   https://koinx-blockchain.onrender.com/api/getTransactionsByAddress/0xce94e5621a5f7068253c42558c147480f38b5e0d
   ```

**Task 2:**

1. Build a system within the same server to fetch the price of Ethereum every 10 minutes and store it in the database.
2. You can use this API for the same:- https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr

**Route**
   ```bash
   https://koinx-blockchain.onrender.com/api/getEthPrice
   ```

**Input**
   ```bash
   https://koinx-blockchain.onrender.com/api/getEthPrice
   ```

**Task 3:**

1. Develop a `GET` API for a user where they give their address as an input and get their current balance and current price of ether as output.
2. The balance should be calculated from the transactions of the user. If the “to” address is of the user, the “value” property gets added to the user’s balance. If the “from” address is of the user, the “value” property gets deducted from the user’s balance. These transactions are the ones that were fetched in the previous tasks.

**Route**
 ```bash
   https://koinx-blockchain.onrender.com/api/getEthBalance/:WalletAddress
   ```

**Input**
 ```bash
   https://koinx-blockchain.onrender.com/api/getEthBalance/0xce94e5621a5f7068253c42558c147480f38b5e0d+`
   ```

Please host your code on GitHub.

**Optional Tasks:-**

1. Deploy your database using MongoDB Atlas or other similar tools.
2. Deploy your backend using platforms like Heroku or any cloud platform like AWS, GCP or Azure and expose the API to the public.

**MongoDB Atlas Screenshot**

![Screenshot 2024-04-19 225227](https://github.com/Ishita-02/koinx-Blockchain/assets/88130678/809e68ed-e70b-4b14-aa9e-830b9131eb3d)

**Delployed Link:**
 ```bash
   https://koinx-blockchain.onrender.com
   ```


**Notes:-**

1. Think of this assignment as a production grade project. Using best practices, writing clean code etc. will fetch you additional points.
2. Do think well about how you want to design your database schemas.
3. We care about the usage of version control and the way you structure(and name) your commits!

Once you’re done with the task, please reply with the GitHub and Deployed Link(if done) to the same email in which you received the assignment.
