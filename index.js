let ipsumComponents = [" door chains not secure;", " cover peepholes;", " car fobs have panic buttons;", " home gps unsafe;", " remote wipe phone;", " limit social media;", " lock up meds;", " avoid shoulder surfing;", " cover cameras;", " avoid inbound calls;", " cops are minutes away;", " situational awareness;", " self-defense;", " be attentive;", " avoid risky behaviors;", " obey road signs;", " report injuries immediately;", " wear a seatbelt;", " adults don't need your help;", " don't go quietly;", " lift with your legs;", " quit toxic workplaces;", " take a cpr class;", " water and electricity don't mix;", " lock doors at night;", " dogs prevent prowlers;", " practice food safety;", " trust your gut;", " paramedics don't judge;", " avoid unsafe areas;", " park shortcuts are dangerous;", " text a friend your location;", " wash hands regularly;", " don't download strange attachments;", " key to safety is knowledge;"];

let safetyIpsum = [];

let randNum = Math.floor((Math.random() * 35));

// iterate through length of ipsum components, randomly select components for ipsum text array
for (let i = 0; i < ipsumComponents.length; i++) {
  let randNum = Math.floor((Math.random() * 35));
  safetyIpsum.push(ipsumComponents[randNum]);
}

// convert safetyIpsum to string
safetyIpsum = safetyIpsum.toString();

// clean up safetyIpsum string
// remove functions source = https://codehandbook.org/remove-character-from-string/
function remove_first_character(element) {
  return element.substr(1, element.length);
}

function remove_last_character(element) {
  return element.substr(0, element.length - 1);
}

function add_last_character(element) {
  element = element + '.';
  return element;
}

function capitalize_first_character(element) {
  let firstLetter = element[0] || element.charAt(0);
  return firstLetter ? firstLetter.toUpperCase() + element.substring(1) : '';
}

// format paragraphs
safetyIpsum = remove_first_character(safetyIpsum);
safetyIpsum = capitalize_first_character(safetyIpsum);
safetyIpsum = remove_last_character(safetyIpsum);
safetyIpsum = add_last_character(safetyIpsum);
safetyIpsum = safetyIpsum.split(', ').join(' ');

document.getElementById('safetyIpsum').innerHTML = safetyIpsum;

// copy ipsum to clipboard
// source = https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
const copyToClipboard = str => {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  document.getElementById('alertText').innerHTML = 'Text copied to clipboard. Stay safe!';
};