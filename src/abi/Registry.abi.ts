export const ABI_JSON = [
    {
        "type": "function",
        "name": "resolver",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
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
        "name": "owner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
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
        "name": "setSubnodeOwner",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
            },
            {
                "type": "bytes32",
                "name": "label"
            },
            {
                "type": "address",
                "name": "owner"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setTTL",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
            },
            {
                "type": "uint64",
                "name": "ttl"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "ttl",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
            }
        ],
        "outputs": [
            {
                "type": "uint64",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setResolver",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
            },
            {
                "type": "address",
                "name": "resolver"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setOwner",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
            },
            {
                "type": "address",
                "name": "owner"
            }
        ],
        "outputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Transfer",
        "inputs": [
            {
                "type": "bytes32",
                "name": "node",
                "indexed": true
            },
            {
                "type": "address",
                "name": "owner",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewOwner",
        "inputs": [
            {
                "type": "bytes32",
                "name": "node",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "label",
                "indexed": true
            },
            {
                "type": "address",
                "name": "owner",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewResolver",
        "inputs": [
            {
                "type": "bytes32",
                "name": "node",
                "indexed": true
            },
            {
                "type": "address",
                "name": "resolver",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NewTTL",
        "inputs": [
            {
                "type": "bytes32",
                "name": "node",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "ttl",
                "indexed": false
            }
        ]
    }
]
