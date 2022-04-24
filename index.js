let arr_cars = [{
        name: 'Impala',
        year: 1967,
        isRadio: true,
        color: 'black',
        engine: 6.7,
        price: 80000
    },
    {
        name: 'Camaro',
        year: 1967,
        isRadio: true,
        color: 'red',
        engine: 7,
        price: 300000
    },
    {
        name: 'Corvette',
        year: 1967,
        isRadio: false,
        color: 'white',
        engine: 5.3,
        price: 100000
    },
    {
        name: 'matiz',
        year: '2006',
        isRadio: true,
        color: 'white',
        engine: 0.8,
        price: 3000
    },
    {
        name: 'gentra',
        year: '2021',
        isRadio: true,
        color: 'black',
        engine: 1.5,
        price: 14000
    },
    {
        name: 'kia k5',
        year: '2022',
        isRadio: true,
        color: 'blue',
        engine: 2.0,
        price: 26000
    },
    {
        name: 'malibu',
        year: 2022,
        isRadio: true,
        color: 'black',
        engine: 2.0,
        price: 35000,
    },
    {
        name: 'tahoe',
        year: 2022,
        isRadio: true,
        color: 'black',
        engine: 6.2,
        price: 80000,
    },
    {
        name: 'sanata',
        year: 2022,
        isRadio: true,
        color: 'black',
        engine: 3.3,
        price: 40000,
    },
    {
        name: 'BMW X3',
        year: '2003',
        isRadio: true,
        color: 'black',
        engine: 2.0,
        price: 65000
    },
    {
        name: 'Rolls-royce Ghost',
        year: '2009',
        isRadio: true,
        color: 'black',
        engine: 2.2,
        price: 110000
    },
    {
        name: 'Kia telluride',
        year: '2016',
        isRadio: true,
        color: 'black',
        engine: 2.0,
        price: 42000
    },
    {

        name: 'Toyota',
        year: 1937,
        isRadio: true,
        color: 'white',
        engine: 5.1,
        price: 70000

    },
    {
        name: 'Ferrari',
        year: 1954,
        isRadio: true,
        color: 'red',
        engine: 7.2,
        price: 90000

    },
    {
        name: 'Bugatti',
        year: 1955,
        isRadio: true,
        color: 'blue',
        engine: 6.0,
        price: 75000
    },
    {

        name: 'GTR',
        year: 2013,
        isRadio: true,
        color: 'red',
        engine: 4.7,
        price: 100000

    },
    {
        name: 'Maybach',
        year: 2020,
        isRadio: true,
        color: 'black',
        engine: 8,
        price: 500000

    },
    {
        name: 'Tahoe',
        year: 2022,
        isRadio: false,
        color: 'white',
        engine: 8.3,
        price: 200000
    },
    {
        name: 'malibu',
        year: 2022,
        isRadio: true,
        color: 'white',
        engine: 2.0,
        price: 35000, 
    },
    {
        name: 'Neksiya',
        year: 2014,
        isRadio: true,
        color: 'white',
        engine: 1.6,
        price: 6000, 
    }, 
    {
        name: 'dvux sotka',
        year: 2022,
        isRadio: true,
        color: 'white',
        engine: 3.3,
        price: 45000, 
    }
]

let search = prompt()
for(let item of arr_cars){
    if(search.toLowerCase() == item.name.toLowerCase()){
        let del = confirm(`
        name:${item.name}
        year:${item.year}
        isRadio:${item.isRadio}
        color:${item.color}
        engine:${item.engine}
        price:${item.price}

        Ты уверен что хочешь удалить ${item.name}?
        `)
        if(del === true){
            arr_cars.splice(arr_cars.indexOf(item),1)
            console.log(arr_cars);
        }
    } else{
     document.write(`
     name:${item.name} <br>
     year:${item.year} <br>
     isRadio:${item.isRadio} <br>
     color:${item.color} <br>
     engine:${item.engine} <br>
     price:${item.price} <hr>
     `)
    }
}