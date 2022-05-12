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
  var abi = ["function mint(string) external"];
  var contract = new ethers.Contract(
  "0x8610882487d67d497ADAf2148a651CC49163C9E2",
  abi,
  signer
  );
  contract
  .mint(
  "https://ethereum.org/static/a110735dade3f354a46fc2446cd52476/f3a29/eth-home-icon.webp"
  )
  .then(function (r) {
    document.querySelector("#tx").innerText = "tx: " + r.hash;
  });
}
