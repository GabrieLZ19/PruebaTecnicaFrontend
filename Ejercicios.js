const clients = [
  {
    id: 1,
    taxNumber: "86620855",
    name: "HECTOR ACUÑA BOLAÑOS",
  },
  {
    id: 2,
    taxNumber: "7317855K",
    name: "JESUS RODRIGUEZ ALVAREZ",
  },
  {
    id: 3,
    taxNumber: "73826497",
    name: "ANDRES NADAL MOLINA",
  },
  {
    id: 4,
    taxNumber: "88587715",
    name: "SALVADOR ARNEDO MANRIQUEZ",
  },
  {
    id: 5,
    taxNumber: "94020190",
    name: "VICTOR MANUEL ROJAS LUCAS",
  },
  {
    id: 6,
    taxNumber: "99804238",
    name: "MOHAMED FERRE SAMPER",
  },
];
const accounts = [
  {
    clientId: 6,
    bankId: 1,
    balance: 15000,
  },
  {
    clientId: 1,
    bankId: 3,
    balance: 18000,
  },
  {
    clientId: 5,
    bankId: 3,
    balance: 135000,
  },
  {
    clientId: 2,
    bankId: 2,
    balance: 5600,
  },
  {
    clientId: 3,
    bankId: 1,
    balance: 23000,
  },
  {
    clientId: 5,
    bankId: 2,
    balance: 15000,
  },
  {
    clientId: 3,
    bankId: 3,
    balance: 45900,
  },
  {
    clientId: 2,
    bankId: 3,
    balance: 19000,
  },
  {
    clientId: 4,
    bankId: 3,
    balance: 51000,
  },
  {
    clientId: 5,
    bankId: 1,
    balance: 89000,
  },
  {
    clientId: 1,
    bankId: 2,
    balance: 1600,
  },
  {
    clientId: 5,
    bankId: 3,
    balance: 37500,
  },
  {
    clientId: 6,
    bankId: 1,
    balance: 19200,
  },
  {
    clientId: 2,
    bankId: 3,
    balance: 10000,
  },
  {
    clientId: 3,
    bankId: 2,
    balance: 5400,
  },
  {
    clientId: 3,
    bankId: 1,
    balance: 9000,
  },
  {
    clientId: 4,
    bankId: 3,
    balance: 13500,
  },
  {
    clientId: 2,
    bankId: 1,
    balance: 38200,
  },
  {
    clientId: 5,
    bankId: 2,
    balance: 17000,
  },
  {
    clientId: 1,
    bankId: 3,
    balance: 1000,
  },
  {
    clientId: 5,
    bankId: 2,
    balance: 600,
  },
  {
    clientId: 6,
    bankId: 1,
    balance: 16200,
  },
  {
    clientId: 2,
    bankId: 2,
    balance: 10000,
  },
];
const banks = [
  {
    id: 1,
    name: "SANTANDER",
  },
  {
    id: 2,
    name: "CHILE",
  },
  {
    id: 3,
    name: "ESTADO",
  },
];

//Pregunta 0

function listClientsIds() {
  return clients.map((cliente) => cliente.id);
}

//Pregunta 1

function listClientsIdsSortByTaxNumber() {
  return [...clients]
    .sort((a, b) => a.taxNumber.localeCompare(b.taxNumber))
    .map((cliente) => cliente.id);
}

//Pregunta 2

function sortClientsTotalBalances() {
  const clientBalance = clients.map((client) => {
    const totalBalance = accounts
      .filter((account) => account.clientId === client.id)
      .reduce((acc, account) => acc + account.balance, 0);
    return { name: client.name, balance: totalBalance };
  });

  return clientBalance
    .sort((a, b) => b.balance - a.balance)
    .map((client) => client.name);
}

//Pregunta 3

function banksClientsTaxNumbers() {
  const result = {};

  banks.forEach((bank) => {
    const clientIds = accounts
      .filter((account) => account.bankId === bank.id)
      .map((account) => account.clientId);

    const uniqueClients = [...new Set(clientIds)].map((id) =>
      clients.find((client) => client.id === id)
    );

    uniqueClients.sort((a, b) => a.name.localeCompare(b.name));

    result[bank.name] = uniqueClients.map((client) => client.taxNumber);
  });

  return result;
}

//Pregunta 4

function richClientsBalances() {
  const santanderId = banks.find((bank) => bank.name === "SANTANDER").id;

  return accounts
    .filter(
      (account) => account.bankId === santanderId && account.balance > 25000
    )
    .map((account) => account.balance)
    .sort((a, b) => b - a);
}

//Pregunta 5

function banksRankingByTotalBalance() {
  return banks
    .map((bank) => {
      const totalBalance = accounts
        .filter((account) => account.bankId === bank.id)
        .reduce((acc, account) => acc + account.balance, 0);
      return { id: bank.id, totalBalance };
    })

    .sort((a, b) => b.totalBalance - a.totalBalance)
    .map((bank) => bank.id);
}

//Pregunta 6

function banksFidelity() {
  const fidelity = {};

  banks.forEach((bank) => {
    const onlyThisBank = clients.filter((client) => {
      const clientAccounts = accounts.filter(
        (acc) => acc.clientId === client.id
      );

      return (
        clientAccounts.length > 0 &&
        clientAccounts.every((acc) => acc.bankId === bank.id)
      );
    });
    fidelity[bank.name] = onlyThisBank.length;
  });

  return fidelity;
}

//Pregunta 7

function banksPoorClients() {
  const result = {};
  banks.forEach((bank) => {
    const balances = accounts
      .filter((acc) => acc.bankId === bank.id)
      .reduce((obj, acc) => {
        obj[acc.clientId] = (obj[acc.clientId] || 0) + acc.balance;
        return obj;
      }, {});

    const menorSaldoClientId = Object.entries(balances).reduce(
      (min, [clientId, balance]) =>
        balance < min.balance ? { clientId, balance } : min,
      { clientId: null, balance: Infinity }
    ).clientId;
    result[bank.name] = menorSaldoClientId ? Number(menorSaldoClientId) : null;
  });
  return result;
}

//Pregunta 8

function newClientRanking() {
  const newClient = {
    id: clients.length + 1,
    taxNumber: "12345678",
    name: "NUEVO CLIENTE",
  };

  clients.push(newClient);

  const bancoEstado = banks.find((bank) => bank.name === "ESTADO");
  accounts.push({
    clientId: newClient.id,
    bankId: bancoEstado.id,
    balance: 9000,
  });

  const sortedNames = sortClientsTotalBalances();
  return sortedNames.indexOf(newClient.name) + 1;
}

console.log("Pregunta 0");
console.log(listClientsIds());
console.log("Pregunta 1");
console.log(listClientsIdsSortByTaxNumber());
console.log("Pregunta 2");
console.log(sortClientsTotalBalances());
console.log("Pregunta 3");
console.log(banksClientsTaxNumbers());
console.log("Pregunta 4");
console.log(richClientsBalances());
console.log("Pregunta 5");
console.log(banksRankingByTotalBalance());
console.log("Pregunta 6");
console.log(banksFidelity());
console.log("Pregunta 7");
console.log(banksPoorClients());
console.log("Pregunta 8");
console.log(newClientRanking());
