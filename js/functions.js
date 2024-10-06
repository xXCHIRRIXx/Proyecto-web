$(document).ready(function() {
    $('#dropdownMenuButton').on('click', function() {
        $(this).next('.dropdown-menu').toggle(300);
    });

    $('.dropdown-item').on('click', function() {
        $(this).closest('.dropdown-menu').hide();
    });

    $(document).on('click', function(event) {
        if (!$(event.target).closest('.dropdown').length) {
            $('.dropdown-menu').hide();
        }
    });
});

// Gráfico de uso
const ctxUsage = document.getElementById('usageChart').getContext('2d');
const usageChart = new Chart(ctxUsage, {
    type: 'bar',
    data: {
        labels: ['Uso', 'No Uso'],
        datasets: [{
            label: 'Porcentaje de Uso',
            data: [75, 25],
            backgroundColor: [
                'rgba(76, 175, 80, 0.6)', // Verde
                'rgba(244, 67, 54, 0.6)'  // Rojo
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Gráfico de satisfacción
const ctxSatisfaction = document.getElementById('satisfactionChart').getContext('2d');
const satisfactionChart = new Chart(ctxSatisfaction, {
    type: 'pie',
    data: {
        labels: ['Satisfechos', 'Insatisfechos'],
        datasets: [{
            label: 'Satisfacción del Cliente',
            data: [90, 10],
            backgroundColor: [
                'rgba(76, 175, 80, 0.6)', // Verde
                'rgba(244, 67, 54, 0.6)'  // Rojo
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Gráfico de Satisfacción del Cliente'
            }
        }
    }
});
