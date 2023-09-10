"use strict";

// 11.  Write a program that simulates the progressive loading of content using setTimeout..
// Sample Output:
// Loading... 20%
// Pause for 1 second
// Loading... 50%
// Pause for 1 second
// Loading... 80%
// Pause for 1 second
// Loading complete!
// function simulateProgressiveLoading() {
//   let progress = 0;

//   function updateProgress() {
//     if (progress < 100) {
//       progress += 20; // Increment the progress by 30% (adjust as needed)
//       console.log(`Loading... ${progress}%`);
//       setTimeout(updateProgress, 1000); // Pause for 1 second
//     } else {
//       console.log("Loading complete!");
//     }
//   }

//   updateProgress();
// }

// simulateProgressiveLoading();

// 12. Write a program that simulates auto-pagination of content with a dynamic loading delay using setTimeout.
// Sample Input:
//   Page 1 loaded
// Pause for 3 seconds
// Page 2 loaded
// Pause for 2 seconds
// Page 3 loaded
// Pause for 1 second
// Page 4 loaded
// function simulateAutoPagination() {
//   const totalPages = 4;
//   let currentPage = 1;

//   function loadPage() {
//     if (currentPage <= totalPages) {
//       console.log(`Page ${currentPage} loaded`);
//       const delay = totalPages - currentPage + 1; // Dynamic loading delay
//       console.log(`Pause for ${delay} second${delay > 1 ? "s" : ""}`);

//       setTimeout(() => {
//         currentPage++;
//         loadPage();
//       }, delay * 1000);
//     }
//   }

//   loadPage();
// }

// simulateAutoPagination();

// 13. Write a program that simulates a rotating banner displaying different messages using setInterval.
// Sample Output:
// Displaying: Message 1
// Pause for 3 seconds
// Displaying: Message 2
// Pause for 3 seconds
// Displaying: Message 3

// function simulateRotatingBanner() {
//   const messages = ["Message 1", "Message 2", "Message 3"];
//   let currentIndex = 0;

//   function displayMessage() {
//     if (currentIndex < messages.length) {
//       console.log(`Displaying: ${messages[currentIndex]}`);
//       console.log("Pause for 3 seconds");

//       currentIndex++;

//       if (currentIndex === messages.length) {
//         currentIndex = 0;
//       }
//     }
//   }

//   displayMessage();
//   setInterval(displayMessage, 3000);
// }

// simulateRotatingBanner();

// 14. Write a program that implements dynamic UI animation with varying durations using setTimeout..
// Sample Output:
// Animating fade-in effect over 1 second...
// Pause for 1 second
// Animating slide-out effect over 500ms...
// Pause for 500ms
// Animating bounce effect over 750ms...

// function animateUI(effect, duration) {
//   console.log(`Animating ${effect} effect over ${duration}ms...`);

//   setTimeout(() => {
//     console.log(`Pause for ${duration}ms`);
//   }, duration);
// }

// animateUI("fade-in", 1000);
// animateUI("slide-out", 500);
// animateUI("bounce", 750);

// 15. Write a program that simulates auto-closing notifications with different delays using setTimeout..
// Sample Output:
// New Notification: You have a new message!
// Notification will close in 5 seconds
// Pause for 5 seconds
// New Notification: Meeting reminder
// Notification will close in 10 seconds

// function simulateAutoClosingNotification(message, delay) {
//   console.log(`New Notification: ${message}`);
//   console.log(`Notification will close in ${delay} seconds`);

//   setTimeout(() => {
//     console.log(`Pause for ${delay} seconds`);
//   }, delay * 1000);
// }

// simulateAutoClosingNotification("You have a new message!", 5);
// simulateAutoClosingNotification("Meeting reminder", 10);

// 16. Write a program that calculates the total working hours between two dates, excluding weekends and holidays.:
// Sample Input:
// const startDate = new Date('2023-07-01');
// const endDate = new Date('2023-07-10');
// const holidays = ['2023-07-04', '2023-07-08'];
//  const workingHoursPerDay = 8;
// const weekends = [0, 6]; // Saturday and Sunday

