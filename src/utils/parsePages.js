export default function parsePages(copy) {
	const sections = ["introduction", "methods", "results", "discussion", "conclusions", "acknowledgement", "references"];
	const numerals = ["i", "ii", "iii", "iv", "v"];
	const title = {
		"methods": "Methods and Materials",
		"acknowledgement": "Acknowledgements"
	};

	const pages = [[]];
	let page = 0;
	sections.forEach((id, si) => {
		copy[id].forEach((content, i) => {
			if (i === 0) {
				pages[page].push({
					type: "title",
					value: {
						id,
						title: title[id] ?? id,
						numeral: numerals[si] ?? ""
					}
				});
			}

			if (content.type === "break") {
				page += 1;
				pages[page] = [];
			} else {
				pages[page].push(content);
			}

		});
	});

	return pages;
}