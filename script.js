document.getElementById("buttonArrow").addEventListener("click", function() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const daysInMonth = new Date(year, month, 0).getDate();
    const currentDate = new Date();

    const birthdate = new Date(year, month - 1, day); 

    let years = currentDate.getFullYear() - birthdate.getFullYear();
    let months = currentDate.getMonth() - birthdate.getMonth();
    let days = currentDate.getDate() - birthdate.getDate();

    if (days < 0) {
        months--; 
        const lastMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += lastMonthDate.getDate(); 
    }

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    if ((birthdate > currentDate) || (day > daysInMonth)) {
        document.getElementById("alert-day").textContent = "Must be a valid date";
        document.getElementById("day-label").classList.add("input-group__label--alert");
        document.getElementById("day-label").classList.remove("input-group__label");
        document.getElementById("month-label").classList.add("input-group__label--alert");
        document.getElementById("month-label").classList.remove("input-group__label");
        document.getElementById("year-label").classList.add("input-group__label--alert");
        document.getElementById("year-label").classList.remove("input-group__label");
        document.getElementById("day").classList.add("input-group__input--alert");
        document.getElementById("month").classList.add("input-group__input--alert");
        document.getElementById("year").classList.add("input-group__input--alert");
        return;
    } else {
        document.getElementById("years").textContent = years;
        document.getElementById("months").textContent = months;
        document.getElementById("days").textContent = days;
    }
});