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
  var amount = 1
  var abi = ["function buyPre(uint) external"]
  var contract = new ethers.Contract(
  "0xdcD633C764068Cf385DD404F54De1e0Ff283B8fB",
  abi,
  signer
  );
  contract
  .buyPre(amount)
  .then(function (r) {
    document.querySelector("#tx").innerText = "tx: " + r.hash;
  });
}
