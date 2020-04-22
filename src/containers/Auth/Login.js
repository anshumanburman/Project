import { connect } from 'react-redux'

import Login from '../../components/Auth/Login'
import {

  astroInformationAPi,randomAstroidAPI
} from '../../thunks'

const mapStateToProps = ({ AppUsers  }) => ({
  loading: AppUsers.loading,
   user   : AppUsers.user,
   loggedIn:AppUsers.loggedIn,
   randomLoding:AppUsers.randomLoding,
   randomData:AppUsers.randomData,

  
})

const mapDispatchToProps = {
  loginAppUser: astroInformationAPi,
  randomAstroidClk:randomAstroidAPI
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)