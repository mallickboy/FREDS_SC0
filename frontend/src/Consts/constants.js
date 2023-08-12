const contract_address="0xa03179B8878C0D7E315FBcb50116a1b426839a42"
const adminAddress=    "0x3C6E370AB799bCCD51319368Ff6d78537028202d"
const contract_abi=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "heading",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "body",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "image",
				"type": "string"
			}
		],
		"name": "addPost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "comment",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "deletePost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "downvote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "profileImage",
				"type": "string"
			}
		],
		"name": "registerUser",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "upvote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isRegistered",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ReturnPosts",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "publicAdd",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "heading",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "body",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "image",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "comments",
						"type": "string[]"
					},
					{
						"internalType": "uint256",
						"name": "upvote",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "downvote",
						"type": "uint256"
					}
				],
				"internalType": "struct SocialMedia.post[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "returnUser",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "userName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "profilePic",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "postCount",
						"type": "uint256"
					}
				],
				"internalType": "struct SocialMedia.profile",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];
  export { contract_address, contract_abi,adminAddress}