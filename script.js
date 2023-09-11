 const daysofweek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

 const now = new Date();
 const currentDayOfTheWeek = daysofweek[now.getDay()];
 console.log(currentDayOfTheWeek);

 const displayDate = document.getElementById('currentDayOfTheWeek').innerHTML = currentDayOfTheWeek



            // TIME in MILLISECOND

            const currentTime = new Date()
            const currentUTCTime = currentTime.getTime();
            console.log(currentUTCTime)
            const displayTime = document.getElementById('currentUTCTime').innerHTML = currentUTCTime