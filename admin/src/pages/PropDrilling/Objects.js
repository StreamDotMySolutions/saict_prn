const Objects = () => {


    console.log('learning object')

    // create car object
    const car = {
        type: 'Jeep',
        brand: 'Perodua',
        model: 'Ativa'
    }

    console.log(car.type) // get car type

    car.type = 'SUV' // change the type

    console.log(car.type) // get car type

    car.cost = 650000 // add new object

    console.log(car)

    delete car.cost // delete key

    console.log(car)


    
}
export default Objects