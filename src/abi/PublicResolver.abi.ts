export const ABI_JSON = [
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
        "name": "setText",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
            },
            {
                "type": "string",
                "name": "key"
            },
            {
                "type": "string",
                "name": "value"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "interfaceImplementer",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
            },
            {
                "type": "bytes4",
                "name": "interfaceID"
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
        "name": "ABI",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
            },
            {
                "type": "uint256",
                "name": "contentTypes"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": ""
            },
            {
                "type": "bytes",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setPubkey",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
            },
            {
                "type": "bytes32",
                "name": "x"
            },
            {
                "type": "bytes32",
                "name": "y"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setContenthash",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
            },
            {
                "type": "bytes",
                "name": "hash"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "addr",
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
        "name": "setAuthorisation",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
            },
            {
                "type": "address",
                "name": "target"
            },
            {
                "type": "bool",
                "name": "isAuthorised"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "text",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
            },
            {
                "type": "string",
                "name": "key"
            }
        ],
        "outputs": [
            {
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setABI",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
            },
            {
                "type": "uint256",
                "name": "contentType"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "name",
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
                "type": "string",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "setName",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
            },
            {
                "type": "string",
                "name": "name"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setAddr",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
            },
            {
                "type": "uint256",
                "name": "coinType"
            },
            {
                "type": "bytes",
                "name": "a"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "contenthash",
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
                "type": "bytes",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "pubkey",
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
                "type": "bytes32",
                "name": "x"
            },
            {
                "type": "bytes32",
                "name": "y"
            }
        ]
    },
    {
        "type": "function",
        "name": "setAddr",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
            },
            {
                "type": "address",
                "name": "a"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setInterface",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
            },
            {
                "type": "bytes4",
                "name": "interfaceID"
            },
            {
                "type": "address",
                "name": "implementer"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "addr",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "node"
            },
            {
                "type": "uint256",
                "name": "coinType"
            }
        ],
        "outputs": [
            {
                "type": "bytes",
                "name": ""
            }
        ]
    },
    {
        "type": "function",
        "name": "authorisations",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": ""
            },
            {
                "type": "address",
                "name": ""
            },
            {
                "type": "address",
                "name": ""
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
        "type": "constructor",
        "stateMutability": "undefined",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_ens"
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AuthorisationChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "node",
                "indexed": true
            },
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "target",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "isAuthorised",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TextChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "node",
                "indexed": true
            },
            {
                "type": "string",
                "name": "indexedKey",
                "indexed": true
            },
            {
                "type": "string",
                "name": "key",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "TextChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "node",
                "indexed": true
            },
            {
                "type": "string",
                "name": "indexedKey",
                "indexed": true
            },
            {
                "type": "string",
                "name": "key",
                "indexed": false
            },
            {
                "type": "string",
                "name": "value",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "PubkeyChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "node",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "x",
                "indexed": false
            },
            {
                "type": "bytes32",
                "name": "y",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NameChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "node",
                "indexed": true
            },
            {
                "type": "string",
                "name": "name",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "InterfaceChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "node",
                "indexed": true
            },
            {
                "type": "bytes4",
                "name": "interfaceID",
                "indexed": true
            },
            {
                "type": "address",
                "name": "implementer",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ContenthashChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "node",
                "indexed": true
            },
            {
                "type": "bytes",
                "name": "hash",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AddrChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "node",
                "indexed": true
            },
            {
                "type": "address",
                "name": "a",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AddressChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "node",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "coinType",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "newAddress",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ABIChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "node",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "contentType",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "VersionChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "node",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "newVersion",
                "indexed": false
            }
        ]
    }
]
