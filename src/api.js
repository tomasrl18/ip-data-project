const OPTIONS = {
    method: "GET",
    headers: {
        'X-RapidAPI-Key': 'c2d0948c5dmsh8ad23d308bb42f0p102cffjsn6c2486190df9',
        'X-RapidAPI-Host': 'ip-reputation-geoip-and-detect-vpn.p.rapidapi.com'
    }
};

const fetchIpInfo = (ip) => {
  return fetch(
    `https://ip-reputation-geoip-and-detect-vpn.p.rapidapi.com/?ip=${ip}`, OPTIONS
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const form = document.getElementById("form");
const input = document.getElementById("ip");
const submit = document.getElementById("submit");
const results = document.getElementById("results");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const { value } = input;
  if (!value) return;

  submit.setAttribute("disabled", "");
  submit.setAttribute("aria-busy", "true");

  const ipInfo = await fetchIpInfo(value);

  if (ipInfo) {
    results.innerHTML = JSON.stringify(ipInfo, null, 2);
  }

  submit.removeAttribute("disabled");
  submit.removeAttribute("aria-busy");
});
