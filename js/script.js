console.log('Car Hub loaded!');

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = this.querySelector('input[type="text"]');
            const email = this.querySelector('input[type="email"]');
            const message = this.querySelector('textarea');
            
            let valid = true;
            
            if (name && name.value.trim().length < 2) {
                name.classList.add('is-invalid');
                valid = false;
            } else if (name) {
                name.classList.remove('is-invalid');
            }
            
            if (email && !email.value.includes('@')) {
                email.classList.add('is-invalid');
                valid = false;
            } else if (email) {
                email.classList.remove('is-invalid');
            }
            
            if (message && message.value.trim().length < 5) {
                message.classList.add('is-invalid');
                valid = false;
            } else if (message) {
                message.classList.remove('is-invalid');
            }
            
            if (valid) {
                alert('Message sent! We\'ll get back to you soon.');
                form.reset();
            }
        });
    }
});


const cars = [
    { 
        id: 'n1', 
        name: 'Lamborghini Revuelto "25', 
        price: 'KSH 104,000,000', 
        hp: '1,001 hp', 
        fuel: 'Hybrid', 
        range: '450 km', 
        topSpeed: '350 km/h',
        type: 'New'
    },
    { 
        id: 'n2', 
        name: 'Toyota Supra "22', 
        price: 'KSH 7,350,000', 
        hp: '382 hp', 
        fuel: 'Petrol', 
        range: '600 km', 
        topSpeed: '250 km/h',
        type: 'New'
    },
    { 
        id: 'n3', 
        name: 'Chevrolet Corvette Stingray "21', 
        price: 'KSH 10,700,000', 
        hp: '495 hp', 
        fuel: 'Petrol', 
        range: '500 km', 
        topSpeed: '296 km/h',
        type: 'New'
    },
    { 
        id: 'n4', 
        name: 'Lotus Evija "21', 
        price: 'KSH 325,000,000', 
        hp: '2,011 hp', 
        fuel: 'Electric', 
        range: '400 km', 
        topSpeed: '350 km/h',
        type: 'New'
    },
    { 
        id: 'n5', 
        name: 'Mansory Rolls-Royce Spectre "25', 
        price: 'KSH 70,000,000', 
        hp: '585 hp', 
        fuel: 'Electric', 
        range: '450 km', 
        topSpeed: '250 km/h',
        type: 'New'
    },
    { 
        id: 'n6', 
        name: 'Aston Martin Vanquish "25', 
        price: 'KSH 55,000,000', 
        hp: '835 hp', 
        fuel: 'Petrol', 
        range: '550 km', 
        topSpeed: '344 km/h',
        type: 'New'
    },

   
    { 
        id: 'u1', 
        name: 'Mercedes-Benz S65 AMG "16', 
        price: 'KSH 13,000,000', 
        hp: '620 hp', 
        fuel: 'Petrol', 
        range: '400 km', 
        topSpeed: '250 km/h',
        type: 'Used'
    },
    { 
        id: 'u2', 
        name: 'Lamborghini Huracán "15', 
        price: 'KSH 45,000,000', 
        hp: '610 hp', 
        fuel: 'Petrol', 
        range: '450 km', 
        topSpeed: '325 km/h',
        type: 'Used'
    },
    { 
        id: 'u3', 
        name: 'Nissan Skyline GT-R R34 "99', 
        price: 'KSH 21,700,000', 
        hp: '700 hp', 
        fuel: 'Petrol', 
        range: '400 km', 
        topSpeed: '300 km/h',
        type: 'Used'
    },
    { 
        id: 'u4', 
        name: 'Lexus LFA "11', 
        price: 'KSH 78,000,000', 
        hp: '553 hp', 
        fuel: 'Petrol', 
        range: '450 km', 
        topSpeed: '325 km/h',
        type: 'Used'
    },
    { 
        id: 'u5', 
        name: 'Mercedes-Benz 300SL "55', 
        price: 'KSH 226,050,000', 
        hp: '240 hp', 
        fuel: 'Petrol', 
        range: '450 km', 
        topSpeed: '260 km/h',
        type: 'Used'
    },
    { 
        id: 'u6', 
        name: '1970 Dodge Charger R/T', 
        price: 'KSH 26,000,000', 
        hp: '425 hp', 
        fuel: 'Petrol', 
        range: '400 km', 
        topSpeed: '230 km/h',
        type: 'Used'
    }
];

const s1 = document.getElementById('car1');
const s2 = document.getElementById('car2');
const btn = document.getElementById('compareBtn');
const res = document.getElementById('result');

function fillDropdowns() {
    const newCars = cars.filter(c => c.type === 'New');
    const usedCars = cars.filter(c => c.type === 'Used');
    
    let options = '<option value=""> Select </option>';
    
    options += '<optgroup label="New Cars">';
    for (let c of newCars) {
        options += `<option value="${c.id}">${c.name}</option>`;
    }
    options += '</optgroup>';
    
    options += '<optgroup label="Used Cars">';
    for (let c of usedCars) {
        options += `<option value="${c.id}">${c.name}</option>`;
    }
    options += '</optgroup>';
    
    s1.innerHTML = options;
    s2.innerHTML = options;
}

fillDropdowns();

btn.onclick = function() {
    let car1 = null, car2 = null;
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].id === s1.value) car1 = cars[i];
        if (cars[i].id === s2.value) car2 = cars[i];
    }
    
    if (!car1 || !car2) {
        res.innerHTML = '<div class="alert-warning-custom">Please select two vehicles.</div>';
        return;
    }
    
    if (car1.id === car2.id) {
        res.innerHTML = '<div class="alert-info-custom">Please pick two different cars.</div>';
        return;
    }
    
    res.innerHTML = `
        <div class="compare-table-wrapper">
            <table class="compare-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>${car1.name}</th>
                        <th>${car2.name}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="feature-label">Type</td>
                        <td class="value-cell">${car1.type}</td>
                        <td class="value-cell">${car2.type}</td>
                    </tr>
                    <tr>
                        <td class="feature-label">Price</td>
                        <td class="value-cell">${car1.price}</td>
                        <td class="value-cell">${car2.price}</td>
                    </tr>
                    <tr>
                        <td class="feature-label">Horsepower</td>
                        <td class="value-cell">${car1.hp}</td>
                        <td class="value-cell">${car2.hp}</td>
                    </tr>
                    <tr>
                        <td class="feature-label">Fuel Type</td>
                        <td class="value-cell">${car1.fuel}</td>
                        <td class="value-cell">${car2.fuel}</td>
                    </tr>
                    <tr>
                        <td class="feature-label">Range</td>
                        <td class="value-cell">${car1.range}</td>
                        <td class="value-cell">${car2.range}</td>
                    </tr>
                    <tr>
                        <td class="feature-label">Top speed</td>
                        <td class="value-cell">${car1.topSpeed}</td>
                        <td class="value-cell">${car2.topSpeed}</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
        <div class="compare-footer">Data based on manufacturer estimates</div>
    `;
};