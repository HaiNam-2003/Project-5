const data = fetch('data.json')
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(error => console.log(error))

var chartMain = document.querySelector('.chart-main');

data.then(data => {
    data.forEach(item => {
        let chart = document.createElement('div');
        chart.classList.add('chart');
        const height = item.amount / 8;
        
        chart.innerHTML = `
            <div class='chart-wrapper'>
        
                <div class='chart-value' style='--height:${height}em'></div>
            </div>
            <div class='chart-title'>${item.day}</div>
        `
        chartMain.appendChild(chart)
        
        const chartValues = chart.querySelector('.chart-value');
        chartValues.onclick = function() {           
            if(chartValues.classList.contains('active')) {
                chartValues.classList.remove('active')

                chartValues.innerHTML = ``
            } else {
                chartValues.classList.add('active')
                
                chartValues.innerHTML = `
                    <p class='chart-amount' style='--height:${height}em'>$${item.amount}</p>
                `
            }
        }
    })
})