const NOTIFICATION_TITLE = 'Title'
const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.'
const CLICK_MESSAGE = 'Notification clicked!\r\n'

const myButton = document.getElementById('myButton');

myButton.addEventListener('click', () => {
  new Notification("NOTIFICATION MAKER TITLE", { body: "NOTIFICATION MAKER BODY" })
  .onclick = () => document.getElementById("output").innerText += CLICK_MESSAGE
  });

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
  .onclick = () => document.getElementById("output").innerText += CLICK_MESSAGE