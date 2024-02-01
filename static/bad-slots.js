let tod8am = document.getElementById("8am");
let tod11am = document.getElementById("11am");
let tod2pm = document.getElementById("2pm");
let tod5pm = document.getElementById("5pm");
let tod8pm = document.getElementById("8pm");


let slotsbooked = document.getElementById("sb")
let days = document.querySelectorAll(".btn-primary")



let presentDate = new Date();
let currentDate = new Date();

let tomorrow = new Date();
tomorrow.setDate(currentDate.getDate() + 1);

let tomorrow2 = new Date();
tomorrow2.setUTCDate(tomorrow.getUTCDate() + 1);

days[0].innerHTML = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}'s slots`
days[1].innerHTML = `${tomorrow.getDate()}/${tomorrow.getMonth() + 1}/${tomorrow.getFullYear()}'s slots`
days[2].innerHTML = `${tomorrow2.getDate()}/${tomorrow2.getMonth() + 1}/${tomorrow2.getFullYear()}'s slots`

let slotsbooked_cnt = 0;


days[0].addEventListener("click", () => {
    tod8am.addEventListener("click", () => {
        tod8am_cnt = 1
        slotsbooked_cnt += 1
        slotsbooked.innerHTML = `Slots Booked ${slotsbooked_cnt} `
        tod8am.disabled = true
        tod8am.style.color = "red"
        tod8am.style.borderColor = "red"
    })

    tod11am.addEventListener("click", () => {
        // tod11am_cnt = 1
        slotsbooked_cnt += 1
        slotsbooked.innerHTML = `Slots Booked ${slotsbooked_cnt} `
        tod11am.disabled = true
        tod11am.style.color = "red"
        tod11am.style.borderColor = "red"
    })
    tod2pm.addEventListener("click", () => {
        // tod8am_cnt = 1
        slotsbooked_cnt += 1
        slotsbooked.innerHTML = `Slots Booked ${slotsbooked_cnt} `
        tod2pm.disabled = true
        tod2pm.style.color = "red"
        tod2pm.style.borderColor = "red"
    })
    tod5pm.addEventListener("click", () => {
        tod8am_cnt = 1
        slotsbooked_cnt += 1
        slotsbooked.innerHTML = `Slots Booked ${slotsbooked_cnt} `
        tod5pm.disabled = true
        tod5pm.style.color = "red"
        tod5pm.style.borderColor = "red"
    })
    tod8pm.addEventListener("click", () => {
        tod8am_cnt = 1
        slotsbooked_cnt += 1
        slotsbooked.innerHTML = `Slots Booked ${slotsbooked_cnt} `
        tod8pm.disabled = true
        tod8pm.style.color = "red"
        tod8pm.style.borderColor = "red"
    })
})

let tod8am1 = document.getElementById("8am1");
let tod11am1 = document.getElementById("11am1");
let tod2pm1 = document.getElementById("2pm1");
let tod5pm1 = document.getElementById("5pm1");
let tod8pm1 = document.getElementById("8pm1");


days[1].addEventListener("click", () => {
    tod8am1.addEventListener("click", () => {
        tod8am_cnt = 1
        slotsbooked_cnt += 1
        slotsbooked.innerHTML = `Slots Booked ${slotsbooked_cnt} `
        tod8am1.disabled = true
        tod8am1.style.color = "red"
        tod8am1.style.borderColor = "red"
    })

    tod11am1.addEventListener("click", () => {
        // tod11am_cnt = 1
        slotsbooked_cnt += 1
        slotsbooked.innerHTML = `Slots Booked ${slotsbooked_cnt} `
        tod11am1.disabled = true
        tod11am1.style.color = "red"
        tod11am1.style.borderColor = "red"
    })
    tod2pm1.addEventListener("click", () => {
        //tod8am_cnt = 1
        slotsbooked_cnt += 1
        slotsbooked.innerHTML = `Slots Booked ${slotsbooked_cnt} `
        tod2pm1.disabled = true
        tod2pm1.style.color = "red"
        tod2pm1.style.borderColor = "red"
    })
    tod5pm1.addEventListener("click", () => {
        tod8am_cnt = 1
        slotsbooked_cnt += 1
        slotsbooked.innerHTML = `Slots Booked ${slotsbooked_cnt} `
        tod5pm1.disabled = true
        tod5pm1.style.color = "red"
        tod5pm1.style.borderColor = "red"
    })
    tod8pm1.addEventListener("click", () => {
        tod8am_cnt = 1
        slotsbooked_cnt += 1
        slotsbooked.innerHTML = `Slots Booked ${slotsbooked_cnt} `
        tod8pm1.disabled = true
        tod8pm1.style.color = "red"
        tod8pm1.style.borderColor = "red"
    })
})

let tod8am2 = document.getElementById("8am2");
let tod11am2 = document.getElementById("11am2");
let tod2pm2 = document.getElementById("2pm2");
let tod5pm2 = document.getElementById("5pm2");
let tod8pm2 = document.getElementById("8pm2");


days[2].addEventListener("click", () => {
    tod8am2.addEventListener("click", () => {
        tod8am_cnt = 1
        slotsbooked_cnt += 1
        slotsbooked.innerHTML = `Slots Booked ${slotsbooked_cnt} `
        tod8am2.disabled = true
        tod8am2.style.color = "red"
        tod8am2.style.borderColor = "red"
    })

    tod11am2.addEventListener("click", () => {
        // tod11am_cnt = 1
        slotsbooked_cnt += 1
        slotsbooked.innerHTML = `Slots Booked ${slotsbooked_cnt} `
        tod11am2.disabled = true
        tod11am2.style.color = "red"
        tod11am2.style.borderColor = "red"
    })
    tod2pm2.addEventListener("click", () => {
        // tod8am_cnt = 1
        slotsbooked_cnt += 1
        slotsbooked.innerHTML = `Slots Booked ${slotsbooked_cnt} `
        tod2pm2.disabled = true
        tod2pm2.style.color = "red"
        tod2pm2.style.borderColor = "red"
    })
    tod5pm2.addEventListener("click", () => {
        tod8am_cnt = 1
        slotsbooked_cnt += 1
        slotsbooked.innerHTML = `Slots Booked ${slotsbooked_cnt} `
        tod5pm2.disabled = true
        tod5pm2.style.color = "red"
        tod5pm2.style.borderColor = "red"
    })
    tod8pm2.addEventListener("click", () => {
        tod8am_cnt = 1
        slotsbooked_cnt += 1
        slotsbooked.innerHTML = `Slots Booked ${slotsbooked_cnt} `
        tod8pm2.disabled = true
        tod8pm2.style.color = "red"
        tod8pm2.style.borderColor = "red"
    })
})