// Sample Output:
// Total Working Hours: 56
// function calculateWorkingHours(
//   startDate,
//   endDate,
//   holidays,
//   workingHoursPerDay,
//   weekends
// ) {
//   const millisecondsInDay = 24 * 60 * 60 * 1000;
//   let totalWorkingHours = 0;
//   let currentDate = startDate;

//   while (currentDate <= endDate) {
//     const currentDay = currentDate.getDay();
//     const dateString = currentDate.toISOString().split("T")[0];

//     if (!weekends.includes(currentDay) && !holidays.includes(dateString)) {
//       totalWorkingHours += workingHoursPerDay;
//     }

//     currentDate = new Date(currentDate.getTime() + millisecondsInDay);
//   }

//   return totalWorkingHours;
// }

// const startDate = new Date("2023-07-01");
// const endDate = new Date("2023-07-10");
// const holidays = ["2023-07-04", "2023-07-08"];
// const workingHoursPerDay = 8;
// const weekends = [0, 6];

// const totalWorkingHours = calculateWorkingHours(
//   startDate,
//   endDate,
//   holidays,
//   workingHoursPerDay,
//   weekends
// );

// console.log(`Total Working Hours: ${totalWorkingHours}`);

// 17. Write a program that finds the next Friday the 13th after the current date.
// Sample Input:
// 16-08-2023
// Sample Output:
//  Next Friday the 13th: Fri Aug 13 2023

// function findNextFridayThe13th(currentDate) {
//   while (true) {
//     currentDate.setDate(currentDate.getDate() + 1);
//     if (currentDate.getDate() === 13 && currentDate.getDay() === 5) {
//       return currentDate;
//     }
//   }
// }

// const currentDate = new Date("2023-08-16");

// const nextFridayThe13th = findNextFridayThe13th(currentDate);

// console.log(`Next Friday the 13th: ${nextFridayThe13th.toDateString()}`);

// 18. Write a program that handles circular references using the toJSON method.
// Sample Output:
// Custom JSON: { "name": "John", "spouse": { "name": "Jane", "spouse": null } }

// function handleCircularReferences(obj) {
//   const seen = new WeakSet();

//   function replacer(key, value) {
//     if (typeof value === "object" && value !== null) {
//       if (seen.has(value)) {
//         return null;
//       }
//       seen.add(value);
//     }
//     return value;
//   }

//   return JSON.stringify(obj, replacer);
// }

// const john = { name: "John" };
// const jane = { name: "Jane" };
// john.spouse = jane;
// jane.spouse = john;

// const customJSON = handleCircularReferences(john);

// console.log(`Custom JSON: ${customJSON}`);

// 19. Write a program that validates user input and provides feedback or defaults..
// Sample Input:
//  const userInput = "   ";
// Sample Output:
// Processed Input: "No valid input provided."

// function processUserInput(userInput) {
//   userInput = userInput.trim();

//   if (userInput === "") {
//     return "Processed Input: 'No valid input provided.'";
//   }

//   return `Processed Input: "${userInput}"`;
// }

// const userInput = "   ";

// const processedInput = processUserInput(userInput);

// console.log(processedInput);

// 20. Write a program that uses the JSON.parse method to deserialize dates from JSON strings.
// Sample Output:
// Parsed Date: 2023-07-25T00:00:00.000Z

function parseDateFromJSON(jsonString) {
  const dateReviver = (key, value) => {
    if (typeof value === "string") {
      const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
      if (dateRegex.test(value)) {
        return new Date(value);
      }
    }
    return value;
  };

  return JSON.parse(jsonString, dateReviver);
}

const jsonString = '"2023-07-25T00:00:00.000Z"';

const parsedDate = parseDateFromJSON(jsonString);

console.log(`Parsed Date: ${parsedDate.toISOString()}`);
