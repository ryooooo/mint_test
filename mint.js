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
  var abi = ["function buyPre(uint8 _amount) external payable onlyWhitelist walletLimit(_amount)"];
  var contract = new ethers.Contract(
  "0xdcD633C764068Cf385DD404F54De1e0Ff283B8fB",
  abi,
  signer
  );
  contract
  .buyPre(
  1
  )
  .then(function (r) {
    document.querySelector("#tx").innerText = "tx: " + r.hash;
  });
}
