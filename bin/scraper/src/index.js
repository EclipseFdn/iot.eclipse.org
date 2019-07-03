/* -------------------------------------------------------------------------------
 Copyright (C) 2019 Eclipse Foundation
 
 This program and the accompanying materials are made
 available under the terms of the Eclipse Public License 2.0
 which is available at https://www.eclipse.org/legal/epl-2.0/
 
 SPDX-License-Identifier: EPL-2.0
------------------------------------------------------------------------------- */
const fs = require('fs');
const path = "bin/scraper/projects.json";

(async () => {
	let contents = fs.readFileSync(path, 'utf-8');
	let obj = JSON.parse(contents);
	
	// iterate through each of the project keys 
	for (let key of Object.keys(obj)) {
		let project = obj[key];
		let text = project.description;
		
		// remove HTML tags from description
		text = text.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/g, "");

		// trim the description
		let start = 0;
		let end = 250;
		if (text.length > end) {
	        var cutat = text.lastIndexOf(' ', end);
	        if (cutat !== -1) {
	            text = text.substring(start, cutat) + "[…]" ;
	        }
	    }
		
	    // set the text back to the JSON
	    project.description = text;
	}
	
	// write the JSON back to file
	fs.writeFileSync('static/projects.json', JSON.stringify(obj), 'utf-8');
})().catch(console.error);
