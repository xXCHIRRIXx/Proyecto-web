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
                'rgba(76, 175, 80, 0.6)', 
                'rgba(244, 67, 54, 0.6)',  
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

// Simula el inicio de sesión y almacenamiento de los valores contables
function iniciarSesion() {
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('valorActivos', '500000');
    localStorage.setItem('valorPasivos', '200000');
    localStorage.setItem('valorPatrimonio', '300000');
    localStorage.setItem('valorIngresos', '45000');
    localStorage.setItem('valorGastos', '12500');
    localStorage.setItem('valorCostosOperacion', '5000');
}

// Verifica si el usuario ha iniciado sesión y actualiza los valores
window.onload = function() {
    if (localStorage.getItem('loggedIn') === 'true') {
        document.getElementById('valor-activos').textContent = `$${localStorage.getItem('valorActivos')}`;
        document.getElementById('valor-pasivos').textContent = `$${localStorage.getItem('valorPasivos')}`;
        document.getElementById('valor-patrimonio').textContent = `$${localStorage.getItem('valorPatrimonio')}`;
        document.getElementById('valor-ingresos').textContent = `$${localStorage.getItem('valorIngresos')}`;
        document.getElementById('valor-gastos').textContent = `$${localStorage.getItem('valorGastos')}`;
        document.getElementById('valor-costos-operacion').textContent = `$${localStorage.getItem('valorCostosOperacion')}`;
    }
}

        // Función para mostrar la sección correspondiente
        function showSection(sectionId) {
            // Oculta todas las secciones
            const sections = document.querySelectorAll('.content-section');
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Muestra la sección seleccionada
            const selectedSection = document.getElementById(sectionId);
            selectedSection.style.display = 'block';
        }

        // Muestra la sección de perfil por defecto al cargar la página
        document.addEventListener('DOMContentLoaded', () => {
            showSection('perfil');
        });

