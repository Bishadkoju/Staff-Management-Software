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

export const statusStyle = (approveStatus) => {
  if(approveStatus == "Pending"){
    return "text-primary";
  }
  else if(approveStatus == "Approved"){
    return "text-success";
  }
  else{
    return "text-danger";
  }
};

export const getBasicUserInfo = (data) => {
  let name = data.first_name + " " + data.last_name;
  let email = data.email;
  let shortName = data.first_name.charAt(0) + data.last_name.charAt(0);
  return {
    "name" : name,
    "email" : email,
    "shortName" : shortName
  };
}

export const getMonth = (index) => {
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  return month[index];
}
