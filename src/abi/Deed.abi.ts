export const ABI_JSON = [
    {
        "type": "function",
        "name": "creationDate",
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
        "name": "destroyDeed",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setOwner",
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
        "name": "registrar",
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
        "name": "value",
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
        "name": "previousOwner",
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
        "name": "setBalance",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "newValue"
            },
            {
                "type": "bool",
                "name": "throwOnFailure"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "closeDeed",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "refundRatio"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setRegistrar",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newRegistrar"
            }
        ],
        "outputs": []
    },
    {
        "type": "constructor",
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "_owner"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnerChanged",
        "inputs": [
            {
                "type": "address",
                "name": "newOwner",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "DeedClosed",
        "inputs": []
    }
]
