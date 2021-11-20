/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LegendaryEpicBoosterUnpack,
  LegendaryEpicBoosterUnpackInterface,
} from "../LegendaryEpicBoosterUnpack";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "contract IMouseHero",
        name: "_nft",
        type: "address",
      },
      {
        internalType: "contract IBooster",
        name: "_legendaryBooster",
        type: "address",
      },
      {
        internalType: "contract IBooster",
        name: "_epicBooster",
        type: "address",
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
        indexed: true,
        internalType: "contract IBooster",
        name: "booster",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "enum Rarity",
        name: "rarity",
        type: "uint8",
      },
    ],
    name: "Unpack",
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
    name: "PERCENTAGE_THOUSAND",
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
    name: "PERCENTAGE_THOUSAND_EPIC",
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
    name: "epicBooster",
    outputs: [
      {
        internalType: "contract IBooster",
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
        internalType: "contract IBooster",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nft",
    outputs: [
      {
        internalType: "contract IMouseHero",
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
    inputs: [],
    name: "renounceOwnership",
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
    inputs: [
      {
        internalType: "contract IBooster",
        name: "booster",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "unpack",
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
];

const _bytecode =
  "0x60c060405260006001553480156200001657600080fd5b5060405162001b8038038062001b8083398181016040528101906200003c919062000391565b60008060006101000a81548160ff021916908315150217905550620000766200006a6200014060201b60201c565b6200014860201b60201c565b62000087846200020d60201b60201c565b82600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1660601b815250508073ffffffffffffffffffffffffffffffffffffffff1660a08173ffffffffffffffffffffffffffffffffffffffff1660601b8152505050505050620005c2565b600033905090565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6200021d6200014060201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620002436200032360201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16146200029c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000293906200046d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156200030f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040162000306906200044b565b60405180910390fd5b62000320816200014860201b60201c565b50565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000815190506200035d8162000574565b92915050565b60008151905062000374816200058e565b92915050565b6000815190506200038b81620005a8565b92915050565b60008060008060808587031215620003a857600080fd5b6000620003b8878288016200034c565b9450506020620003cb878288016200037a565b9350506040620003de8782880162000363565b9250506060620003f18782880162000363565b91505092959194509250565b60006200040c6026836200048f565b91506200041982620004fc565b604082019050919050565b6000620004336020836200048f565b915062000440826200054b565b602082019050919050565b600060208201905081810360008301526200046681620003fd565b9050919050565b60006020820190508181036000830152620004888162000424565b9050919050565b600082825260208201905092915050565b6000620004ad82620004dc565b9050919050565b6000620004c182620004a0565b9050919050565b6000620004d582620004a0565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6200057f81620004a0565b81146200058b57600080fd5b50565b6200059981620004b4565b8114620005a557600080fd5b50565b620005b381620004c8565b8114620005bf57600080fd5b50565b60805160601c60a05160601c61157d62000603600039600081816103a9015261081101526000818161035401528181610934015261095a015261157d6000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80638456cb59116100715780638456cb59146101435780638da5cb5b1461014d578063d24f3c5b1461016b578063e60e9d5e14610189578063f2fde38b146101a7578063f3213185146101c3576100b4565b8063022a3268146100b95780633f4ba83a146100d557806345b12d4a146100df57806347ccca02146100fd5780635c975abb1461011b578063715018a614610139575b600080fd5b6100d360048036038101906100ce9190610cd1565b6101e1565b005b6100dd61060f565b005b6100e7610695565b6040516100f491906110a5565b60405180910390f35b61010561069c565b6040516101129190610faa565b60405180910390f35b6101236106c2565b6040516101309190610f74565b60405180910390f35b6101416106d8565b005b61014b610760565b005b6101556107e6565b6040516101629190610f07565b60405180910390f35b61017361080f565b6040516101809190610f8f565b60405180910390f35b610191610833565b60405161019e91906110a5565b60405180910390f35b6101c160048036038101906101bc9190610ca8565b61083a565b005b6101cb610932565b6040516101d89190610f8f565b60405180910390f35b6101e96106c2565b15610229576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161022090611045565b60405180910390fd5b670de0b6b3a76400008273ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b815260040161026b9190610f07565b60206040518083038186803b15801561028357600080fd5b505afa158015610297573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102bb9190610d0d565b10156102fc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f390611085565b60405180910390fd5b6000670de0b6b3a76400008261031291906112de565b14610352576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034990611005565b60405180910390fd5b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614806103f757507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16145b610436576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042d90611025565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166379cc679033836040518363ffffffff1660e01b8152600401610471929190610f4b565b600060405180830381600087803b15801561048b57600080fd5b505af115801561049f573d6000803e3d6000fd5b505050506000670de0b6b3a7640000826104b99190611127565b905060005b818110156106095760006104d185610956565b905080600381111561050c577f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b3373ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff167fa5d52a70cdfb7f1fa79f200371db8b49f2c01575c1136137b62637f6c685262b60405160405180910390a4600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663761c4c4033836040518363ffffffff1660e01b81526004016105c3929190610f22565b600060405180830381600087803b1580156105dd57600080fd5b505af11580156105f1573d6000803e3d6000fd5b505050505080806106019061125d565b9150506104be565b50505050565b6106176109d9565b73ffffffffffffffffffffffffffffffffffffffff166106356107e6565b73ffffffffffffffffffffffffffffffffffffffff161461068b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068290611065565b60405180910390fd5b6106936109e1565b565b620186a081565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900460ff16905090565b6106e06109d9565b73ffffffffffffffffffffffffffffffffffffffff166106fe6107e6565b73ffffffffffffffffffffffffffffffffffffffff1614610754576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074b90611065565b60405180910390fd5b61075e6000610a82565b565b6107686109d9565b73ffffffffffffffffffffffffffffffffffffffff166107866107e6565b73ffffffffffffffffffffffffffffffffffffffff16146107dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107d390611065565b60405180910390fd5b6107e4610b47565b565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b7f000000000000000000000000000000000000000000000000000000000000000081565b620182b881565b6108426109d9565b73ffffffffffffffffffffffffffffffffffffffff166108606107e6565b73ffffffffffffffffffffffffffffffffffffffff16146108b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108ad90611065565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610926576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091d90610fe5565b60405180910390fd5b61092f81610a82565b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156109b557600090506109d4565b620182b86109c1610be9565b106109cf57600090506109d4565b600190505b919050565b600033905090565b6109e96106c2565b610a28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a1f90610fc5565b60405180910390fd5b60008060006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610a6b6109d9565b604051610a789190610f07565b60405180910390a1565b60008060019054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600060016101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b610b4f6106c2565b15610b8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b8690611045565b60405180910390fd5b60016000806101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610bd26109d9565b604051610bdf9190610f07565b60405180910390a1565b60006001806000828254610bfd91906110d1565b92505081905550620186a060015433600143610c199190611158565b40604051602001610c2c93929190610eca565b6040516020818303038152906040528051906020012060001c610c4f91906112de565b905090565b600081359050610c6381611502565b92915050565b600081359050610c7881611519565b92915050565b600081359050610c8d81611530565b92915050565b600081519050610ca281611530565b92915050565b600060208284031215610cba57600080fd5b6000610cc884828501610c54565b91505092915050565b60008060408385031215610ce457600080fd5b6000610cf285828601610c69565b9250506020610d0385828601610c7e565b9150509250929050565b600060208284031215610d1f57600080fd5b6000610d2d84828501610c93565b91505092915050565b610d3f8161118c565b82525050565b610d56610d518261118c565b6112a6565b82525050565b610d658161119e565b82525050565b610d7c610d77826111aa565b6112b8565b82525050565b610d8b81611203565b82525050565b610d9a81611227565b82525050565b610da98161124b565b82525050565b6000610dbc6014836110c0565b9150610dc7826113a9565b602082019050919050565b6000610ddf6026836110c0565b9150610dea826113d2565b604082019050919050565b6000610e02600e836110c0565b9150610e0d82611421565b602082019050919050565b6000610e25600f836110c0565b9150610e308261144a565b602082019050919050565b6000610e486010836110c0565b9150610e5382611473565b602082019050919050565b6000610e6b6020836110c0565b9150610e768261149c565b602082019050919050565b6000610e8e6013836110c0565b9150610e99826114c5565b602082019050919050565b610ead816111f9565b82525050565b610ec4610ebf826111f9565b6112d4565b82525050565b6000610ed68286610eb3565b602082019150610ee68285610d45565b601482019150610ef68284610d6b565b602082019150819050949350505050565b6000602082019050610f1c6000830184610d36565b92915050565b6000604082019050610f376000830185610d36565b610f446020830184610da0565b9392505050565b6000604082019050610f606000830185610d36565b610f6d6020830184610ea4565b9392505050565b6000602082019050610f896000830184610d5c565b92915050565b6000602082019050610fa46000830184610d82565b92915050565b6000602082019050610fbf6000830184610d91565b92915050565b60006020820190508181036000830152610fde81610daf565b9050919050565b60006020820190508181036000830152610ffe81610dd2565b9050919050565b6000602082019050818103600083015261101e81610df5565b9050919050565b6000602082019050818103600083015261103e81610e18565b9050919050565b6000602082019050818103600083015261105e81610e3b565b9050919050565b6000602082019050818103600083015261107e81610e5e565b9050919050565b6000602082019050818103600083015261109e81610e81565b9050919050565b60006020820190506110ba6000830184610ea4565b92915050565b600082825260208201905092915050565b60006110dc826111f9565b91506110e7836111f9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561111c5761111b61130f565b5b828201905092915050565b6000611132826111f9565b915061113d836111f9565b92508261114d5761114c61133e565b5b828204905092915050565b6000611163826111f9565b915061116e836111f9565b9250828210156111815761118061130f565b5b828203905092915050565b6000611197826111d9565b9050919050565b60008115159050919050565b6000819050919050565b60006111bf8261118c565b9050919050565b60008190506111d4826114ee565b919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600061120e82611215565b9050919050565b6000611220826111d9565b9050919050565b600061123282611239565b9050919050565b6000611244826111d9565b9050919050565b6000611256826111c6565b9050919050565b6000611268826111f9565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561129b5761129a61130f565b5b600182019050919050565b60006112b1826112c2565b9050919050565b6000819050919050565b60006112cd8261139c565b9050919050565b6000819050919050565b60006112e9826111f9565b91506112f4836111f9565b9250826113045761130361133e565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60008160601b9050919050565b7f5061757361626c653a206e6f7420706175736564000000000000000000000000600082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f496e76616c696420616d6f756e74000000000000000000000000000000000000600082015250565b7f496e76616c696420626f6f737465720000000000000000000000000000000000600082015250565b7f5061757361626c653a2070617573656400000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f4e6f7420656e6f75676820626f6f737465727300000000000000000000000000600082015250565b600481106114ff576114fe61136d565b5b50565b61150b8161118c565b811461151657600080fd5b50565b611522816111b4565b811461152d57600080fd5b50565b611539816111f9565b811461154457600080fd5b5056fea26469706673582212209f510cb08cb331f13cd3557d6a1010f94e0ec3cab1b94856dd6e0410e078279364736f6c63430008040033";

export class LegendaryEpicBoosterUnpack__factory extends ContractFactory {
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
    owner: string,
    _nft: string,
    _legendaryBooster: string,
    _epicBooster: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LegendaryEpicBoosterUnpack> {
    return super.deploy(
      owner,
      _nft,
      _legendaryBooster,
      _epicBooster,
      overrides || {}
    ) as Promise<LegendaryEpicBoosterUnpack>;
  }
  getDeployTransaction(
    owner: string,
    _nft: string,
    _legendaryBooster: string,
    _epicBooster: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      owner,
      _nft,
      _legendaryBooster,
      _epicBooster,
      overrides || {}
    );
  }
  attach(address: string): LegendaryEpicBoosterUnpack {
    return super.attach(address) as LegendaryEpicBoosterUnpack;
  }
  connect(signer: Signer): LegendaryEpicBoosterUnpack__factory {
    return super.connect(signer) as LegendaryEpicBoosterUnpack__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LegendaryEpicBoosterUnpackInterface {
    return new utils.Interface(_abi) as LegendaryEpicBoosterUnpackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LegendaryEpicBoosterUnpack {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LegendaryEpicBoosterUnpack;
  }
}