// ==UserScript==
// @name         Hours loader for avalith
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  why type when you can have this script
// @author       You
// @match        http://horas.avalith.net/entry/add/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Select project:
    const project = document.querySelector('select#id_project');
    // Inspect element to get your project's value!
    project.value = 20;

    // Input activity:
    const activity0 = document.querySelector('input#id_activity_0');
    activity0.value = 'Development';
    const activity1 = document.querySelector('input#id_activity_1');
    activity1.value = '1'; // Development

    // Select location:
    const workLocation = document.querySelector('select#id_location');
    workLocation.value = 1; // Office

    // Optional code for Wednesdays home office
    // if (new Date().getDay() === 3) { // Wednesdays
    //     workLocation.value = 2; // Home
    // } else { workLocation.value = 1; }

    // Set todays Date:
    const todaysDate = new Date().toJSON().slice(0, 10);
    const startDate = document.querySelector('input#id_start_time_0');
    const endDate = document.querySelector('input#id_end_time_0');
    startDate.value = todaysDate;
    endDate.value = todaysDate;

    // Set working hours:
    const startTime = document.querySelector('input#id_start_time_1');
    const endTime = document.querySelector('input#id_end_time_1');
    startTime.value = '9:00';
    endTime.value = '18:00';

    // Set break time:
    const pauses = document.querySelector('input#id_seconds_paused');
    pauses.value = '3600';

    //Scroll down to description:
    window.scroll({top: window.innerHeight, behavior: 'smooth'});

    // Focus on description field:
    const description = document.querySelector('textarea#id_comments');
    description.focus();

})();
