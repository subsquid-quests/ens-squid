export const ABI_JSON = [
    {
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_base"
            },
            {
                "type": "address",
                "name": "_prices"
            },
            {
                "type": "uint256",
                "name": "_minCommitmentAge"
            },
            {
                "type": "uint256",
                "name": "_maxCommitmentAge"
            },
            {
                "type": "address",
                "name": "_reverseRegistrar"
            },
            {
                "type": "address",
                "name": "_nameWrapper"
            }
        ]
    },
    {
        "type": "error",
        "name": "CommitmentTooNew",
        "inputs": [
            {
                "type": "bytes32",
                "name": "commitment"
            }
        ]
    },
    {
        "type": "error",
        "name": "CommitmentTooOld",
        "inputs": [
            {
                "type": "bytes32",
                "name": "commitment"
            }
        ]
    },
    {
        "type": "error",
        "name": "DurationTooShort",
        "inputs": [
            {
                "type": "uint256",
                "name": "duration"
            }
        ]
    },
    {
        "type": "error",
        "name": "InsufficientValue",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MaxCommitmentAgeTooHigh",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MaxCommitmentAgeTooLow",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NameNotAvailable",
        "inputs": [
            {
                "type": "string",
                "name": "name"
            }
        ]
    },
    {
        "type": "error",
        "name": "ResolverRequiredWhenDataSupplied",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UnexpiredCommitmentExists",
        "inputs": [
            {
                "type": "bytes32",
                "name": "commitment"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NameRegistered",
        "inputs": [
            {
                "type": "string",
                "name": "name",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "label",
                "indexed": true
            },
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "baseCost",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "premium",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "expires",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NameRenewed",
        "inputs": [
            {
                "type": "string",
                "name": "name",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "label",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "cost",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "expires",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "previousOwner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newOwner",
                "indexed": true
            }
        ]
    },
    {
        "type": "function",
        "name": "MIN_REGISTRATION_DURATION",
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
        "name": "available",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "name"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "commit",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "commitment"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "commitments",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "makeCommitment",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "name"
            },
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "uint256",
                "name": "duration"
            },
            {
                "type": "bytes32",
                "name": "secret"
            },
            {
                "type": "address",
                "name": "resolver"
            },
            {
                "type": "bytes[]",
                "name": "data"
            },
            {
                "type": "bool",
                "name": "reverseRecord"
            },
            {
                "type": "uint16",
                "name": "ownerControlledFuses"
            }
        ],
        "outputs": [
            {
                "type": "bytes32",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "maxCommitmentAge",
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
        "name": "minCommitmentAge",
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
        "name": "nameWrapper",
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
        "name": "owner",
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
        "name": "prices",
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
        "name": "recoverFunds",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_token"
            },
            {
                "type": "address",
                "name": "_to"
            },
            {
                "type": "uint256",
                "name": "_amount"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "register",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "string",
                "name": "name"
            },
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "uint256",
                "name": "duration"
            },
            {
                "type": "bytes32",
                "name": "secret"
            },
            {
                "type": "address",
                "name": "resolver"
            },
            {
                "type": "bytes[]",
                "name": "data"
            },
            {
                "type": "bool",
                "name": "reverseRecord"
            },
            {
                "type": "uint16",
                "name": "ownerControlledFuses"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "renew",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "string",
                "name": "name"
            },
            {
                "type": "uint256",
                "name": "duration"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "rentPrice",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "name"
            },
            {
                "type": "uint256",
                "name": "duration"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "price",
                "components": [
                    {
                        "type": "uint256",
                        "name": "base"
                    },
                    {
                        "type": "uint256",
                        "name": "premium"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "reverseRegistrar",
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
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceID"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "valid",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "name"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "withdraw",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    }
]
