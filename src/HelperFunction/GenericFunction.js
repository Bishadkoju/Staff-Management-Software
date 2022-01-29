export const timeDisplayer = (t) => {
  if (t) {
    return t.slice(0, 8);
  }
};

export const secondsToHms = (d) => {
  d = Number(d);
  if (typeof d == 'number') {
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    // var s = Math.floor((d % 3600) % 60);

    if (h === 0 && m === 0) {
      return "0 mins";
    }

    var hDisplay = h > 0 ? h + " hr" : "";
    var mDisplay = m > 0 ? m + " mins" : "";
    return hDisplay + " " + mDisplay;
  }
  return " ";
};

export const statusStyle = (approveStatus) => {
  if (approveStatus == "Pending") {
    return "text-primary";
  } else if (approveStatus == "Approved") {
    return "text-success";
  } else {
    return "text-danger";
  }
};

export const getBasicUserInfo = (data) => {
  let name = data.first_name + " " + data.last_name;
  let email = data.email;
  let shortName = data.first_name.charAt(0) + data.last_name.charAt(0);
  return {
    name: name,
    email: email,
    shortName: shortName,
  };
};

export const getMonth = (index) => {
  const ind = Number(index);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return month[ind];
};

export const getMonthDayFromFullYear = (date) => {
  if (date) {
    let year = date.slice(0, 4);
    let month = date.slice(5, 7);
    let day = date.slice(8, 10);
    let m = getMonth(month - 1);
    return m + " " + day + ", " + year;
  }
  return "";
};

export const calculateDuration = (attendences) => {
  if (attendences) {
    let totalDuration = 0;
    for (let i = 0; i < attendences.length; i++) {
      totalDuration += Number(attendences[i].duration);
    }
    return totalDuration;
  }
  return "";
};

export const getDaysFromDate = (date1, date2) => {
  if(date1 != "" && date2 != ""){
    let d1 = new Date(date1);
    let d2 = new Date(date2);
  
    let difference_time = d2.getTime() - d1.getTime();

    let days = difference_time / (1000 * 3600 * 24);
    return days + 1;
  }
  return "";
}