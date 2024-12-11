Chess Backend Project
Description
This project is a backend implementation of a Chess game built using TypeScript and Node.js. It provides RESTful APIs for managing a chess game, including initializing the board and making moves. The backend ensures move validation and manages the game state in memory.

Features
Initializes a chess game with a standard board setup.
Validates moves for chess pieces (e.g., Pawn, Rook, Knight, etc.).
Manages turn-based gameplay (White and Black).
Provides APIs to query the game state and make moves.
Built with TypeScript for type safety and scalability.

Technologies Used
TypeScript: Primary language for type-safe coding.
Node.js: Backend runtime environment.
Express.js: Web framework for building RESTful APIs.
Jest: Testing framework for unit testing.
Socket.IO (optional): For event-driven multiplayer communication.
Setup and Installation

1. Prerequisites
Ensure the following are installed on your system:

Node.js (v14 or above)
npm (comes with Node.js)
Git

2. Clone the Repository
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

3. Install Dependencies
npm install

4. Compile TypeScript
Convert TypeScript code to JavaScript:
npx tsc

5. Start the Server
Run the server:
node dist/index.js
The server will start at http://localhost:3000.
