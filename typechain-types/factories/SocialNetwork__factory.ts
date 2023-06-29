/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { SocialNetwork, SocialNetworkInterface } from "../SocialNetwork";
import type { PromiseOrValue } from "../common";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [],
    name: "getLastPostId",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_postId",
        type: "uint256",
      },
    ],
    name: "getPost",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "postId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "totalLikes",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "isLike",
            type: "uint256",
          },
        ],
        internalType: "struct ISocialNetwork.PostDetail",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "order",
        type: "uint256",
      },
    ],
    name: "getPosts",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "postId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "author",
            type: "address",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "totalLikes",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "time",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "isLike",
            type: "uint256",
          },
        ],
        internalType: "struct ISocialNetwork.PostDetail[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_postId",
        type: "uint256",
      },
    ],
    name: "like",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    name: "post",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_postId",
        type: "uint256",
      },
    ],
    name: "unlike",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610f5f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c80638ee93cf3116100505780638ee93cf3146100d5578063d5ccb909146100e8578063e82935da146100fe57600080fd5b80631d45cddc1461007757806340731c24146100a057806374d21ae0146100c0575b600080fd5b61008a610085366004610b60565b610111565b6040516100979190610c05565b60405180910390f35b6100b36100ae366004610b60565b6104dd565b6040516100979190610c67565b6100d36100ce366004610b60565b61052e565b005b6100d36100e3366004610c97565b610713565b6100f06107d7565b604051908152602001610097565b6100d361010c366004610b60565b61083d565b606081600114158015610125575081600214155b8015610132575081600314155b801561013f575081600414155b156101915760405162461bcd60e51b815260206004820152601560248201527f4f726465722076616c75652069732077726f6e672e000000000000000000000060448201526064015b60405180910390fd5b6000805467ffffffffffffffff8111156101ad576101ad610c81565b60405190808252806020026020018201604052801561022057816020015b61020d6040518060c001604052806000815260200160006001600160a01b03168152602001606081526020016000815260200160008152602001600081525090565b8152602001906001900390816101cb5790505b50905060005b6000548110156104d657600061023b8261092a565b905084600103610268578083838151811061025857610258610d48565b60200260200101819052506104c2565b8460020361029f5780838360016000805490506102859190610d74565b61028f9190610d74565b8151811061025857610258610d48565b846003036103bb57816000036102d45780836000815181106102c3576102c3610d48565b6020026020010181905250506104c4565b8160005b83811015610323578481815181106102f2576102f2610d48565b6020026020010151606001518360600151111561031157809150610323565b8061031b81610d87565b9150506102d8565b506000610331600185610d74565b90505b8181106103965784818151811061034d5761034d610d48565b6020026020010151858260016103639190610da0565b8151811061037357610373610d48565b60209081029190910101528015610396578061038e81610db3565b915050610334565b50818482815181106103aa576103aa610d48565b6020026020010181905250506104c2565b846004036104c257816000036103df5780836000815181106102c3576102c3610d48565b8160005b8381101561042e578481815181106103fd576103fd610d48565b6020026020010151606001518360600151101561041c5780915061042e565b8061042681610d87565b9150506103e3565b50600061043c600185610d74565b90505b8181106104a15784818151811061045857610458610d48565b60200260200101518582600161046e9190610da0565b8151811061047e5761047e610d48565b602090810291909101015280156104a1578061049981610db3565b91505061043f565b50818482815181106104b5576104b5610d48565b6020026020010181905250505b505b806104ce81610d87565b915050610226565b5092915050565b61051f6040518060c001604052806000815260200160006001600160a01b03168152602001606081526020016000815260200160008152602001600081525090565b6105288261092a565b92915050565b60001960005b60008381526001602052604090205481101561059d57600083815260016020526040902080543391908390811061056d5761056d610d48565b6000918252602090912001546001600160a01b03160361058b578091505b8061059581610d87565b915050610534565b5060001981036105ef5760405162461bcd60e51b815260206004820152601160248201527f4e6f7420616c7265616479206c696b65640000000000000000000000000000006044820152606401610188565b805b60008381526001602081905260409091205461060d9190610d74565b8110156106c257600083815260016020819052604090912090610631908390610da0565b8154811061064157610641610d48565b60009182526020808320909101548583526001909152604090912080546001600160a01b03909216918390811061067a5761067a610d48565b6000918252602090912001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055806106ba81610d87565b9150506105f1565b5060008281526001602052604090208054806106e0576106e0610dca565b6000828152602090208101600019908101805473ffffffffffffffffffffffffffffffffffffffff191690550190555050565b604080516060810182523381526020810183815242928201929092526000805460018101825590805281517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5636003909202918201805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0390921691909117815592519192839290917f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56401906107c69082610e69565b506040820151816002015550505050565b6000805481036108295760405162461bcd60e51b815260206004820152601560248201527f506f73747320646f6573206e6f742065786973742e00000000000000000000006044820152606401610188565b60005461083890600190610d74565b905090565b60005b6000828152600160205260409020548110156108ed57600082815260016020526040902080543391908390811061087957610879610d48565b6000918252602090912001546001600160a01b0316036108db5760405162461bcd60e51b815260206004820152600d60248201527f416c7265616479206c696b6564000000000000000000000000000000000000006044820152606401610188565b806108e581610d87565b915050610840565b506000908152600160208181526040832080549283018155835290912001805473ffffffffffffffffffffffffffffffffffffffff191633179055565b61096c6040518060c001604052806000815260200160006001600160a01b03168152602001606081526020016000815260200160008152602001600081525090565b600080838154811061098057610980610d48565b6000918252602091829020604080516060810190915260039092020180546001600160a01b0316825260018101805492939192918401916109c090610de0565b80601f01602080910402602001604051908101604052809291908181526020018280546109ec90610de0565b8015610a395780601f10610a0e57610100808354040283529160200191610a39565b820191906000526020600020905b815481529060010190602001808311610a1c57829003601f168201915b5050509183525050600291909101546020918201526000858152600182526040808220805482518186028101860190935280835294955091939092830182828015610aad57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610a8f575b5050505050905060006001905060005b8251811015610b0f57336001600160a01b0316838281518110610ae257610ae2610d48565b60200260200101516001600160a01b031603610afd57600291505b80610b0781610d87565b915050610abd565b506040805160c08101825286815284516001600160a01b0316602080830191909152858101518284015260009788526001905295819020546060870152929092015160808501525060a08301525090565b600060208284031215610b7257600080fd5b5035919050565b80518252600060206001600160a01b03818401511681850152604083015160c0604086015280518060c087015260005b81811015610bc55782810184015187820160e001528301610ba9565b50600060e08288010152606085015160608701526080850151608087015260a085015160a087015260e0601f19601f830116870101935050505092915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015610c5a57603f19888603018452610c48858351610b79565b94509285019290850190600101610c2c565b5092979650505050505050565b602081526000610c7a6020830184610b79565b9392505050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610ca957600080fd5b813567ffffffffffffffff80821115610cc157600080fd5b818401915084601f830112610cd557600080fd5b813581811115610ce757610ce7610c81565b604051601f8201601f19908116603f01168101908382118183101715610d0f57610d0f610c81565b81604052828152876020848701011115610d2857600080fd5b826020860160208301376000928101602001929092525095945050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8181038181111561052857610528610d5e565b600060018201610d9957610d99610d5e565b5060010190565b8082018082111561052857610528610d5e565b600081610dc257610dc2610d5e565b506000190190565b634e487b7160e01b600052603160045260246000fd5b600181811c90821680610df457607f821691505b602082108103610e1457634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115610e6457600081815260208120601f850160051c81016020861015610e415750805b601f850160051c820191505b81811015610e6057828155600101610e4d565b5050505b505050565b815167ffffffffffffffff811115610e8357610e83610c81565b610e9781610e918454610de0565b84610e1a565b602080601f831160018114610ecc5760008415610eb45750858301515b600019600386901b1c1916600185901b178555610e60565b600085815260208120601f198616915b82811015610efb57888601518255948401946001909101908401610edc565b5085821015610f195787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea2646970667358221220831f8679148f03136b686aa4963dc76f81c837fa7285f8427acc612dd2ca661464736f6c63430008110033";

type SocialNetworkConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SocialNetworkConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SocialNetwork__factory extends ContractFactory {
  constructor(...args: SocialNetworkConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SocialNetwork> {
    return super.deploy(overrides || {}) as Promise<SocialNetwork>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SocialNetwork {
    return super.attach(address) as SocialNetwork;
  }
  override connect(signer: Signer): SocialNetwork__factory {
    return super.connect(signer) as SocialNetwork__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SocialNetworkInterface {
    return new utils.Interface(_abi) as SocialNetworkInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SocialNetwork {
    return new Contract(address, _abi, signerOrProvider) as SocialNetwork;
  }
}
