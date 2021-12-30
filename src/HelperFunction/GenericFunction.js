export const timeDisplayer = (t) => {
  if (t) {
    return t.slice(0, 8);
  }
};

export const secondsToHms = (d) => {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  // var s = Math.floor((d % 3600) % 60);

  var hDisplay = h > 0 ? h + " hr" : "";
  var mDisplay = m > 0 ? m + " mins" : "";
  return hDisplay + " " + mDisplay;
};
