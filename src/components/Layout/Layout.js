import React from 'react';
import './Layout.css'

import Aux from '../../hoc/Aux';

const Layout = (props) => (
  <Aux>
  <div>Toolbar, sidedrawer, backdrop</div>
  <main className="content">
    {props.children}
    </main>
    </Aux>
)

export default Layout
