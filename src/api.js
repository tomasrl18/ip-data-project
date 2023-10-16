const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "71e59e906dmshfdc9ed284df2469p1b599cjsn0355f0f200d5",
    "X-RapidAPI-Host": "ip-geolocation-and-threat.p.rapidapi.com",
  },
};

const fetchIpInfo = (ip) => {
  return fetch(
    `https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`
  )
    .then((res) => res.json())
    .catch((err) => console.error(err));
};

const form = document.getElementById("#form");
const input = document.getElementById("#ip");
const submit = document.getElementById("#submit");
const results = document.getElementById("#results");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const { value } = input;
  if (!value) return;

  submit.setAttribute("disabled", "");
  submit.setAttribute("aria-busy", "true");

  const ipInfo = await fetchIpInfo(value);

  submit.removeAttribute("disabled");
  submit.removeAttribute("aria-busy");
});
