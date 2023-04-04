// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationName, destinationimageUrl} = props
  return (
    <div className="search-destination">
      <img
        src={destinationimageUrl}
        alt={destinationName}
        className="img-url"
      />
      <p className="destination-name">{destinationName}</p>
    </div>
  )
}
export default DestinationItem
