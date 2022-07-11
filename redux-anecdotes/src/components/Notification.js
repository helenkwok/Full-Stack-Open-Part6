import { connect } from 'react-redux'

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }

  return (
    <>
      {
        props.notificationToShow === '' ?
          <></>
          :
          <div style={style}>
            {props.notificationToShow}
          </div>
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    notificationToShow: state.notification
  }
}

const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification