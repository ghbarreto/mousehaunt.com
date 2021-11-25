/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BoosterSale, BoosterSaleInterface } from "../BoosterSale";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_boosterOwner",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_busd",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_legendaryBooster",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_epicBooster",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "legendaryBoosterPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "epicBoosterPrice",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "boosterOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "busd",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "booster",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_numberOfBoostersInWei",
        type: "uint256",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "epicBooster",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "legendaryBooster",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "prices",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_buyers",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "legendaryAllowances",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "epicAllowances",
        type: "uint256[]",
      },
    ],
    name: "setWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "whitelist",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b50604051620023e5380380620023e58339818101604052810190620000389190620004dd565b60008060006101000a81548160ff0219169083151502179055506200007262000066620001e760201b60201c565b620001ef60201b60201c565b6200008386620002b460201b60201c565b8573ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250508473ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff16815250508373ffffffffffffffffffffffffffffffffffffffff1660e08173ffffffffffffffffffffffffffffffffffffffff16815250508273ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff168152505081600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050505050505062000694565b600033905090565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620002c4620001e760201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620002ea620003ca60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff161462000343576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200033a90620005da565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415620003b6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003ad9062000672565b60405180910390fd5b620003c781620001ef60201b60201c565b50565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200042582620003f8565b9050919050565b620004378162000418565b81146200044357600080fd5b50565b60008151905062000457816200042c565b92915050565b60006200046a8262000418565b9050919050565b6200047c816200045d565b81146200048857600080fd5b50565b6000815190506200049c8162000471565b92915050565b6000819050919050565b620004b781620004a2565b8114620004c357600080fd5b50565b600081519050620004d781620004ac565b92915050565b60008060008060008060c08789031215620004fd57620004fc620003f3565b5b60006200050d89828a0162000446565b96505060206200052089828a016200048b565b95505060406200053389828a016200048b565b94505060606200054689828a016200048b565b93505060806200055989828a01620004c6565b92505060a06200056c89828a01620004c6565b9150509295509295509295565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000620005c260208362000579565b9150620005cf826200058a565b602082019050919050565b60006020820190508181036000830152620005f581620005b3565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006200065a60268362000579565b91506200066782620005fc565b604082019050919050565b600060208201905081810360008301526200068d816200064b565b9050919050565b60805160a05160c05160e051611cf4620006f1600039600081816103cb0152610bc00152600081816104ac0152610aa401526000818161052701526109f301526000818161066f015281816109870152610a3d0152611cf46000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638da5cb5b1161008c578063cfed246b11610066578063cfed246b146101ed578063d24f3c5b1461021d578063f2fde38b1461023b578063f321318514610257576100ea565b80638da5cb5b14610183578063b092145e146101a1578063cce7ec13146101d1576100ea565b80635c975abb116100c85780635c975abb14610133578063715018a6146101515780637532ed2b1461015b5780638456cb5914610179576100ea565b806306c84701146100ef5780633ca5b2341461010b5780633f4ba83a14610129575b600080fd5b610109600480360381019061010491906111ad565b610275565b005b610113610525565b60405161012091906112e0565b60405180910390f35b610131610549565b005b61013b6105cf565b6040516101489190611316565b60405180910390f35b6101596105e5565b005b61016361066d565b6040516101709190611352565b60405180910390f35b610181610691565b005b61018b610717565b6040516101989190611352565b60405180910390f35b6101bb60048036038101906101b691906113d7565b610740565b6040516101c89190611430565b60405180910390f35b6101eb60048036038101906101e69190611477565b610765565b005b610207600480360381019061020291906114b7565b610a8a565b6040516102149190611430565b60405180910390f35b610225610aa2565b60405161023291906112e0565b60405180910390f35b610255600480360381019061025091906114e4565b610ac6565b005b61025f610bbe565b60405161026c91906112e0565b60405180910390f35b61027d610be2565b73ffffffffffffffffffffffffffffffffffffffff1661029b610717565b73ffffffffffffffffffffffffffffffffffffffff16146102f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e89061156e565b60405180910390fd5b6102f96105cf565b15610339576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610330906115da565b60405180910390fd5b60005b8686905081101561051c5784848281811061035a576103596115fa565b5b9050602002013560026000898985818110610378576103776115fa565b5b905060200201602081019061038d91906114e4565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082828281811061043b5761043a6115fa565b5b9050602002013560026000898985818110610459576104586115fa565b5b905060200201602081019061046e91906114e4565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550808061051490611658565b91505061033c565b50505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b610551610be2565b73ffffffffffffffffffffffffffffffffffffffff1661056f610717565b73ffffffffffffffffffffffffffffffffffffffff16146105c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105bc9061156e565b60405180910390fd5b6105cd610bea565b565b60008060009054906101000a900460ff16905090565b6105ed610be2565b73ffffffffffffffffffffffffffffffffffffffff1661060b610717565b73ffffffffffffffffffffffffffffffffffffffff1614610661576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106589061156e565b60405180910390fd5b61066b6000610c8b565b565b7f000000000000000000000000000000000000000000000000000000000000000081565b610699610be2565b73ffffffffffffffffffffffffffffffffffffffff166106b7610717565b73ffffffffffffffffffffffffffffffffffffffff161461070d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107049061156e565b60405180910390fd5b610715610d50565b565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6002602052816000526040600020602052806000526040600020600091509150505481565b61076d6105cf565b156107ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a4906115da565b60405180910390fd5b6000670de0b6b3a7640000826107c391906116d0565b905080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015610884576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161087b9061174d565b60405180910390fd5b670de0b6b3a764000082101580156108af57506000670de0b6b3a7640000836108ad919061176d565b145b6108ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e5906117ea565b60405180910390fd5b80600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461097a919061180a565b92505081905550610a38337f0000000000000000000000000000000000000000000000000000000000000000600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054846109f1919061183e565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16610df2909392919063ffffffff16565b610a857f000000000000000000000000000000000000000000000000000000000000000033848673ffffffffffffffffffffffffffffffffffffffff16610df2909392919063ffffffff16565b505050565b60016020528060005260406000206000915090505481565b7f000000000000000000000000000000000000000000000000000000000000000081565b610ace610be2565b73ffffffffffffffffffffffffffffffffffffffff16610aec610717565b73ffffffffffffffffffffffffffffffffffffffff1614610b42576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b399061156e565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610bb2576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba99061190a565b60405180910390fd5b610bbb81610c8b565b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b600033905090565b610bf26105cf565b610c31576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c2890611976565b60405180910390fd5b60008060006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610c74610be2565b604051610c819190611352565b60405180910390a1565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610d586105cf565b15610d98576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8f906115da565b60405180910390fd5b60016000806101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610ddb610be2565b604051610de89190611352565b60405180910390a1565b610e75846323b872dd60e01b858585604051602401610e1393929190611996565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610e7b565b50505050565b6000610edd826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16610f429092919063ffffffff16565b9050600081511115610f3d5780806020019051810190610efd91906119f9565b610f3c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3390611a98565b60405180910390fd5b5b505050565b6060610f518484600085610f5a565b90509392505050565b606082471015610f9f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f9690611b2a565b60405180910390fd5b610fa88561106e565b610fe7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fde90611b96565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516110109190611c30565b60006040518083038185875af1925050503d806000811461104d576040519150601f19603f3d011682016040523d82523d6000602084013e611052565b606091505b5091509150611062828286611081565b92505050949350505050565b600080823b905060008111915050919050565b60608315611091578290506110e1565b6000835111156110a45782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d89190611c9c565b60405180910390fd5b9392505050565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f840112611117576111166110f2565b5b8235905067ffffffffffffffff811115611134576111336110f7565b5b6020830191508360208202830111156111505761114f6110fc565b5b9250929050565b60008083601f84011261116d5761116c6110f2565b5b8235905067ffffffffffffffff81111561118a576111896110f7565b5b6020830191508360208202830111156111a6576111a56110fc565b5b9250929050565b600080600080600080606087890312156111ca576111c96110e8565b5b600087013567ffffffffffffffff8111156111e8576111e76110ed565b5b6111f489828a01611101565b9650965050602087013567ffffffffffffffff811115611217576112166110ed565b5b61122389828a01611157565b9450945050604087013567ffffffffffffffff811115611246576112456110ed565b5b61125289828a01611157565b92509250509295509295509295565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006112a66112a161129c84611261565b611281565b611261565b9050919050565b60006112b88261128b565b9050919050565b60006112ca826112ad565b9050919050565b6112da816112bf565b82525050565b60006020820190506112f560008301846112d1565b92915050565b60008115159050919050565b611310816112fb565b82525050565b600060208201905061132b6000830184611307565b92915050565b600061133c82611261565b9050919050565b61134c81611331565b82525050565b60006020820190506113676000830184611343565b92915050565b61137681611331565b811461138157600080fd5b50565b6000813590506113938161136d565b92915050565b60006113a482611331565b9050919050565b6113b481611399565b81146113bf57600080fd5b50565b6000813590506113d1816113ab565b92915050565b600080604083850312156113ee576113ed6110e8565b5b60006113fc85828601611384565b925050602061140d858286016113c2565b9150509250929050565b6000819050919050565b61142a81611417565b82525050565b60006020820190506114456000830184611421565b92915050565b61145481611417565b811461145f57600080fd5b50565b6000813590506114718161144b565b92915050565b6000806040838503121561148e5761148d6110e8565b5b600061149c858286016113c2565b92505060206114ad85828601611462565b9150509250929050565b6000602082840312156114cd576114cc6110e8565b5b60006114db848285016113c2565b91505092915050565b6000602082840312156114fa576114f96110e8565b5b600061150884828501611384565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611558602083611511565b915061156382611522565b602082019050919050565b600060208201905081810360008301526115878161154b565b9050919050565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b60006115c4601083611511565b91506115cf8261158e565b602082019050919050565b600060208201905081810360008301526115f3816115b7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061166382611417565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561169657611695611629565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006116db82611417565b91506116e683611417565b9250826116f6576116f56116a1565b5b828204905092915050565b7f426f6f7374657253616c653a2061626f76652063617000000000000000000000600082015250565b6000611737601683611511565b915061174282611701565b602082019050919050565b600060208201905081810360008301526117668161172a565b9050919050565b600061177882611417565b915061178383611417565b925082611793576117926116a1565b5b828206905092915050565b7f426f6f7374657253616c653a20696e76616c696420616d6f756e740000000000600082015250565b60006117d4601b83611511565b91506117df8261179e565b602082019050919050565b60006020820190508181036000830152611803816117c7565b9050919050565b600061181582611417565b915061182083611417565b92508282101561183357611832611629565b5b828203905092915050565b600061184982611417565b915061185483611417565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561188d5761188c611629565b5b828202905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006118f4602683611511565b91506118ff82611898565b604082019050919050565b60006020820190508181036000830152611923816118e7565b9050919050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b6000611960601483611511565b915061196b8261192a565b602082019050919050565b6000602082019050818103600083015261198f81611953565b9050919050565b60006060820190506119ab6000830186611343565b6119b86020830185611343565b6119c56040830184611421565b949350505050565b6119d6816112fb565b81146119e157600080fd5b50565b6000815190506119f3816119cd565b92915050565b600060208284031215611a0f57611a0e6110e8565b5b6000611a1d848285016119e4565b91505092915050565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b6000611a82602a83611511565b9150611a8d82611a26565b604082019050919050565b60006020820190508181036000830152611ab181611a75565b9050919050565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b6000611b14602683611511565b9150611b1f82611ab8565b604082019050919050565b60006020820190508181036000830152611b4381611b07565b9050919050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000611b80601d83611511565b9150611b8b82611b4a565b602082019050919050565b60006020820190508181036000830152611baf81611b73565b9050919050565b600081519050919050565b600081905092915050565b60005b83811015611bea578082015181840152602081019050611bcf565b83811115611bf9576000848401525b50505050565b6000611c0a82611bb6565b611c148185611bc1565b9350611c24818560208601611bcc565b80840191505092915050565b6000611c3c8284611bff565b915081905092915050565b600081519050919050565b6000601f19601f8301169050919050565b6000611c6e82611c47565b611c788185611511565b9350611c88818560208601611bcc565b611c9181611c52565b840191505092915050565b60006020820190508181036000830152611cb68184611c63565b90509291505056fea2646970667358221220c8c71197ae00a51d1575a75c52df843cc0600e7a569d93b70724ead8db2e026864736f6c63430008090033";

export class BoosterSale__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _boosterOwner: string,
    _busd: string,
    _legendaryBooster: string,
    _epicBooster: string,
    legendaryBoosterPrice: BigNumberish,
    epicBoosterPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BoosterSale> {
    return super.deploy(
      _boosterOwner,
      _busd,
      _legendaryBooster,
      _epicBooster,
      legendaryBoosterPrice,
      epicBoosterPrice,
      overrides || {}
    ) as Promise<BoosterSale>;
  }
  getDeployTransaction(
    _boosterOwner: string,
    _busd: string,
    _legendaryBooster: string,
    _epicBooster: string,
    legendaryBoosterPrice: BigNumberish,
    epicBoosterPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _boosterOwner,
      _busd,
      _legendaryBooster,
      _epicBooster,
      legendaryBoosterPrice,
      epicBoosterPrice,
      overrides || {}
    );
  }
  attach(address: string): BoosterSale {
    return super.attach(address) as BoosterSale;
  }
  connect(signer: Signer): BoosterSale__factory {
    return super.connect(signer) as BoosterSale__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoosterSaleInterface {
    return new utils.Interface(_abi) as BoosterSaleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoosterSale {
    return new Contract(address, _abi, signerOrProvider) as BoosterSale;
  }
}
