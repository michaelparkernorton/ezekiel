import donors from "../../../json/donations.json" assert { type: "json" };
import { renderDonors } from "./renderDonors.mjs";

const donationsTotalElement = document.querySelector("[data-donations-total]");
const donationsCountElement = document.querySelector("[data-donations-count]");
const donorCountElementSm = document.querySelector("[data-donor-count-sm]");
const donorCardContainerSm = document.querySelector("[data-donor-cards-container-sm]");
const donorCardContainerLg = document.querySelector("[data-donor-cards-container-lg]");

let count = 0;
let donationTotal = 0;

donationList();

function donationList() {
	// Loop through each donor to add up how many donations have been made and the total amount
	donors.forEach((donor) => {
		count++;
		donationTotal += parseInt(donor.amount);
	});

	donorCountElementSm.textContent = "Donations (" + count + ")";
	donationsTotalElement.textContent = "$" + donationTotal;
	donationsCountElement.textContent = count;

	// Render Donation Card Elements for small and large screens
	renderDonors(donors, donorCardContainerSm);
	renderDonors(donors, donorCardContainerLg);
}

