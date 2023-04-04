// Write your code here
import DestinationItem from '../DestinationItem'

import './index.css'

const DestinationSearch = props => {
  const {userDetails} = props
  const {name, imgUrl} = userDetails

  return (
    <li className="user-card-container">
      <DestinationItem destinationName={name} destinationimageUrl={imgUrl} />
    </li>
  )
}

export default DestinationSearch
