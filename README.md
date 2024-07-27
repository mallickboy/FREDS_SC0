<h1 align="center"> FREDS: Freedom of Expression in a Decentralized Society </h1>

https://github.com/user-attachments/assets/f50cca7d-fa6c-4b41-bbe1-b61655f3d871




# Introduction
Welcome to the FREDS (Freedom, Rights, Expression, Democracy, and Security) project, a revolutionary step towards redefining social media by prioritizing user privacy, open dialogue, and global community engagement. FREDS is a decentralized social media application designed to empower individuals around the world to express themselves freely without compromising their identity or fearing repercussions. Our mission is to provide a secure, transparent, and anonymous platform for all voices to be heard, transcending geographical boundaries, and ensuring the integrity of democratic principles. This repository contains the source code and documentation for the FREDS project, and we invite you to join us in shaping the future of online communication.
![freds](https://github.com/niladri2002/FREDS/assets/96686814/0f3f2dd8-2802-4a9b-8d88-9279aa1c58e1)

# Setting Up FREDS Development Environment

1. **Install MetaMask Extension and Create a Wallet**:
   - To get started, add the MetaMask extension to your Google Chrome browser. If you haven't used MetaMask before, follow this video tutorial: [How to Set Up MetaMask](https://youtu.be/Af_lQ1zUnoM).
   
2. **Add the Mumbai Polygon Network**:
   - Configure MetaMask to connect to the Mumbai Polygon network using the following details:
     - Network Name: Mumbai
     - New RPC URL: https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78
     - Chain ID: 80001
     - Currency Symbol: MATIC
     - Block Explorer URL: [https://mumbai.polygonscan.com](https://mumbai.polygonscan.com).
     - For detailed instructions on setting up the Mumbai Polygon network on MetaMask, refer to the [Polygon Wiki](https://wiki.polygon.technology/docs/tools/wallets/metamask/config-polygon-on-metamask/).

3. **Clone the Repository**:
   - Clone the FREDS repository to your local machine using the following command:
     ```
     git clone https://github.com/niladri2002/FREDS.git
     ```

4. **Setting Up the Frontend**:
   - Navigate to the 'frontend' directory in the cloned repository and install the necessary dependencies by running:
     ```
     npm i --force
     ```
   - This step is crucial to ensure the frontend of FREDS runs smoothly.
   - Start the frontend by using this command :
   ```
     npm start
     ```
   - The frontend will run on localhost:3000.

5. **Setting Up the Backend**:
   - Go to the 'imageurl' folder within the repository.
   - Install the required Python dependencies using the following command:
     ```
     pip install -r requirements.txt
     ```
   - Run the Flask server for text moderation and interaction with the ML model API using:
     ```
     python flask_server.py
     ```
   - The Flask server will run on localhost:5000.

**Access the Tutorial**:
For a step-by-step guide regarding how to use FREDS refer to the tutorial linked here: [FREDS Tutorial](https://youtu.be/PEVLJlpf_3M?si=uI2_WCSj88NIUJcD).

Now you're ready to be a part of the future of secure, anonymous, and open online communication.
