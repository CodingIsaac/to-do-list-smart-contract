import { ethers } from "hardhat";

const main = async () => {
    const Todo = await ethers.getContractFactory("ToDoList");
    const todo = Todo.attach("0xf7D1A204Fd6eb6Bf8a680a4D371F04633726EC17");

    const createTodos = await todo.createToDo("Play Baseball","Burn some Ether");
    const createTodoTransactionReceipt = await createTodos.wait();
    console.log("Created Todo: ", createTodoTransactionReceipt);

    const createmoreTodos = await todo.createToDo("Play Baseball", "Run around the pitch")
    const createMoreTodoTXNR = await createmoreTodos.wait();
    console.log("Another todo Created: ", createMoreTodoTXNR );
    

    const getAllTodos = await todo.getTodo();
    console.log("Here are the Todos: ", getAllTodos)

}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

  /*
Created Todo:  {
  to: '0xf7D1A204Fd6eb6Bf8a680a4D371F04633726EC17',
  from: '0xAA5AC6134633183C81436499fb38748D128e039b',
  contractAddress: null,
  transactionIndex: 79,
  gasUsed: BigNumber { value: "93089" },
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  blockHash: '0x1923eeb12c4c84c039bec008cdda5316c9e2abd8049b599bb7ae09b30e60abd5',
  transactionHash: '0xb7e141d75476bfcca2bcff11f89e07fe037249c2e4df44a78f8e834c7f563bd4',
  logs: [],
  blockNumber: 7552833,
  confirmations: 1,
  cumulativeGasUsed: BigNumber { value: "17119215" },
  effectiveGasPrice: BigNumber { value: "99950124" },
  status: 1,
  type: 2,
  byzantium: true,
  events: []
}

Another todo Created:  {
  to: '0xf7D1A204Fd6eb6Bf8a680a4D371F04633726EC17',
  from: '0xAA5AC6134633183C81436499fb38748D128e039b',
  contractAddress: null,
  transactionIndex: 6,
  gasUsed: BigNumber { value: "76049" },
  logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  blockHash: '0xc924bdd5849227a42a90d266622d7ed089659892ec563884535e32d184a3043e',
  transactionHash: '0x876719146a42d3b6b5f350a0087c1fb588c445e031d2fbacb484dc2719d0cbd8',
  logs: [],
  blockNumber: 7552834,
  confirmations: 1,
  cumulativeGasUsed: BigNumber { value: "749985" },
  effectiveGasPrice: BigNumber { value: "1500000012" },
  status: 1,
  type: 2,
  byzantium: true,
  events: []
}


Here are the Todos:  [
  [
    'Play Baseball',
    'Burn some Ether',
    false,
    message: 'Play Baseball',
    title: 'Burn some Ether',
    taskCompleted: false
  ],
  [
    'Play Baseball',
    'Run around the pitch',
    false,
    message: 'Play Baseball',
    title: 'Run around the pitch',
    taskCompleted: false
  ]
]

  */