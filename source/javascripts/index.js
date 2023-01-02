import "../stylesheets/index.scss"
// import { typedWelcome } from "./typedWelcome"; // disable in dev
import { projectTabListner, workTabListener } from './tabs'
import { handleDetails } from './detail'
import * as listItem from './listItem'

if (handleDetails) handleDetails()