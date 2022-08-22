const playerArray = [];
function list(playerList) {
  console.log(playerList);
  const tableBody = document.getElementById('player-name');
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
  // console.log(playerArray);
  document.getElementById('total-selected-player').innerText = playerArray.length;
  list(playerArray);

}


// If(condition){add child}
// else{alert()
// Return} 