const contract_address="0xb27575173E19D8C61F6A77B6368a9B985A27fA20"
const adminAddress=    "0x3C6E370AB799bCCD51319368Ff6d78537028202d"
const contract_abi=[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "userId",
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
		"name": "downvote",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
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
		"name": "ReturnPosts",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "userId",
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
	}
];
  export { contract_address, contract_abi,adminAddress}