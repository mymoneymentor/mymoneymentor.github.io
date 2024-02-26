const form = document.getElementById("contactUsForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const searchParams = new URLSearchParams(window.location.search);
  let sourceBanks = "";
  if (searchParams.has("bank")) {
    sourceBank = searchParams.get("bank");
  }
  
  sourceBank=data.get("srcbank");
  let payload = {
    phone_number: data.get("phone"),
    name: data.get("name"),
  };
  const other_params = {
    headers: { "content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(payload),
    method: "POST",
    mode: "no-cors",
  };

  try {
    const res = await fetch(
      "https://contactapi.mymoneymentor.co/marketing/contactus",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );

    const resData = await res.json();

    console.log(resData);
    alert(
      "Thanks for sharing the information. You'll now be directed to the bank's site to complete the application process."
    );
    redirectToBank(sourceBank);
  } catch (err) {
    alert("You request has been submitted successfully.");
    window.location.href = "https://mymoneymentor.co/contact.html";
  }
});

function redirectToBank(bankname) {
  if (bankname.toLowerCase() == "au") {
    window.location.href =
      "https://cconboarding.aubank.in/auccself/#/landing?utm_source=dsa&utm_medium=display-agg&utm_campaign=credit-card-dsa-campaign-988137-347803-digi3";
  } else if (bankname.toLowerCase() == "hdfc") {
    window.location.href =
      "https://applyonline.hdfcbank.com/cards/credit-cards.html?CHANNELSOURCE=TDCC&DSACode=XSBC&LGcode=DGPI&LCcode=XSBC&LC2=FAZ01&SMcode=S22411#nbb";
  } else if (bankname.toLowerCase() == "rbl") {
    window.location.href =
      "https://www.bajajfinserv.in/apply-for-rbl-bank-credit-card-online?utm_source=mentor_bfl12&utm_medium=mentor_bfl12";
  } else if (bankname.toLowerCase() == "idfc") {
    window.location.href =
      "https://www.idfcfirstbank.com/credit-card/ntb-diy/apply?utm_source=Partner&utm_medium=Mentor2&utm_campaign=NTB_MentorCamp";
  } else if (bankname.toLowerCase() == "axis") {
    window.location.href =
      "https://clctab.axisbank.co.in/DigitalChannel/WebForm/?ipa197";
  } else {
    window.location.href = "https://mymoneymentor.co/contact.html";
  }
}
