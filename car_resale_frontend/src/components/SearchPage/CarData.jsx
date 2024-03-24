// sampleData.js
const CarData={
     cardData : [
    {
      id: 1,
      car_name: "Maruti Alto",
      vehicle_age: 11,
      km_driven: 12833,
      seller_type: 'Manual',
      fuel_type: 'Petro;',
      transmission_type: 'Individual',
      mileage: 67.56,
      engine: 1999,
      max_power: 98.78,
      seats: 5,
      price:566788,
    img:'data:image/jpeg;base64,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',
      owner: {
        name: "John Doe",
        email: "john@example.com",
        phone: "123-456-7890"
      }
    },
    {
      id: 2,
      car_name: "Hyundai Venue",
      vehicle_age: 12,
      km_driven: 10000,
      seller_type: 'Individual',
      fuel_type: 'CNG',
      transmission_type: 'Automatic',
      mileage: 56.40,
      engine: 1834,
      max_power: 78.56,
      seats: 4,
      price:399945,
      img:'data:image/jpeg;base64,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',
      owner: {
        name: "Jane Doe",
        email: "jane@example.com",
        phone: "987-654-3210"
      }
    },  {
        id: 3,
        car_name: "Maruti Swift",
        vehicle_age: 15,
        km_driven: 22309,
        seller_type: 'Manual',
        fuel_type: 'Diseal',
        transmission_type: 'Manual',
        mileage: 56.45,
        engine: 998,
        max_power: 78.67,
        seats: 5,
        price:304445,
        img:'https://images.news18.com/ibnlive/uploads/2021/09/2021-honda-amaze-feature-16462876964x3.jpg?impolicy=website&width=640&height=480',
        owner: {
          name: "Jane Doe",
          email: "jane@example.com",
          phone: "987-654-3210"
        }
      },
      // More car data...
      {
        id: 4,
        car_name: "Hyundai Grand",
        vehicle_age: 9,
        km_driven: 9997,
        seller_type: 'Dealer',
        fuel_type: 'Petrol',
        transmission_type: 'Manual',
        mileage: 67.45,
        engine: 1993,
        max_power: 78.56,
        seats: 5,
        price:656778,
        img:'https://images.news18.com/ibnlive/uploads/2021/09/2021-honda-amaze-feature-16462876964x3.jpg?impolicy=website&width=640&height=480',
        owner: {
          name: "Jane Doe",
          email: "jane@example.com",
          phone: "987-654-3210"
        }
      },
      // More car data...
      {
        id: 5,
        car_name: "Ford Ecosport",
        vehicle_age: 10,
        km_driven: 12933,
        seller_type: 'Dealer',
        fuel_type: 'CNG',
        transmission_type: 'Automatic',
        mileage: 45.45,
        engine: 9987,
        max_power: 67.56,
        seats: 4,
        price:345678,
        img:'https://images.news18.com/ibnlive/uploads/2021/09/2021-honda-amaze-feature-16462876964x3.jpg?impolicy=website&width=640&height=480',
        owner: {
          name: "Jane Doe",
          email: "jane@example.com",
          phone: "987-654-3210"
        }
      },
      // More car data...
      {
        id: 6,
        car_name: "Toyota Innova",
        vehicle_age: 18,
        km_driven: 4584,
        seller_type: 'Individual',
        fuel_type: 'Petrol',
        transmission_type: 'Manual',
        mileage:  38.66,
        engine: 1987,
        max_power: 87.34,
        seats: 5,
        price: 23455,
        img:'https://images.news18.com/ibnlive/uploads/2021/09/2021-honda-amaze-feature-16462876964x3.jpg?impolicy=website&width=640&height=480',
        owner: {
          name: "Jane Doe",
          email: "jane@example.com",
          phone: "987-654-3210"
        }
      },
      // More car data...
      {
        id: 7,
        car_name: "Toyota Fortuner",
        vehicle_age: 16,
        km_driven: 9944,
        seller_type: 'Individual',
        fuel_type: 'Petrol',
        transmission_type: 'Automatic',
        mileage: 56.67,
        engine: 1975,
        max_power: 87.67,
        seats: 5,
        price:456788,
        img:'https://images.news18.com/ibnlive/uploads/2021/09/2021-honda-amaze-feature-16462876964x3.jpg?impolicy=website&width=640&height=480',
        owner: {
          name: "Jane Doe",
          email: "jane@example.com",
          phone: "987-654-3210"
        }
      },
      // More car data...
      {
        id: 8,
        car_name: "Maruti Swift Dzire",
        vehicle_age: 14,
        km_driven: 10344,
        seller_type: 'Dealer',
        fuel_type: 'Diesel',
        transmission_type: 'Automatic',
        mileage: 67.50,
        engine: 1987,
        max_power: 89.40,
        seats: 4,
        price: 456677,
        img:'https://images.news18.com/ibnlive/uploads/2021/09/2021-honda-amaze-feature-16462876964x3.jpg?impolicy=website&width=640&height=480',
        owner: {
          name: "Jane Doe",
          email: "jane@example.com",
          phone: "987-654-3210"
        }
      },
      // More car data...
      {
        id: 9,
        car_name: "Hyundai Verna",
        vehicle_age: 9,
        km_driven: 12344,
        seller_type: 'Individual',
        fuel_type: 'Petrol',
        transmission_type: 'Manual',
        mileage: 45.67,
        engine: 1998,
        max_power: 98.34,
        seats: 5,
        price:678899,
        img:'https://images.news18.com/ibnlive/uploads/2021/09/2021-honda-amaze-feature-16462876964x3.jpg?impolicy=website&width=640&height=480',
        owner: {
          name: "Jane Doe",
          email: "jane@example.com",
          phone: "987-654-3210"
        }
      },
      // More car data...
      {
        id: 10,
        car_name: "Honda Amaze",
        vehicle_age: 10,
        km_driven: 19923,
        seller_type: 'Seller',
        fuel_type: 'Diseal',
        transmission_type: 'Manual',
        mileage: 48.30,
        engine: 1998,
        max_power: 68.45,
        seats: 5,
        price: 345556,
        img:'https://images.news18.com/ibnlive/uploads/2021/09/2021-honda-amaze-feature-16462876964x3.jpg?impolicy=website&width=640&height=480',
        owner: {
          name: "Jane Doe",
          email: "jane@example.com",
          phone: "987-654-3210"
        }
      },
      // More car data...
    
    // More car data...
  ]
}

export default CarData;