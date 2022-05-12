var provider = new ethers.providers.Web3Provider(window.ethereum);

function connect() {
  provider.send("eth_requestAccounts", []);
}

function getAddress() {
  setInterval(function () {
    document.querySelector("#selected-address").innerText =
    "address: " + provider.provider.selectedAddress;
  }, 1000);
}

function mint() {
  var signer = provider.getSigner();
  var abi = [{"inputs":[{"internalType":"address","name":"_nft","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"uint8","name":"_amount","type":"uint8"}],"name":"buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_amount","type":"uint8"}],"name":"buyPre","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"hasOpened","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hasPreOpened","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nft","outputs":[{"internalType":"contract INFT","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"preOpenTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"remain","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_prePrice","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"uint256","name":"_soldLimit","type":"uint256"},{"internalType":"uint256","name":"_preOpenTime","type":"uint256"},{"internalType":"uint256","name":"_openTime","type":"uint256"}],"name":"setSetting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addrs","type":"address[]"},{"internalType":"bool","name":"_isWhitelist","type":"bool"}],"name":"setWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"sold","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
  var contract = new ethers.Contract(
  "0xdcD633C764068Cf385DD404F54De1e0Ff283B8fB",
  abi,
  signer
  );
  contract
  .buyPre()
  .then(function (r) {
    document.querySelector("#tx").innerText = "tx: " + r.hash;
  });
}
