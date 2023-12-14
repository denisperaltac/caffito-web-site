const url = "https://caffito.com.ar/api/authenticate";

const headers = new Headers({
  Accept: "application/json, text/plain, */*",
  "Accept-Language": "es-AR,es;q=0.9,en-US;q=0.8,en;q=0.7,es-419;q=0.6",
  Connection: "keep-alive",
  "Content-Type": "application/json",
  Origin: "https://caffito.com.ar",
  Referer: "https://caffito.com.ar/",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-origin",
  "User-Agent":
    "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Mobile Safari/537.36",
  "sec-ch-ua":
    '"Google Chrome";v="119", "Chromium";v="119", "Not?A_Brand";v="24"',
  "sec-ch-ua-mobile": "?1",
  "sec-ch-ua-platform": '"Android"',
});

const data = {
  username: "admin",
  password: "cremoso12345",
  rememberMe: false,
};

const options = {
  method: "POST",
  headers,
  body: JSON.stringify(data),
};

export const Fetching = () => {
  fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Response:", data);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
};
