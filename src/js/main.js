import donors from "../json/donations.json" assert { type: "json" };

const donorCardTemplate = document.querySelector("[data-donor-template]");
const donationsTotalElement = document.querySelector("[data-donations-total]");
const donationsCountElement = document.querySelector("[data-donations-count]");
const donorCardContainerSm = document.querySelector(
  "[data-donor-cards-container-sm]"
);
const donorCountElementSm = document.querySelector("[data-donor-count-sm]");
const donorCardContainerLg = document.querySelector(
  "[data-donor-cards-container-lg]"
);

let count = 0;
let donationTotal = 0;

function renderDonors(container) {
  donors.forEach((donor) => {
    count++;
    donationTotal += parseInt(donor.amount);
    const card = donorCardTemplate.content.cloneNode(true).children[0];
    const name = card.querySelector("[data-donor-name]");
    const amount = card.querySelector("[data-donor-amount]");
    const date = card.querySelector("[data-donor-date]");
    const img = card.querySelector("[data-heart-image]");
    const today = new Date();
    const donationDate = new Date(donor.date);
    const dayCount = (today - donationDate) / 1000 / 60 / 60 / 24;
    name.textContent = donor.name;
    amount.textContent = "$" + donor.amount;
    date.textContent = dayCount.toFixed() + " d";
    img.src = "/images/heart.png";
    container.append(card);
  });
}

renderDonors(donorCardContainerSm);
renderDonors(donorCardContainerLg);

count = count / 2;
donationTotal = donationTotal / 2;

donorCountElementSm.textContent = "Donations (" + count + ")";
donationsTotalElement.textContent = "$" + donationTotal;
donationsCountElement.textContent = count;
