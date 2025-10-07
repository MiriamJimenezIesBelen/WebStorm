const boxContainer = document.querySelector("#box-container");

const empleados = [
    {
        'Login email': 'rachel@example.com',
        'Identifier': '9012',
        'One-time password': '12se74',
        'Recovery code': 'rb9012',
        'First name': 'Rachel',
        'Last name': 'Booker',
        'Department': 'Sales',
        'Location': 'Manchester'
    },
    {
        'Login email': 'laura@example.com',
        'Identifier': '2070',
        'One-time password': '04ap67',
        'Recovery code': 'lg2070',
        'First name': 'Laura',
        'Last name': 'Grey',
        'Department': 'Depot',
        'Location': 'London'
    },
    {
        'Login email': 'craig@example.com',
        'Identifier': '4081',
        'One-time password': '30no86',
        'Recovery code': 'cj4081',
        'First name': 'Craig',
        'Last name': 'Johnson',
        'Department': 'Depot',
        'Location': 'London'
    },
    {
        'Login email': 'mary@example.com',
        'Identifier': '9346',
        'One-time password': '14ju73',
        'Recovery code': 'mj9346',
        'First name': 'Mary',
        'Last name': 'Jenkins',
        'Department': 'Engineering',
        'Location': 'Manchester'
    },
    {
        'Login email': 'jamie@example.com',
        'Identifier': '5079',
        'One-time password': '09ja61',
        'Recovery code': 'js5079',
        'First name': 'Jamie',
        'Last name': 'Smith',
        'Department': 'Engineering',
        'Location': 'Manchester'
    }
];

    const crearTarjetas = (data) => {
        boxContainer.innerHTML = '';

        for (let empleado of data) {
            const tarjeta = document.createElement('div');
            tarjeta.className = 'tarjeta-empleado';

            tarjeta.innerHTML = `
            <div class="department-box">            
                <p style="color: #5f6368; font-size: 12px; margin-bottom: 8px;">${empleado['Department']} - ${empleado['Location']}</p>
            </div>
            <h3>${empleado['First name']} ${empleado['Last name']}</>
            <p>${empleado['Login email']}</p>
            <p id="password" style="display: none;">Password: ${empleado['One-time password']}</p>
            <button class="btn" id="btn">Show one-time password</button>
        `;

            const boton = tarjeta.querySelector('#btn');
            const contraseña = tarjeta.querySelector('#password');

            boton.addEventListener('click', () => {
                if (contraseña.style.display === 'none') {
                    contraseña.style.display = 'block';
                    boton.textContent = 'Hide password';
                } else {
                    contraseña.style.display = 'none';
                    boton.textContent = 'Show one-time password';
                }
            });
            boxContainer.appendChild(tarjeta);
        }
    };

    const filtrarPorLocation = (location) => {
        const filtro = location === 'all' ? empleados : empleados.filter(e => e.Location === location);

        crearTarjetas(filtro)
    };

    const ordenar = (filtro) => {
        const ordenado = [...empleados].sort((a, b) => {
            let valorA = filtro === 'name' ? `${a[`First name`]} ${a[`Last name`]}`: a[filtro];
            let valorB = filtro === 'name' ? `${b[`First name`]} ${b[`Last name`]}`: b[filtro];

            if (valorA < valorB) return -1;
            if (valorA > valorB) return 1;
            return 0;
        });
        crearTarjetas(ordenado)
    };

    document.addEventListener('DOMContentLoaded', () => {
        crearTarjetas(empleados);

        const radios = document.querySelectorAll('input[name="location"]');
        for (let radio of radios) {
            radio.addEventListener('change', function(e) {
                let location = e.target.id;

                if (location === 'london') location = 'London';
                if (location === 'manchester') location = 'Manchester';
                if (location === 'ny') location = 'NY';

                filtrarPorLocation(location);
            });
        }

        document.querySelector('select').addEventListener('change', function(e) {
            let campo = e.target.value;

            if (campo === 'department') campo = 'Department';
            if (campo === 'location') campo = 'Location';

            ordenar(campo);
        });
    })