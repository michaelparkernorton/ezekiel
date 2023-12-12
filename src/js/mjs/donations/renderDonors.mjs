const donorCardTemplate = document.querySelector("[data-donor-template]");

// Render first five donations
export function renderDonors(donors, container) {
	for (let index = 0; index < 5; index++) {
		const donor = donors[index];
		const card = donorCardTemplate.content.cloneNode(true).children[0];

		const name = card.querySelector("[data-donor-name]");
		const amount = card.querySelector("[data-donor-amount]");
		const date = card.querySelector("[data-donor-date]");

		const today = new Date();
		const donationDate = new Date(donor.date);
		const dayCount = (today - donationDate) / 1000 / 60 / 60 / 24;
		
		name.textContent = donor.name;
		amount.textContent = "$" + donor.amount;
		if (dayCount < 31) {
			date.textContent = dayCount.toFixed() + " d";
		} else {
			date.textContent = (dayCount/30).toFixed() + " mo";
		}

		container.append(card);
	}	
}