// Step 1: Embed JavaScript and Verify Integration
console.log('Hello World!');

// Step 2: Show Alert When Resume is Downloaded
function handleResumeDownload() {
    if (!hasDownloadedResume) {
        // Bonus Challenge: Use setTimeout() to delay the alert by 2 seconds
        setTimeout(() => {
            alert("Your resume is downloaded successfully!");
            hasDownloadedResume = true;
        }, 2000);
    }
}

// Step 3: Define Variables for User Data
const name = "Angel Jiao Hu";
let hasDownloadedResume = false;

// Step 4: Display Personalized Greeting
function showGreeting(name) {
    const timeGreeting = getTimeBasedGreeting();
    return timeGreeting + ", my name is " + name + "! Welcome to my portfolio!";
}

// Step 5: Use Arithmetic for Date Calculations
function daysUntilDeadline(deadlineDate) {
    const currentDate = new Date();
    const timeDifference = deadlineDate.getTime() - currentDate.getTime();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysRemaining;
}

// Enhanced function to format deadline display
function formatDeadlineDisplay(daysLeft) {
    if (daysLeft > 0) {
        return `Days remaining: ${daysLeft}`;
    } else if (daysLeft === 0) {
        return 'Deadline is today!';
    } else {
        return `Overdue by ${Math.abs(daysLeft)} days`;
    }
}

// Function to get deadline color based on days remaining
function getDeadlineColor(daysLeft) {
    if (daysLeft > 7) {
        return '#28a745'; // Green for more than a week
    } else if (daysLeft > 3) {
        return '#ffc107'; // Yellow for 3-7 days
    } else if (daysLeft > 0) {
        return '#fd7e14'; // Orange for 1-3 days
    } else {
        return '#dc3545'; // Red for overdue
    }
}

// Bonus Challenge: Time-based greeting function
function getTimeBasedGreeting() {
    const currentHour = new Date().getHours();
    
    if (currentHour >= 5 && currentHour < 12) {
        return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Step 4: Display personalized greeting
    const greetingElement = document.getElementById('personalized-greeting');
    if (greetingElement) {
        greetingElement.textContent = showGreeting(name);
    }
    
    // Step 5: Calculate and display days until project deadline
    const projectDeadline = new Date('2025-12-15'); // Sample project deadline
    const daysLeft = daysUntilDeadline(projectDeadline);
    console.log(`Days until project deadline: ${daysLeft}`);
    
    // Store the deadline value in a variable as requested
    const remainingDays = daysLeft;
    console.log(`Stored remaining days value: ${remainingDays}`);
    
    // Add days remaining to the ongoing project section if it exists
    const projectDeadlineElement = document.getElementById('project-deadline');
    if (projectDeadlineElement) {
        projectDeadlineElement.textContent = formatDeadlineDisplay(daysLeft);
        projectDeadlineElement.style.color = getDeadlineColor(daysLeft);
        projectDeadlineElement.style.fontWeight = 'bold';
    }
    
    // Update modal deadline info when modal is opened
    const ongoingModal = document.getElementById('ongoingModal');
    if (ongoingModal) {
        ongoingModal.addEventListener('show.bs.modal', function() {
            const modalDaysElement = document.getElementById('modal-days-remaining');
            if (modalDaysElement) {
                modalDaysElement.textContent = formatDeadlineDisplay(daysLeft);
                modalDaysElement.style.color = getDeadlineColor(daysLeft);
            }
        });
    }
    
    // Add click event listeners to resume download buttons
    const resumeButtons = document.querySelectorAll('a[href="CV.pdf"]');
    resumeButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default download
            handleResumeDownload();
        });
    });
    
    // Log successful initialization
    console.log('Portfolio JavaScript initialized successfully!');
});
