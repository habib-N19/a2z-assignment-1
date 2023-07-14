import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CirclesContext } from '../../providers/CircleProvider'

const SingleUser = () => {
  const { id } = useParams()
  console.log(id)

  const { usersData } = useContext(CirclesContext)
  console.log(usersData)
  const user = usersData.find(userData => userData.id == id)
  const {
    uid,
    password,
    first_name,
    last_name,
    username,
    email,
    avatar,
    gender,
    phone_number,
    social_insurance_number,
    date_of_birth,
    employment: { title, key_skill },
    address: {
      city,
      street_name,
      street_address,
      zip_code,
      state,
      country,
      coordinates: { lat, lng }
    },
    credit_card: { cc_number },
    subscription: { plan, status, payment_method, term }
  } = user

  console.log(user.address)
  return (
    <div className='w-11/12 mx-auto mt-16 '>
      <h2 className='my-6 text-3xl text-center md:text-5xl'>
        Personal Information
      </h2>
      <div className='grid w-11/12 grid-cols-1 p-4 mx-auto rounded-lg md:grid-cols-3 bg-base-200 h-fit'>
        {/* image */}
        <div className='col-span-1'>
          <figure className='avatar'>
            <img src={avatar} className='max-w-sm rounded-full shadow-2xl' />
          </figure>
        </div>
        <div className='grid grid-cols-3 col-span-2 gap-3 text-lg'>
          <h1 className='col-span-3 mt-3 text-3xl font-bold text-center h-fit'>
            {first_name + ' ' + last_name}
          </h1>
          <p>UID: {uid}</p>
          <p>Username: {username}</p>
          <p>Email: {email}</p>
          <p>Password: {password}</p>
          <p>Gender: {gender}</p>
          <p>Phone Number: {phone_number}</p>
          <p>Social Insurance Number: {social_insurance_number}</p>
          <p>Date Of Birth: {date_of_birth}</p>
          <p>
            Employment: Title: {title} , Key Skill: {key_skill}
          </p>
          subscription: {(plan, status, payment_method, term)}
          <p>Credit Card: {cc_number}</p>
          <p className='font-semibold'>
            Subscription:
            <ul className='font-normal'>
              <li>Plan: {plan}</li>
              <li>Status: {status}</li>
              <li>Payment Method: {payment_method}</li>
              <li>Term: {term}</li>
            </ul>
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <h2 className='my-12 text-3xl text-center md:text-5xl'>
        Contact Information
      </h2>

      <div className='w-11/12 p-4 mx-auto text-lg rounded-lg bg-base-200 h-fit'>
        <div className='grid grid-cols-3 col-span-2 gap-3'>
          <h1 className='col-span-3 mt-3 text-3xl font-bold text-center h-fit'>
            Address
          </h1>
          <p>City: {city}</p>
          <p>Country: {country}</p>
          <p>State: {state}</p>
          <p>Street Address: {street_address}</p>
          <p>Street Name: {street_name}</p>
          <p>Zip Code: {zip_code}</p>
          <p>
            Co ordinates: Lat {lat} Lng {lng}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleUser
