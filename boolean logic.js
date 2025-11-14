let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
  if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
  } else {
    console.log("Unsafe");
  }
}

// Initial test
checkSecurity();

// Change values and test
isDoorLocked = false;
checkSecurity();
isDoorLocked = true;
isOwnerInside = false;
checkSecurity();
isOwnerInside = true;
isAlarmOn = false;
checkSecurity();