export const ABI_JSON = [
    {
        "type": "function",
        "name": "releaseDeed",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_hash"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getAllowedTime",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_hash"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "timestamp"
            }
        ]
    },
    {
        "type": "function",
        "name": "invalidateName",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "unhashedName"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "shaBid",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "hash"
            },
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "uint256",
                "name": "value"
            },
            {
                "type": "bytes32",
                "name": "salt"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": "sealedBid"
            }
        ]
    },
    {
        "type": "function",
        "name": "cancelBid",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "bidder"
            },
            {
                "type": "bytes32",
                "name": "seal"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "entries",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_hash"
            }
        ],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            },
            {
                "type": "address",
                "name": ""
            },
            {
                "type": "uint256",
                "name": ""
            },
            {
                "type": "uint256",
                "name": ""
            },
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "ens",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "unsealBid",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_hash"
            },
            {
                "type": "uint256",
                "name": "_value"
            },
            {
                "type": "bytes32",
                "name": "_salt"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferRegistrars",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_hash"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "sealedBids",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": ""
            },
            {
                "type": "bytes32",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "state",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_hash"
            }
        ],
        "outputs": [
            {
                "type": "uint8",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "transfer",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_hash"
            },
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "isAllowed",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_hash"
            },
            {
                "type": "uint256",
                "name": "_timestamp"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "allowed"
            }
        ]
    },
    {
        "type": "function",
        "name": "finalizeAuction",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_hash"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "registryStarted",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "launchLength",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "newBid",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "bytes32",
                "name": "sealedBid"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "eraseNode",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32[]",
                "name": "labels"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "startAuctions",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32[]",
                "name": "_hashes"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "acceptRegistrarTransfer",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "hash"
            },
            {
                "type": "address",
                "name": "deed"
            },
            {
                "type": "uint256",
                "name": "registrationDate"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "startAuction",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "_hash"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "rootNode",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "startAuctionsAndBid",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "bytes32[]",
                "name": "hashes"
            },
            {
                "type": "bytes32",
                "name": "sealedBid"
            }
        ],
        "outputs": []
    },
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_ens"
            },
            {
                "type": "bytes32",
                "name": "_rootNode"
            },
            {
                "type": "uint256",
                "name": "_startDate"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AuctionStarted",
        "inputs": [
            {
                "type": "bytes32",
                "name": "hash",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "registrationDate",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewBid",
        "inputs": [
            {
                "type": "bytes32",
                "name": "hash",
                "indexed": true
            },
            {
                "type": "address",
                "name": "bidder",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "deposit",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "BidRevealed",
        "inputs": [
            {
                "type": "bytes32",
                "name": "hash",
                "indexed": true
            },
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "value",
                "indexed": false
            },
            {
                "type": "uint8",
                "name": "status",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "HashRegistered",
        "inputs": [
            {
                "type": "bytes32",
                "name": "hash",
                "indexed": true
            },
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "value",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "registrationDate",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "HashReleased",
        "inputs": [
            {
                "type": "bytes32",
                "name": "hash",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "value",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "HashInvalidated",
        "inputs": [
            {
                "type": "bytes32",
                "name": "hash",
                "indexed": true
            },
            {
                "type": "string",
                "name": "name",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "value",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "registrationDate",
                "indexed": false
            }
        ]
    }
]
