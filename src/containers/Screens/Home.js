import { connect } from 'react-redux'

import Home from '../../components/Screens/Home'
import { astroInformationAPi } from '../../thunks'

const mapStateToProps = ({ AppUsers }) => ({
  loading: AppUsers.loading,
   data   : AppUsers.user,
 // error :AppUsers.error,
  loggedIn:AppUsers.loggedIn
})

const mapDispatchToProps = {
  astroInformationAPi: astroInformationAPi,

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)