const updateUTCTime = () => {
    const currentDate = new Date()
    const currentUTCTime = currentDate.toUTCString()
    const currentUTCTimeInMilliSeconds = Date.parse(currentUTCTime)
    document.querySelector("[data-testid='currentUTCTime']").textContent = `Current UTC time: ${currentUTCTimeInMilliSeconds}`
    
    const daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const currentDayOfTheWeek = daysOfTheWeek[currentDate.getUTCDay()]
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = `Today: ${currentDayOfTheWeek}`

    console.log(currentDayOfTheWeek);
    console.log(currentUTCTimeInMilliSeconds);
}

setInterval(updateUTCTime,1000)

updateUTCTime()
