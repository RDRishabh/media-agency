/**
 * Google Apps Script for Let'em Know Website
 * 
 * SETUP INSTRUCTIONS:
 * 
 * 1. Go to https://script.google.com/
 * 2. Click "New Project"
 * 3. Delete the default code and paste this entire script
 * 4. Click on "Project Settings" (gear icon) and check "Show 'appsscript.json' manifest file"
 * 5. Save the project (Ctrl+S or Cmd+S)
 * 
 * CREATE GOOGLE SHEETS:
 * 6. Create a new Google Sheet for storing data
 * 7. Rename "Sheet1" to "Contact" (for contact form submissions)
 * 8. Create another sheet tab named "Newsletter" (for newsletter subscriptions)
 * 9. In "Contact" sheet, add headers in Row 1: Timestamp | Name | Email | Message
 * 10. In "Newsletter" sheet, add headers in Row 1: Timestamp | Email
 * 11. Copy the Spreadsheet ID from the URL (the long string between /d/ and /edit)
 * 12. Replace 'YOUR_SPREADSHEET_ID_HERE' below with your Spreadsheet ID
 * 
 * DEPLOY:
 * 13. Click "Deploy" > "New deployment"
 * 14. Click the gear icon next to "Select type" and choose "Web app"
 * 15. Set "Execute as" to "Me"
 * 16. Set "Who has access" to "Anyone"
 * 17. Click "Deploy"x
 * 18. Authorize the app when prompted
 * 19. Copy the Web App URL
 * 
 * UPDATE YOUR NEXT.JS APP:
 * 20. Create a .env.local file in your project root (if not exists)
 * 21. Add: NEXT_PUBLIC_GOOGLE_SCRIPT_URL=your_web_app_url_here
 * 22. Restart your development server
 */

// ============================================
// CONFIGURATION - Update this with your Spreadsheet ID
// ============================================
const SPREADSHEET_ID = '1ajLv31i8y7UfnHqThneBkpbiqvzs60aqf0pXkHv0EMM';

// Sheet names
const CONTACT_SHEET_NAME = 'Contact';
const NEWSLETTER_SHEET_NAME = 'Newsletter';

// ============================================
// MAIN FUNCTIONS
// ============================================

/**
 * Handles POST requests from the website forms
 */
function doPost(e) {
  try {
    let data;
    
    // Handle both JSON and form data
    if (e.postData && e.postData.contents) {
      // JSON data
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      // Form data (URL-encoded)
      data = {
        type: e.parameter.type || '',
        name: e.parameter.name || '',
        email: e.parameter.email || '',
        message: e.parameter.message || '',
        timestamp: e.parameter.timestamp || new Date().toISOString()
      };
    } else {
      throw new Error('No data received');
    }
    
    // Get the spreadsheet
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    
    // Route to appropriate handler based on form type
    if (data.type === 'contact') {
      handleContactForm(spreadsheet, data);
    } else if (data.type === 'newsletter') {
      handleNewsletterForm(spreadsheet, data);
    }
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Data saved successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error and return error response
    console.error('Error processing request:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handles GET requests (for testing)
 */
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      success: true, 
      message: "Let'em Know Form Handler is running!",
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Saves contact form data to the Contact sheet
 */
function handleContactForm(spreadsheet, data) {
  const sheet = spreadsheet.getSheetByName(CONTACT_SHEET_NAME);
  
  if (!sheet) {
    throw new Error('Contact sheet not found. Please create a sheet named "Contact"');
  }
  
  // Format timestamp
  const timestamp = data.timestamp ? new Date(data.timestamp).toLocaleString() : new Date().toLocaleString();
  
  // Append row with data
  sheet.appendRow([
    timestamp,
    data.name || '',
    data.email || '',
    data.message || ''
  ]);
  
  // Optional: Send email notification
  sendContactNotification(data);
}

/**
 * Saves newsletter subscription to the Newsletter sheet
 */
function handleNewsletterForm(spreadsheet, data) {
  const sheet = spreadsheet.getSheetByName(NEWSLETTER_SHEET_NAME);
  
  if (!sheet) {
    throw new Error('Newsletter sheet not found. Please create a sheet named "Newsletter"');
  }
  
  // Check for duplicate email
  const existingData = sheet.getDataRange().getValues();
  const emailExists = existingData.some(row => row[1] === data.email);
  
  if (emailExists) {
    console.log('Email already subscribed:', data.email);
    return; // Skip duplicate
  }
  
  // Format timestamp
  const timestamp = data.timestamp ? new Date(data.timestamp).toLocaleString() : new Date().toLocaleString();
  
  // Append row with data
  sheet.appendRow([
    timestamp,
    data.email || ''
  ]);
}

/**
 * Sends email notification for new contact form submissions
 * Optional: Update the email address to receive notifications
 */
function sendContactNotification(data) {
  const NOTIFICATION_EMAIL = 'hello@letemknow.media'; // Update this email
  
  try {
    const subject = `New Contact Form Submission from ${data.name}`;
    const body = `
New contact form submission received:

Name: ${data.name}
Email: ${data.email}
Message: ${data.message}

Submitted at: ${data.timestamp ? new Date(data.timestamp).toLocaleString() : new Date().toLocaleString()}
    `;
    
    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: subject,
      body: body
    });
  } catch (error) {
    console.error('Failed to send notification email:', error);
    // Don't throw - email notification failure shouldn't break form submission
  }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Test function - run this to verify your setup
 */
function testSetup() {
  try {
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const contactSheet = spreadsheet.getSheetByName(CONTACT_SHEET_NAME);
    const newsletterSheet = spreadsheet.getSheetByName(NEWSLETTER_SHEET_NAME);
    
    if (!contactSheet) {
      console.log('❌ Contact sheet not found');
    } else {
      console.log('✓ Contact sheet found');
    }
    
    if (!newsletterSheet) {
      console.log('❌ Newsletter sheet not found');
    } else {
      console.log('✓ Newsletter sheet found');
    }
    
    console.log('✓ Spreadsheet connection successful');
    console.log('Spreadsheet name:', spreadsheet.getName());
    
  } catch (error) {
    console.log('❌ Error:', error.toString());
    console.log('Make sure you have updated SPREADSHEET_ID with your actual spreadsheet ID');
  }
}

/**
 * Test contact form submission
 */
function testContactSubmission() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        type: 'contact',
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message',
        timestamp: new Date().toISOString()
      })
    }
  };
  
  const result = doPost(testData);
  console.log('Result:', result.getContent());
}

/**
 * Test newsletter subscription
 */
function testNewsletterSubscription() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        type: 'newsletter',
        email: 'newsletter-test@example.com',
        timestamp: new Date().toISOString()
      })
    }
  };
  
  const result = doPost(testData);
  console.log('Result:', result.getContent());
}
