const playerArray = [];
function list(playerList) {

  const tableBody = document.getElementById('player-name');
  if (playerList.length === 5) {
    alert('This is the last player, no other player can be selected...');
    return;
  }
  tableBody.innerHTML = '';
  for (let i = 0; i < playerList.length; i++) {
    const name = playerArray[i].playerName;
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <th>${i + 1}</th>
    <td>${name}</td>
    `;
    tableBody.appendChild(tr);
  }
}
function addToList(player) {
  const playerName = player.parentNode.parentNode.children[0].innerText;
  const playerObj = {
    playerName: playerName
  }
  playerArray.push(playerObj);
  if (playerArray.length > 5) {
    playerArray.pop();
    playerList.pop();
  }
  document.getElementById('total-selected-player').innerText = playerArray.length;
  list(playerArray);
  player.disabled = true;
}
function addToFee() {
  const perPlayerFeeElement = document.getElementById('per-player-fee');
  const perPlayerFeeString = perPlayerFeeElement.value;
  const perPlayerFee = parseFloat(perPlayerFeeString);
  if (isNaN(perPlayerFee)) {
    alert('Please provide a valid number and fulfil all input field...');
    return;
  }
  const totalExpenses = perPlayerFee * playerArray.length;
  const playerExpensesElement = document.getElementById('player-expenses');
  const playerExpensesString = playerExpensesElement.value;
  const playerExpenses = parseFloat(playerExpensesString);
  playerExpensesElement.value = totalExpenses;
  const managerFeeAmount = document.getElementById('manager');
  const managerFeeString = managerFeeAmount.value;
  const managerFee = parseFloat(managerFeeString);
  const coachFeeAmount = document.getElementById('coach');
  const coachFeeString = coachFeeAmount.value;
  const coachFee = parseFloat(coachFeeString);
  const totalCost = totalExpenses + managerFee + coachFee;
  const totalBalanceElement = document.getElementById('total-balance');
  const previousBalanceElementString = totalBalanceElement.value;
  const previousBalanceElement = parseFloat(previousBalanceElementString);
  const currentBalance = totalCost;
  if (isNaN(currentBalance)) {
    alert('Please provide a valid number and fulfil all input field...');
    return;
  }
  totalBalanceElement.value = currentBalance;
};